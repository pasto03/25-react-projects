import LightDarkMode from "../light-dark-mode";
import GithubProfileFinder from "../github-profile-finder";
import TicTacToe from "../tic-tac-toe";
import LiveSearch from "../sermon-live-search/live_search";
import RandomColor from "../random-color";
import Accordian from "../accordian";
import TreeView from "../tree-view";
import menus from "../tree-view/data";
import TabTest from "../custom-tabs/tab-test";

import { useContext } from "react";
import { FeatureFlagsContext } from "./context";

export default function FeatureFlags() {
    const { loading, enabledFlags } = useContext(FeatureFlagsContext);

    const componentsToRender = [

        {
            "key": "showLightAndDarkMode",
            "component": <LightDarkMode />
        },
        {
            "key": "showProfileFinder",
            "component": <GithubProfileFinder />
        },
        {
            "key": "showTicTacToeBoard",
            "component": <TicTacToe />
        },
        {
            "key": "showLiveSearch",
            "component": <LiveSearch />
        },
        {
            "key": "showRandomColorGenerator",
            "component": <RandomColor />
        },
        {
            "key": "showAccordian",
            "component": <Accordian />
        },
        {
            "key": "showTreeView",
            "component": <TreeView menus={menus} />
        },
        {
            "key": "showTabs",
            "component": <TabTest />
        }

    ]

    function checkEnabledFlags(getCurrentKey) {
        return enabledFlags[getCurrentKey];
    }

    if (loading) return <div>Loading data! Please wait.</div>

    return (
        <div>
            <h1>Feature Flags</h1>
            {
                componentsToRender.map(componentItem => checkEnabledFlags(componentItem.key) ? componentItem.component : null)
            }
        </div>
    )
}