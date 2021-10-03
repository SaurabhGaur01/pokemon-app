import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import loadImg from '../../assets/loadImg.gif';
import handleRetrievePokemonDetails from '../../actions/handleRetrievePokemonDetails';

const PokemonsDetails = ({
    handleRetrievePokemonDetails,
    pokemonDetails,
    loading,
}) => {
    const { number } = useParams();

    React.useEffect(() => {
        handleRetrievePokemonDetails(number)
    }, []);

    return (
        <React.Fragment>
            { loading
                && (
                <div data-testid="loading-det" className="bg-load">
                    <img className="margin-top-30 image-load" src={loadImg} alt="loadingImage" />
                </div>
            )}

            { !loading && (
                <div className="pok-details" key={`#${pokemonDetails.number} ${pokemonDetails.namePkm}`}>
                    <div className="main-info-container">
                        <span className="detail-name">
                        {`#${pokemonDetails.number} ${pokemonDetails.namePkm}`.toUpperCase()}
                        </span>
                        <div className="flex-details card-detail-container">
                        <div className="detail-col-1">
                            <img className="detail-img" src={pokemonDetails.image} alt={pokemonDetails.namePkm} />
                            <div className="detail-text">
                            {pokemonDetails.text}
                            </div>
                        </div>
                        <div className="flex-details-2">
                            <div className="mr-2">
                                <h4>Details Pokemon</h4>
                                <div data-testid="pokemon-height" className="my-3">
                                    <span className="font-weight-bold">Height: </span>
                                    {pokemonDetails.height}
                                </div>
                                <div data-testid="pokemon-weight" className="my-3">
                                    <span className="font-weight-bold">Weight: </span>
                                    {pokemonDetails.weight}
                                </div>
                                <div className="my-3">
                                    <span className="font-weight-bold">Capture Rate: </span>
                                    {pokemonDetails.captureRate}
                                </div>
                                <div className="my-3">
                                    <span className="font-weight-bold">Growth Rate: </span>
                                    {pokemonDetails.growthRate}
                                </div>
                                <div className="my-3">
                                    <span className="font-weight-bold">Base Exp: </span>
                                    {pokemonDetails.baseExperience}
                                </div>
                                <div className="type-container">
                                    { pokemonDetails.types && pokemonDetails.types.length === 1
                                    && (
                                    <span className="type-title">Type</span>
                                    )}
                                    { pokemonDetails.types && pokemonDetails.types.length > 1
                                    && (
                                        <span className="type-title">Types</span>
                                    )}
                                    <ul className="type-list-det">
                                    {
                                        pokemonDetails.types
                                        && pokemonDetails.types.map(type => (<li key={type}>{type}</li>))
                                    }
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h4>Details Species</h4>
                                <div className="my-3">
                                    <span className="font-weight-bold">Habitat: </span>
                                    { pokemonDetails.habitat && pokemonDetails.habitat.charAt(0).toUpperCase() + pokemonDetails.habitat.slice(1) }
                                </div>
                                <div className="my-3">
                                    <span className="font-weight-bold">Shape: </span>
                                    { pokemonDetails.shape && pokemonDetails.shape.charAt(0).toUpperCase() + pokemonDetails.shape.slice(1) }
                                </div>
                                <div className="my-3">
                                    <span className="font-weight-bold">Color: </span>
                                    { pokemonDetails.color && pokemonDetails.color.charAt(0).toUpperCase() + pokemonDetails.color.slice(1) }
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    )
}

PokemonsDetails.propTypes = {
    pokemonDetails: PropTypes.shape({}),
    loading: PropTypes.bool.isRequired,
    handleRetrievePokemonDetails: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
    handleRetrievePokemonDetails,
};

const mapStateToProps = state => ({
    pokemonDetails: state.pokemonDetails,
    loading: state.loading,
});

export { PokemonsDetails as TestablePokemonsDetails };

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsDetails);