import React from 'react';
import moment from 'moment';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DatePicker from './Datepicker';
import Typeahead from './Typeahead';

import { fetchAirportList, fetchFlightResults } from './../action-creators/search';


class Farefinder extends React.Component {
  constructor() {
    super();

    this.state = {
      from: '',
      to: '',
      departurePicker: null,
      returnPicker: null,
      travelClass: 'economy',
      adults: 1,
      children: 1
    };

    this.defaultDepartureDate = moment().add(1, 'days').format('ddd, MMM D, YYYY');
    this.defaultReturnDate = moment().add(5, 'days').format('ddd, MMM D, YYYY');
    this.handleAdultsChange = this.handleAdultsChange.bind(this);
    this.handleChildrenChange = this.handleChildrenChange.bind(this);
    this.handleTravelClassChange = this.handleTravelClassChange.bind(this);
    this.searchFlights = this.searchFlights.bind(this);
  }

  searchFlights() {
    const {
      from, to, departurePicker, returnPicker, travelClass, adults, children
    } = this.state;

    const { fetchFlightResults } = this.props;
    const departureDate = moment(departurePicker.getDate()).format();
    const returnDate = moment(returnPicker.getDate()).format();

    const query = {
      from,
      to,
      departureDate,
      returnDate,
      travelClass,
      adults,
      children
    };

    fetchFlightResults(query);
  }

  handleAdultsChange(event) {
    const { target: { value } } = event;
    this.setState({ adults: value });
  }

  handleChildrenChange(event) {
    const { target: { value } } = event;
    this.setState({ children: value });
  }

  handleTravelClassChange(event) {
    const { target: { value } } = event;
    this.setState({ travelClass: value });
  }

  render() {
    const { airports, fetchAirportList } = this.props;

    return (
      <div className='farefinder__container'>
        <div className='row'>
          <div className='col-xxs-12 col-xs-6 mt'>
            <div className='input-field'>
              <label htmlFor='from'>From:</label>
              <Typeahead
                iconClass='take-off'
                destinations={airports}
                fecthDestinations={fetchAirportList}
                setDestination={from => {
                  this.setState({ from });
                }}
                placeholder='Los Angeles, USA'
              />
            </div>
          </div>
          <div className='col-xxs-12 col-xs-6 mt'>
            <div className='input-field'>
              <label>To:</label>
              <Typeahead
                iconClass='landing'
                destinations={airports}
                fecthDestinations={fetchAirportList}
                setDestination={to => {
                  this.setState({ to });
                }}
                placeholder='Phoenix, USA'
              />
            </div>
          </div>
          <div className='col-xxs-12 col-xs-6 mt alternate'>
            <div className='input-field'>
              <label>Departure:</label>
              <DatePicker
                initialValue={this.defaultDepartureDate}
                setPicker={picker => {
                  this.setState({ departurePicker: picker });
                }}
              />
            </div>
          </div>
          <div className='col-xxs-12 col-xs-6 mt alternate'>
            <div className='input-field'>
              <label>Return:</label>
              <DatePicker
                initialValue={this.defaultReturnDate}
                setPicker={picker => {
                  this.setState({ returnPicker: picker });
                }}
              />
            </div>
          </div>
          <div className='col-sm-12 mt'>
            <label htmlFor='travelClass'>Class:</label>
            <select
              className='form-control'
              onChange={this.handleTravelClassChange}
            >
              <option value disabled defaultValue>Economy</option>
              <option value='economy'>Economy</option>
              <option value='first'>First</option>
              <option value='business'>Business</option>
            </select>
          </div>
          <div className='col-xxs-12 col-xs-6 mt'>
            <label>Adult:</label>
            <select
              className='form-control'
              onChange={this.handleAdultsChange}
            >
              <option value disabled defaultValue>1</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>
          <div className='col-xxs-12 col-xs-6 mt'>
            <label>Children:</label>
            <select
              className='form-control'
              onChange={this.handleChildrenChange}
            >
              <option value disabled defaultValue>0</option>
              <option value={1}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>
          <div className='col-xs-12'>
            <input
              type='submit'
              className='btn btn-primary btn-block'
              defaultValue='Search Flight'
              onClick={this.searchFlights}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    airports: state.app.get('airports'),
    flightResults: state.app.get('flightResults')
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchAirportList,
    fetchFlightResults
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Farefinder);
