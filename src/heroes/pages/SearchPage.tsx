import { FormEvent } from 'react';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import { getHeroesByName } from '../helpers';
import { IHero } from '../interfaces';
import { HeroCard } from '../components';

interface QueryParams {
    q?: string;
}

export const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search) as QueryParams;

    const heroes = getHeroesByName(q);

    const showSearch = q === '';

    const showErrors = heroes.length < 1 && q !== '';

    const { formState, onInputChange } = useForm({
        searchText: '',
    });

    const { searchText } = formState;

    const onSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate(`?q=${searchText.toLocaleLowerCase().trim()}`);
    };

    return (
        <>
            <h1>Search</h1>
            <hr />
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <h4>Searching</h4>

                    <hr />

                    <form onSubmit={(e) => onSearchSubmit(e)}>
                        <input
                            type="text"
                            placeholder="Search a Hero"
                            className="border-2 border-slate-500 rounded-md p-2"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />

                        <button className="bg-blue-500 hover:bg-blue-800 text-white p-2 rounded-md m-4">
                            Search
                        </button>
                    </form>
                </div>

                <div>
                    <h4>Results</h4>
                    <hr />

                    <div
                        className={`mt-3 p-4 bg-blue-300 rounded-md border-2 border-blue-500 
                          ${showSearch ? 'block' : 'hidden'} animate__animated animate__fadeIn`}
                    >
                        Search a Hero
                    </div>

                    <div
                        className={`my-3 p-4 bg-pink-200 rounded-md border-2 border-slate-500 
                          ${showErrors ? 'block' : 'hidden'} animate__animated animate__fadeIn`}
                    >
                        There`s no results with <b>{q}</b>
                    </div>

                    {heroes &&
                        heroes.map((hero: IHero) => <HeroCard hero={hero} />)}
                </div>
            </div>
        </>
    );
};
