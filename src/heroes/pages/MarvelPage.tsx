import { HeroesList } from '../components';
import { HeroEnum } from '../Enum/hero.enum';

export const MarvelPage = () => {
    return (
        <div className='px-4 mt-5'>
            <h1>Marvel</h1>
            <hr />

            <HeroesList publisher={HeroEnum.MARVEL} />
        </div>
    );
};
