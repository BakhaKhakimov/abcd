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
        description: 'Id magna esse consectetur magna amet ullamco enim quis laboris mollit esse id proident sunt. Veniam irure magna dolor esse non do id occaecat voluptate nulla. Sint deserunt ut et deserunt est excepteur nulla aliquip do occaecat occaecat nulla ipsum. Ad laboris reprehenderit nostrud culpa commodo ea irure magna.'
    },
    {
        id: 1,
        image: `${Doberman}`,
        breed: 'Doberman',
        age: 0.3,
        description: 'Id magna esse consectetur magna amet ullamco enim quis laboris mollit esse id proident sunt. Veniam irure magna dolor esse non do id occaecat voluptate nulla. Sint deserunt ut et deserunt est excepteur nulla aliquip do occaecat occaecat nulla ipsum. Ad laboris reprehenderit nostrud culpa commodo ea irure magna.'
    },
    {
        id: 2,
        image: `${Beagle}`,
        breed: 'Beagle',
        age: 0.5,
        description: 'Id magna esse consectetur magna amet ullamco enim quis laboris mollit esse id proident sunt. Veniam irure magna dolor esse non do id occaecat voluptate nulla. Sint deserunt ut et deserunt est excepteur nulla aliquip do occaecat occaecat nulla ipsum. Ad laboris reprehenderit nostrud culpa commodo ea irure magna.'
    },
    {
        id: 3,
        image: '',
        breed: 'someBreed',
        age: 0.11,
        description: 'Id magna esse consectetur magna amet ullamco enim quis laboris mollit esse id proident sunt. Veniam irure magna dolor esse non do id occaecat voluptate nulla. Sint deserunt ut et deserunt est excepteur nulla aliquip do occaecat occaecat nulla ipsum. Ad laboris reprehenderit nostrud culpa commodo ea irure magna.'
    }

]

export default dogs