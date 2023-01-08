import "./App.css";

import Navbar from "../src/components/header/Navbar";
import Home from "../src/components/home/Home";
import HorizLine from "./components/ui/HorizLine";
import AboutMe from "../src/components/about-me/AboutMe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <HorizLine />
        <AboutMe />
      </main>
    </div>
  );
}

export default App;
