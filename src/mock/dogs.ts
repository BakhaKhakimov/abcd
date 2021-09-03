import { type } from "os";
import ShibaInu from "../../src/img/shiba-inu.jpeg";
import Beagle from "../../src/img/beagle.jpeg";
import Doberman from "../../src/img/doberman.jpeg";

type DOG = {
    image?: string,
    breed: string,
    age: number,
    description: string
}

const dogs: DOG[] = [
    {
        image: `${ShibaInu}`,
        breed: 'ShibaInu',
        age: 1,
        description: 'something nice..'
    },
    {
        image: `${Doberman}`,
        breed: 'Doberman',
        age: 0.3,
        description: 'something nice..'
    },
    {
        image: `${Beagle}`,
        breed: 'Beagle',
        age: 0.5,
        description: 'something nice..'
    }

]

export default dogs