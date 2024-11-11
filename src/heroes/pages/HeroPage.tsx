import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroesById } from '../helpers';
import { useMemo } from 'react';

export const HeroPage = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    // console.log(id)
    const hero = useMemo(() => getHeroesById(id), [id]); ;

    const onNavigateBack = () => {
      navigate(-1);
    }

    if (!hero) {
        return <Navigate to="/marvel" />;
    }


    // console.log(hero)
    return (
        <div className="px-4 mt-5">
            <div className="grid grid-cols-2 gap-4">
                <img
                    className="animate__animated animate__fadeInLeft"
                    src={`/assets/heroes/${hero.id}.jpg`}
                    alt={hero.id}
                />
                <div>
                    <h1 className="text-3xl">{hero.superhero}</h1>
                    <ul>
                        <li className="ml-5 my-2">
                            <b>Alter ego:</b> {hero.alter_ego}
                        </li>
                        <li className="ml-5 my-2">
                            <b>Publisher:</b> {hero.publisher}
                        </li>
                        <li className="ml-5 my-2">
                            <b>First appearence:</b> {hero.first_appearance}
                        </li>
                    </ul>

                    <h5 className="mt-3 text-xl">Characters</h5>
                    <p>{hero.characters}</p>

                    <button
                        onClick={onNavigateBack}
                        className="border-blue-500 border rounded-md p-3 mt-3 hover:bg-blue-800 hover:text-white"
                    >
                        Regresar
                    </button>
                </div>
            </div>
        </div>
    );
};
