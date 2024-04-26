

export async function fetchSermon(getQuery, k) {
    try {
        const body = JSON.stringify({ query: getQuery, k: k });
        // console.log(`Request body: ${body} | ${typeof body}`)
        const response = await fetch("/search", {
            method: "POST",
            body: body,
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
            },
            mode: "cors",
        });

        const data = await response.json();

        if (data) {
            // console.log(data);
            return data;
        }
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

// const data = await fetchSermon("警醒", 2);
// console.log(data);