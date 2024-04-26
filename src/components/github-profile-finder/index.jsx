import { useEffect } from "react";
import { useState } from "react"
import User from "./user";
import "./styles.css"


export default function GithubProfileFinder() {
    const [userName, setUserName] = useState("pasto03");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchGithubUserData() {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${userName}`);

        const data = await res.json();

        if (data) {
            setUserData(data);
            setLoading(false);
            setUserName("");
        }

        console.log(data);
    }

    function handleSubmit() {
        fetchGithubUserData();
    }

    useEffect(() => {
        fetchGithubUserData();
    }, [])

    if (loading) {
        return <div>Loading Data! Please wait.</div>
    }

    return <div className="github-profile-container">
        <div className="input-wrapper">
            <input
                name="search-by-username"
                type="text"
                placeholder="Search GitHub Username..."
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
            />
            <button onClick={handleSubmit}>Search</button>
        </div>
        {userData !== null ? <User user={userData} /> : null}
    </div>
}