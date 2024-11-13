import { heroes } from "../data/heroes";
import { IHero } from "../interfaces";


export const getHeroesByName = (name: string = '') => {

    name = name.toLocaleLowerCase().trim();

    if (name.length === 0) return [];
    // console.log(name)

    return heroes.filter((hero: IHero) => hero.superhero.toLocaleLowerCase().includes(name));

}