import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Router, Route } from 'react-router-dom';
import Search from './components/Search';
import Results from './components/Results';
import Loading from './components/Loading';


const renderRoutes = () => (
  <div>
    <Route path='/search' component={Search} />
    <Route path='/results' component={Results} />
  </div>
);

class App extends React.Component {
  constructor() {
    super();
    this.renderLoadingScreen = this.renderLoadingScreen.bind(this);
  }

  render() {
    const { history } = this.props;
    return (
      <Router history={history}>
        <div>
          { this.renderLoadingScreen() }
          { renderRoutes() }
        </div>
      </Router>);
  }

  renderLoadingScreen() {
    const { isFetchingResults } = this.props;

    if (!isFetchingResults) {
      return null;
    }

    return (<Loading />);
  }
}

function mapStateToProps(state) {
  return {
    isFetchingResults: state.app.get('isFetchingResults')
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
