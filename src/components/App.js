import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import InfoMessages from './shared/InfoMessages';
import PokemonsList from './Pokemon/PokemonsList';
import handleRetrievePokemonData from '../thunks/handleRetreivePokemonData';

const App = ({ handleRetrievePokemonData }) =>{
  React.useEffect(() => {
    handleRetrievePokemonData();
  }, []);

  return (
    <Router>
      <div className="header-Nav">
          <div className="flex-start">
            <Link className="clear-link" to="/">
              <h1 className="self-center color-black">Pokemon Catalog</h1>
            </Link>
            <ul className="self-center list-links">
              <li>
                <Link className="clear-link color-white" to="/">Home</Link>
              </li>
            </ul>
          </div>
          <InfoMessages />
        </div>
        <div>
          <Switch>
            {/* <Route exact path="/pokemon/:number">
              <PokemonsDetails />
            </Route> */}
            <Route exact path="/">
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