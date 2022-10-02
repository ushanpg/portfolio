import React from "react";
import Header from "./Components/Header"
import Intro from "./Components/Intro";
import About from "./Components/About";
import Profile from "./Components/Profile";
import Education from "./Components/Education";
import Footer from "./Components/Footer";
import Scroller from "./Components/Scroller";
import CheckView from "./Components/CheckView";

function App() {

 CheckView()

  return (
    <div className="App">
      <Scroller />
      <Header />
      <Intro />
      <About />
      <Profile />
      <Education />
      <Footer />      
    </div>
  );
}

export default App;
