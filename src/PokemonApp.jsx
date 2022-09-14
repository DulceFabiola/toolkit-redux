import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {

    const dispatch = useDispatch();
    const { page, pokemons = [], isLoading } = useSelector(state => state.pokemons);

    //Cuando el componente es creado por primera vez
    useEffect(() => {
        dispatch(getPokemons());
    }, [])

    return (
        <>
            <h1>PokemonApp</h1>
            <hr />
            <span>Loading: {!isLoading ? 'True' : 'False'}</span>
            <ul>
                {pokemons.map(({ name }) => {
                    return (
                        <li key={name}>
                            {name}
                        </li>
                    )
                })}

            </ul>
            <button
                disabled={isLoading}
                onClick={() => dispatch(getPokemons(page))}
            >Next</button>
        </>
    )
}
