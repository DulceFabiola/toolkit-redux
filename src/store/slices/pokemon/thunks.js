import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

//Funcion que regresa una tarea asincrona 
export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons());

        //Peticion http
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        // const data = await resp.json()
        //console.log(data)

        //Usando Axios
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)
        dispatch(setPokemons({ pokemons: data.results, page: page + 1 }))
    }
}