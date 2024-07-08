import Header from "./section/Header";
import HomeHero from "./section/HomeHero";
import HomeBrand from "./section/HomeBrand";
import HomeInfo from "./section/HomeInfo";
import HomeCollaborate from "./section/HomeCollaborate";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeHero/>
      <HomeBrand/>
      <HomeInfo/>
      <HomeCollaborate/>
    </div>
  );
}

export default App;
