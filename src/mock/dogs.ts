import ShibaInu from "../../src/img/shiba-inu.jpeg";
import Beagle from "../../src/img/beagle.jpeg";
import Doberman from "../../src/img/doberman.jpeg";

type DOG = {
    id: number,
    image?: string,
    breed: string,
    age: number,
    description: string
}

const dogs: DOG[] = [
    {
        id: 0,
        image: `${ShibaInu}`,
        breed: 'ShibaInu',
        age: 1,
        description: 'something nice..'
    },
    {
        id: 1,
        image: `${Doberman}`,
        breed: 'Doberman',
        age: 0.3,
        description: 'something nice..'
    },
    {
        id: 2,
        image: `${Beagle}`,
        breed: 'Beagle',
        age: 0.5,
        description: 'something nice..'
    },
    {
        id: 3,
        image: '',
        breed: 'someBreed',
        age: 0.11,
        description: 'something nice..'
    }

]

export default dogs