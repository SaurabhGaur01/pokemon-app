import { createPokemon } from '../actions/pokemons';
import { changeLoading } from '../actions/loading';
import { changeMessage } from '../actions/message';

const handleRetrievePokemonData = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    return async (dispatch) => {
        let i;
        const maxPkm = 50;
        for(i=1; i<maxPkm; i++) {
            const numberPkm = i;
            await fetch(url + numberPkm)
                .then(response => response.json())
                .then(data => {
                    const abilities = data.abilities.map(ability => ability.ability.name);
                    dispatch(createPokemon({
                        page: (numberPkm /50),
                        number: numberPkm,
                        name: data.name,
                        image: data.sprites.front_default,
                        height: data.height,
                        weight: data.weight,
                        abilities,
                    }));
                    dispatch(changeLoading(false));
                })
                .catch(() => {
                    changeMessage('Unexpected Error at API, try reload')
                })
        }
    }
}

export default handleRetrievePokemonData;