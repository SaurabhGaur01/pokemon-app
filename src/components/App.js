import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import PokemonsList from './Pokemon/PokemonsList';
import PokemonsDetails from './Pokemon/PokemonsDetails';
import handleRetrievePokemonData from '../actions/handleRetreivePokemonData';

const App = ({ handleRetrievePokemonData }) =>{
  React.useEffect(() => {
    handleRetrievePokemonData();
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="header-Nav d-flex justify-content-between">
          <div className="d-flex justify-content-start">
            <Link className="clear-link" to="/">
              <h1 className="self-center text-dark">Pokemon Catalog</h1>
            </Link>
            <ul className="self-center list-links">
              <li>
                <Link className="clear-link text-white" to="/home">Home</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/pokemon/:number">
              <PokemonsDetails />
            </Route>
            <Route exact path="/home">
              <PokemonsList />
            </Route>
          </Switch>
        </div>
      </Router>
  )
};

App.propTypes = {
  handleRetrievePokemonData: PropTypes.func.isRequired,
}

const mapDispatchAsProps = {
  handleRetrievePokemonData,
}

export default connect(null, mapDispatchAsProps)(App);