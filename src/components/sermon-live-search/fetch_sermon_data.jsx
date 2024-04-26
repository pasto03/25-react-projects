import $ from "jquery";
import { appendVideo } from "./append_video";
// import { fetchSermon } from "./fetch_sermons.mjs";

export function fetchSermonData(getQuery, k) {
    $.ajax({
        type: "POST",
        url: "https://sermon-search-api.onrender.com/search",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
        },
        data: JSON.stringify({ query: getQuery, k: k }),
 
        success: function (data) {appendVideo(data)},
        error: (xhr, textStatus, error) => {
            console.log("Error: " + error);
        }
    });

}