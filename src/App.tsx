import "./App.css";
import ShibaInu from "./img/shiba-inu.jpeg";
import Beagle from "./img/beagle.jpeg";
import Doberman from "./img/doberman.jpeg";
import NoImage from "./img/noimage.png";
import PetsCard from "./Components/PetsCard";
import Navbar from "./Components/Navbar";

const loremIpsum =
  "Id magna esse consectetur magna amet ullamco enim quis laboris mollit esse id proident sunt. Veniam irure magna dolor esse non do id occaecat voluptate nulla. Sint deserunt ut et deserunt est excepteur nulla aliquip do occaecat occaecat nulla ipsum. Ad laboris reprehenderit nostrud culpa commodo ea irure magna.";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="pets" className="flex flex-wrap rounded justify-center mt-4">
        <PetsCard
          image={ShibaInu}
          breed="ShibaInu"
          age="1"
          description={loremIpsum}
        />
        <PetsCard
          image={Beagle}
          breed="Beagle"
          age="0.3"
          description={loremIpsum}
        />
        <PetsCard
          image={Doberman}
          breed="Doberman"
          age="0.5"
          description={loremIpsum}
        />
        <PetsCard
          image={NoImage}
          breed="someBreed"
          age="0.11"
          description={loremIpsum}
        />
        {/* for scrolling reasons */}
        <PetsCard
          image={ShibaInu}
          breed="ShibaInu"
          age="1"
          description={loremIpsum}
        />
        <PetsCard
          image={Beagle}
          breed="Beagle"
          age="0.3"
          description={loremIpsum}
        />
        <PetsCard
          image={Doberman}
          breed="Doberman"
          age="0.5"
          description={loremIpsum}
        />
        <PetsCard
          image={NoImage}
          breed="someBreed"
          age="0.11"
          description={loremIpsum}
        />
      </section>
    </div>
  );
}

export default App;
