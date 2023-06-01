import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Intro from "./components/Intro";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Intro/>
        <Section
          title="Income Prediction using Machine Learning"
          subtitle="Mini school project which is on income taken from Glassdoor- Analyze Gender Pay Gap, to predict income based on the various varibales. Since wealth is a form of measurement of success, our motivation is how to get rich. Hence we want to find out how to predict how much income one can receive in the future."
          date="January 2022"
          dark={true}
          id="projects"
        />
        <Section
          title="Internship Experience"
          subtitle="Nobody wants me :((("
          dark={false}
          id="intern"
        />
      </div>
    );
  }
}

export default App;
