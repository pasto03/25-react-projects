import { useEffect, useState } from "react";
import "./style.css";

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function randomColorUtility(length=256) {
        return Math.floor(Math.random() * length);
    }

    function handleCreateRandomColor() {
        if (typeOfColor === "hex") {
            const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
            let hexColor = "#";
            for (let i = 0; i < 6; i++) {
                hexColor += hex[randomColorUtility(15)];
            }
            setColor(hexColor);
            console.log(`Hex: ${hexColor}`)
        } else if (typeOfColor === "rgb") {
            const randomColor = `rgb(${randomColorUtility()}, ${randomColorUtility()}, ${randomColorUtility()})`;
            setColor(randomColor);
            console.log(`RGB: ${randomColor}`);
        }
    }

    useEffect(() => handleCreateRandomColor(), [typeOfColor]);

    return <div 
        style={{
            width: "100vw",
            height: "100vh",
            background: color,
        }}
    >
        <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button onClick={() => handleCreateRandomColor()}>Generate Random Color</button>
        <div className="displayText">
            <h3>{typeOfColor === 'rgb' ? "RGB Color" : "HEX Color"}</h3>
            <h1>{color}</h1>
        </div>
    </div>
}