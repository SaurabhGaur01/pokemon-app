import { changeLoading } from './loading';
import { POKEMON_SPECIES_URL, POKEMON_URL, POKEMON_DETAILS, UNKNOWN } from '../constants/appConstants';

const handleRetrievePokemonDetails = number => async (dispatch) => {
    dispatch(changeLoading(true));
    await fetch(POKEMON_URL + number)
        .then(response => response.json())
        .then(initialData => {
            dispatch({
                type: POKEMON_DETAILS,
                details: {},
            });
            
            fetch(POKEMON_SPECIES_URL + number)
                .then(response => response.json())
                .then(speciesData => {
                    const types = initialData.types.map(type => (type.type.name));
                    const texts = speciesData.flavor_text_entries.filter(item => (item.language.name === 'en')).map(text => text.flavor_text);
                    const txtSize = texts.length;
                    const singleTxt = texts[Math.floor(Math.random() * txtSize)];

                    let habitatName = UNKNOWN;
                    if (speciesData.habitat) {
                        habitatName = speciesData.habitat.name;
                    }

                    let growthRate = UNKNOWN;
                    if (speciesData.growth_rate) {
                        growthRate = speciesData.growth_rate.name;
                    }

                    let shape = UNKNOWN;
                    if (speciesData.shape) {
                        shape = speciesData.shape.name;
                    }

                    let color = UNKNOWN;
                    if (speciesData.color) {
                        color = speciesData.color.name;
                    }

                    let captureRate = UNKNOWN;
                    if (speciesData.capture_rate) {
                        captureRate = speciesData.capture_rate;
                    }
                    
                    dispatch({
                        type: POKEMON_DETAILS,
                        details: {
                            number: initialData.id,
                            namePkm: initialData.name,
                            baseExperience: initialData.base_experience,
                            height: initialData.height,
                            weight: initialData.weight,
                            image: initialData.sprites.front_default,
                            captureRate,
                            types,
                            text: singleTxt,
                            habitat: habitatName,
                            growthRate,
                            shape,
                            color
                        }
                    });
                }).catch(error => {
                    // Error handling here
                })
    }).catch(error => {
        // Error handling here
    })
    dispatch(changeLoading(false));
}

export default handleRetrievePokemonDetails;