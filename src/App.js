import "./App.css";

import Navbar from "../src/components/header/Navbar";
import Home from "../src/components/home/Home";
import HorizLine from "./components/ui/HorizLine";
import AboutMe from "../src/components/about-me/AboutMe";
import MyWork from "../src/components/my-work/MyWork";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <HorizLine />
        <AboutMe />
        <HorizLine />
        <MyWork />
        <HorizLine />
      </main>
    </div>
  );
}

export default App;
