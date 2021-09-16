import "./App.css";
import Card from "../src/Components/Card";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <a href="home">Home</a>
          <a href="news">News</a>
          <a href="career">Career</a>
          <a href="about us">About us</a>
        </ul>
      </nav>
 
        <Card />

    </div>
  );
}

export default App;
