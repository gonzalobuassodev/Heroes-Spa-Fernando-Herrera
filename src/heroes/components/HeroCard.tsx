import { Link } from 'react-router-dom';
import { IHero } from '../interfaces';

export const HeroCard = ({ hero }: { hero: IHero }) => {
    const {
        id,
        superhero,
        alter_ego,
        first_appearance,
        characters,
    } = hero;


    const heroUrl = `/assets/heroes/${id}.jpg`;
    return (
        <div className=" bg-slate-100 rounded-md w-100 my-4">
            <div className="grid grid-cols-2 gap-2">
                <div className="animate__animated animate__fadeIn rounded-md">
                    <img src={heroUrl} alt={superhero} className='rounded-md' />
                </div>

                <div className="px-4">
                    <h2 className="text-xl">{superhero}</h2>
                    <p>{alter_ego}</p>
                    {alter_ego !== characters && <p>{characters}</p>}
                    <p>
                        <span className="text-slate-400">
                            {first_appearance}
                        </span>
                    </p>

                    <Link to={`/hero/${id}`}>Mas info</Link>
                </div>
            </div>
        </div>
    );
};
