import "./App.css";

import Layout from "../src/components/layout/Layout";
import Home from "../src/components/home/Home";
import HorizLine from "./components/ui/HorizLine";
import AboutMe from "../src/components/about-me/AboutMe";
import MyWork from "../src/components/my-work/MyWork";

function App() {
  return (
    <Layout className="App">
      <Home />
      <HorizLine />
      <AboutMe />
      <HorizLine />
      <MyWork />
      <HorizLine />
    </Layout>
  );
}

export default App;
