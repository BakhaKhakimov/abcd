import dogs from "../mock/dogs";
import noImage from "../img/noimage.png";

function Card() {
  return (
    <section id="dogs" className="cards">
      {dogs.map((dog) => {
        const { id, breed, image, age, description } = dog;
        return (
          <div className="pets-card" key={id}>
            <div>
              {image ? (
                <img src={image} alt={breed} />
              ) : (
                <img src={noImage} alt={breed} />
              )}
            </div>

            <div>
              <p>{breed}</p>
              <p>{age}</p>
              <p>{description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Card;
