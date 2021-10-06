import dogs from "../mock/dogs";
import noImage from "../img/noimage.png";

function Card() {
  return (
    <section id="dogs" className="flex flex-wrap rounded justify-around">
      {dogs.map((dog) => {
        const { id, breed, image, age, description } = dog;
        return (
          <div
            className="max-w-sm rounded overflow-hidden shadow-2xl mt-20 m-5 transform duration-500 hover:scale-105"
            key={id}
          >
            <img
              className="w-full h-64 object-cover transform duration-500 hover:scale-110"
              src={image || noImage}
              alt={breed}
            />
            <div className="px-6 py-4">
              <span className="inline-block px-2 py-1 leading-none bg-yellow-400 text-yellow-900 rounded-full font-semibold uppercase tracking-wide text-xs mb-2">
                {breed}
              </span>
              <p className="lg:text-base text-sm">{age}</p>
              <p className="lg:text-base text-sm">{description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Card;
