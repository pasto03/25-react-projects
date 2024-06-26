
const dummyApiResponse = {
    showLightAndDarkMode: true,
    showProfileFinder: true,
    showTicTacToeBoard: true,
    showLiveSearch: false,
    showRandomColorGenerator: true,
    showAccordian: false,
    showTreeView: true,
    showTabs: true
}

function featureFlagsDataServiceCall() {
    return new Promise((resolve, reject) => {
        if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
        else reject("Some error occured! Please try again!");
    })
}

export default featureFlagsDataServiceCall;
