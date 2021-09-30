import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Pagination } from "@material-ui/lab";
import usePagination from "../shared/Pagination";
import { changeFilter } from '../../actions/filter';
import { changeFilterName } from '../../actions/filterName';
import Pokemon from './Pokemon';
import PokemonName from './PokemonName';
import FilterType from '../shared/FilterType';
import loadImg from '../../assets/loadImg.gif';

const PokemonsList = ({
    pokemons, filter, loading, filterName, changeFilterName, changeFilter,
}) => {
    let [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const count = Math.ceil(pokemons.length / rowsPerPage);
    const _DATA = usePagination(pokemons, rowsPerPage);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

    const handleFilterChange = typePkm => {
        changeFilter(typePkm);
        let newPages = 1;
        if (typePkm !== 'All' || filterName !== '') {
          newPages = 18;
        }
       // setActPage(newPages);
    }
    
    const handleFilterName = namePkm => {
        changeFilterName(namePkm);
        let newPages = 1;
        if (namePkm !== '' || filter !== 'All') {
          newPages = 18;
        }
        // setActPage(newPages);
    }
    
    const handleChangeRowsPerPage = (value) => {
        setRowsPerPage(parseInt(value, 10));
        setPage(0);
    };

    return (
        <React.Fragment>
            <div className="filter-container">
                <FilterType changeFilter={handleFilterChange} filter={filter} />
                <Pagination
                    count={count}
                    size="large"
                    page={page}
                    variant="outlined"
                    shape="rounded"
                    onChange={handleChange}
                />
                <label htmlFor="rowsPerPage">
                    <span>Cards per page: </span>
                        <select 
                            data-testid="filter-type" 
                            className="select-box margin-left" 
                            name="selType" 
                            id="selType" 
                            value={rowsPerPage} 
                            onChange={e => handleChangeRowsPerPage(e.target.value)}>
                        {
                            [10,20,50].map(item => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                            ))
                        }
                        </select>
                </label>
                <PokemonName changeName={handleFilterName} filterName={filterName} />
            </div>

            { loading && (
                <div data-testid="loading" className="bg-load">
                    <img className="image-load" src={loadImg} alt="loadingImage" />
                </div>
            )}

            <div className="cards-container">
                {
                    !loading && _DATA.currentData().map(pokemon => (
                        <Pokemon key={pokemon.name} pokemon={pokemon} />
                    ))
                    //.filter(item => (item.abilities.includes(filter) || filter === 'All'))
                    // .filter(item => (item.props.pokemon.page <= actPage))
                    //.filter(item => item.name === filterName)
                }
            </div>

            <Pagination
                count={count}
                size="large"
                page={page}
                variant="outlined"
                shape="rounded"
                onChange={handleChange}
            />
        </React.Fragment>
    )
}

PokemonsList.defaultProps = {
    pokemons: [],
};

PokemonsList.propTypes = {
    changeFilter: PropTypes.func.isRequired,
    changeFilterName: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    filter: PropTypes.string.isRequired,
    filterName: PropTypes.string.isRequired,
    pokemons: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
    pokemons: state.pokemons,
    filter: state.filter,
    filterName: state.filterName,
    loading: state.loading,
});
  
const mapDispatchAsProps = {
    changeFilterName,
    changeFilter,
}

export default connect(mapStateToProps, mapDispatchAsProps)(PokemonsList);