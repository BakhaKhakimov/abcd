import React from "react";
import "./App.css";
import ShibaInu from "./img/shiba-inu.jpeg";
import Beagle from "./img/beagle.jpeg";
import Doberman from "./img/doberman.jpeg";

export const App: React.FC = () => {
  return (
    <div className="App">
      <nav>
        <ul>
          <a href="">Home</a>
          <a href="">News</a>
          <a href="">Career</a>
          <a href="">About us</a>
        </ul>
      </nav>

      <section className="cards">
        <div className="pets-card">
          <img src={ShibaInu} alt="shibainu-photo" />
          <p>Name of the breed of pet</p>
        </div>
        <div className="pets-card">
          <img src={Beagle} alt="beagle-photo" />
          <p>Name of the breed of pet</p>
        </div>
        <div className="pets-card">
          <img src={Doberman} alt="doberman-photo" />
          <p>Name of the breed of pet</p>
        </div>
        <div className="pets-card">
          <img src={ShibaInu} alt="" />
          <p>Name of the breed of pet</p>
        </div>
        <div className="pets-card">
          <img src={Beagle} alt="" />
          <p>Name of the breed of pet</p>
        </div>
        <div className="pets-card">
          <img src={Doberman} alt="" />
          <p>Name of the breed of pet</p>
        </div>
      </section>
    </div>
  );
};

export default App;
