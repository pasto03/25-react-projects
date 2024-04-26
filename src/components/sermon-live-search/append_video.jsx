import $ from "jquery";


export function appendVideo(sermons) {
    $("#sermonTable tbody").empty();
    console.log(`Sermons: ${sermons}`);
    sermons.forEach((sermon, index) => {
        console.log(sermon);
        let title = sermon.title;
        let desc = sermon.desc.slice(0, 100);
        if (desc.length > 0) desc += '...';
        const thumbnail = sermon.thumbnail;
        // const videoUrl = "https://www.youtube.com/watch?v=" + sermon.videoID
        const url = sermon.url;
        $("#sermonTable tbody").append(
            `<tr>
            <td>${title}</td>
            <td>${desc}</td>
            <td>
                <a href="${url}">
                    <img src="${thumbnail}" alt="${thumbnail}" width="192" height="108">
                </a>
            </td>
        </tr>`);
    });
}