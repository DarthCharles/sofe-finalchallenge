import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import ResultCard from './ResultCard';

const renderResultsHeader = flightSearch => {
  const departureDate = moment(flightSearch.get('departureDate'));
  const returnDate = moment(flightSearch.get('returnDate'));
  const departureAirport = flightSearch.get('to');
  const returnAirport = flightSearch.get('from');
  const passengers = flightSearch.get('adults') + flightSearch.get('children');

  return (
    <div className='row'>
      <div className='col-xs-12'>
        <h3>
          <i className='icon-aircraft-take-off' />
          {` ${departureAirport.get('city')}, ${departureAirport.get('country')} (${departureAirport.get('iata')}) to `}
          <i className='icon-aircraft-landing' />
          {` ${returnAirport.get('city')}, ${returnAirport.get('country')} (${returnAirport.get('iata')}) `}
          <br />
          <span className='small'>{ `${passengers} Passengers, ${departureDate.format('dddd MMM D, YYYY')} - ${returnDate.format('dddd MMM D, YYYY')}`}</span>
        </h3>
      </div>
    </div>);
};

class Results extends React.Component {
  componentWillMount() {
    const { flightResults, flightSearch, push } = this.props;

    if (flightResults.isEmpty() || flightSearch.isEmpty()) {
      push('/search');
    }
  }

  render() {
    const { flightResults, flightSearch } = this.props;

    if (flightResults.isEmpty() || flightSearch.isEmpty()) {
      return null;
    }

    return (
      <div>
        <div className='row'>
          <div className='col-xs-12 results-navbar'>
            <Link to='/search'><i className='icon-arrow-left22' /> Back to search</Link>
          </div>
        </div>
        <div className='container results-container'>
          { renderResultsHeader(flightSearch) }
          { flightResults.map(result => {
            const airlegs = result.get('airlegs');
            const totalPrice = result.getIn(['fares', 'totalPrice', 'amount']) / 2;
            return (
              <div className='result-card mt' key={result.get('key')}>
                { airlegs.map((airleg, index) => (<ResultCard
                  key={index}
                  airleg={airleg}
                  totalPrice={totalPrice}
                />)) }
              </div>);
          }) }
        </div>
      </div>);
  }
}

function mapStateToProps(state) {
  return {
    flightSearch: state.app.get('flightSearch'),
    flightResults: state.app.get('flightResults')
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ push }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
