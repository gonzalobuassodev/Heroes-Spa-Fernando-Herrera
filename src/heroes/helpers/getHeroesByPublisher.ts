import { heroes } from "../data/heroes";
import { Hero } from "../interfaces";

const publishers = ['DC Comics', 'Marvel Comics'];

export const getHeroesByPublisher = (publisher: string) => {

    if (!publishers.includes(publisher)){
        throw new Error(`${publisher} is not allowed`);
    }

    return heroes.filter((hero: Hero) => hero.publisher === publisher)

}