import './App.css';
import FeatureFlags from './components/feature-flag';
import FeatureFlagGlobalState from './components/feature-flag/context';

//import Accordian from './components/accordian';
//import RandomColor from './components/random-color';
// import StarRating from './components/star-rating';
// import ImageSlider from './components/image-slider';
// import LoadMoreData from './components/load-more-data';
// import menus from './components/tree-view/data';
// import TreeView from './components/tree-view';
// import QRCodeGenerator from './components/qr-code-generator';
// import LightDarkMode from './components/light-dark-mode';
// import ScrollIndicator from './components/scroll-indicator';
// import TabTest from './components/custom-tabs/tab-test';
// import ModalTest from './components/custom-modal-popup/modal-test';
// import GithubProfileFinder from './components/github-profile-finder';
// import LiveSearch from './components/(test) sermon-live-search';  /* my testing */
// import SearchAutocomplete from './components/search-autocomplete';
// import TicTacToe from './components/tic-tac-toe';

function App() {
  return (
    <div className='app'>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} /> */}
      {/* <LoadMoreData limit={"20"} /> */}
      {/* <TreeView menus={menus}/> */}
      {/* <QRCodeGenerator/> */}
      {/* <LightDarkMode/> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}
      {/* <TabTest/> */}
      {/* <ModalTest/> */}
      {/* <GithubProfileFinder/> */}
      {/* <LiveSearch/> */}
      {/* <SearchAutocomplete/> */}
      {/* <TicTacToe/> */}
      <FeatureFlagGlobalState>
        <FeatureFlags/>
      </FeatureFlagGlobalState>
    </div>
  );
}

export default App;
