import { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers';
import { IHero } from '../interfaces';
import { HeroCard } from './HeroCard';

export const HeroesList = ({ publisher }: { publisher: string }) => {
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]); ;

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {heroes &&
                    heroes.map((hero: IHero) => (
                        <HeroCard key={hero.id} hero={hero} />
                    ))}
            </div>
        </>
    );
};
