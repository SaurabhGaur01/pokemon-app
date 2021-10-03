import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import usePagination from "../shared/Pagination";
import Pokemon from './Pokemon';
import FilterBar from './FilterBar';
import loadImg from '../../assets/loadImg.gif';
import AppPaging from '../shared/AppPaging';

const PokemonsList = ({
    pokemons: { viewList }, loading,
}) => {
    let [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const count = Math.ceil(viewList.length / rowsPerPage);
    const filteredData = usePagination(viewList, rowsPerPage);
    
    const handleChange = (e, p) => {
        setPage(p);
        filteredData.jump(p);
    };
  
    const handleChangeRowsPerPage = (value) => {
        setRowsPerPage(parseInt(value, 10));
        setPage(0);
    };
    
    return (
        <React.Fragment>
            <div className="filter-container">
                <FilterBar />
                <AppPaging 
                    page={page} 
                    count={count} 
                    handleChange={handleChange}
                    handleChangeRowsPerPage={handleChangeRowsPerPage} 
                />
            </div>

            { loading && (
                <div data-testid="loading" className="bg-load">
                    <img className="image-load" src={loadImg} alt="loadingImage" />
                </div>
            )}

            <div className="cards-container">
                {
                    !loading && filteredData.currentData().map((pokemon, index) => (
                        <Pokemon key={index} pokemon={pokemon} />
                    ))
                }
            </div>

            <AppPaging 
                page={page} 
                count={count} 
                handleChange={handleChange}
                handleChangeRowsPerPage={handleChangeRowsPerPage} 
            />
        </React.Fragment>
    )
}

PokemonsList.propTypes = {
    loading: PropTypes.bool.isRequired,
    pokemons: PropTypes.shape({
        viewList: PropTypes.arrayOf(PropTypes.shape({})),
    }),
};

const mapStateToProps = state => ({
    pokemons: state.pokemons,
    loading: state.loading,
});
  
export default connect(mapStateToProps)(PokemonsList);