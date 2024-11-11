import { heroes } from "../data/heroes";
import { IHero } from "../interfaces";

export const getHeroesById = (id: string | undefined) => {

    const result: IHero = heroes.find((hero) => hero.id === id)

    return result;

}