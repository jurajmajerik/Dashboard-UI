import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import history from './_helpers/history';

import './styles.css';

import fetchData from './_helpers/fetchData';
import articleAdder from './_helpers/articleAdder';

import NavTop from './components/NavTop';
import BarLive from './components/BarLive';
import CountriesList from './components/CountriesList';
import ViewAll from './components/ViewAll';
import ViewCountry from './components/ViewCountry';

class App extends React.Component {
  constructor(props) {
    super(props);
    const dataset = fetchData();
    this.state = { dataset };
  }

  componentDidMount() {
    const i = 0;
    const cycle = articleAdder.bind(this);
    cycle(i);
  }

  render() {
    const { dataset } = this.state;
    return (
      <div className="App">
        <NavTop />
        <BarLive />
        <Router history={history}>
          <div className="data-wrapper">
            <CountriesList />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <ViewAll dataset={dataset} />}
              />
              <Route
                path="/country/:country"
                render={props => <ViewCountry dataset={dataset} {...props} />}
              />
            </Switch>
          </div>
        </Router>
      </div>

    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
