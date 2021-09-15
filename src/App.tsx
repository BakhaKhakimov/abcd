import "./App.css";
import dogs from "./mock/dogs";

function App() {
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

      <section id="dogs" className="cards">
        {dogs.map((dog, index) => (
          <div className="pets-card" key={index}>
            <img src={dog.image} alt="dogs-photo" />
            <p>{dog.breed}</p>
            <p>{dog.age} years old</p>
            <p>{dog.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
