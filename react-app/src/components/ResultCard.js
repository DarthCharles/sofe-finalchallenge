import React from 'react';
import moment from 'moment';
import { Map } from 'immutable';

import aeroflot from '../assets/logos/aeroflot.png';
import aeromexico from '../assets/logos/aeromexico.png';
import aircanada from '../assets/logos/aircanada.png';
import aireuropa from '../assets/logos/aireuropa.png';
import airfrance from '../assets/logos/airfrance.png';
import alaska from '../assets/logos/alaska.png';
import american from '../assets/logos/american.png';
import ana from '../assets/logos/ana.png';
import avianca from '../assets/logos/avianca.png';
import british from '../assets/logos/british.png';
import delta from '../assets/logos/delta.png';
import iberia from '../assets/logos/iberia.png';
import interjet from '../assets/logos/interjet.png';
import klm from '../assets/logos/klm.png';
import lufhtansa from '../assets/logos/lufthansa.png';
import norwegian from '../assets/logos/norwegian.png';
import spirit from '../assets/logos/spirit.png';
import southwest from '../assets/logos/southwest.png';
import tap from '../assets/logos/tap.png';
import virgin from '../assets/logos/virgin.png';
import united from '../assets/logos/united.png';
import vivaaerobus from '../assets/logos/viva.png';
import volaris from '../assets/logos/volaris.png';
import plane from '../assets/logos/plane.png';

const getAirlineLogo = name => {
  const logos = Map([
    ['Aeroflot Russian Airlines', aeroflot],
    ['Aeroméxico', aeromexico],
    ['Air Canada', aircanada],
    ['Air Europa', aireuropa],
    ['Air France', airfrance],
    ['Alaska Airlines, Inc.', alaska],
    ['American Airlines', american],
    ['Avianca - Aerovías del Continente Americano S.A.', avianca],
    ['All Nippon Airways', ana],
    ['British Airways', british],
    ['Delta Air Lines', delta],
    ['Iberia Airlines', iberia],
    ['Interjet', interjet],
    ['KLM', klm],
    ['Lufthansa Cargo', lufhtansa],
    ['Norwegian Air International', norwegian],
    ['Norwegian Air Shuttle', norwegian],
    ['Spirit Airlines', spirit],
    ['Southwest Airlines', southwest],
    ['United Airlines', united],
    ['TAP Portugal', tap],
    ['Virgin America', virgin],
    ['Viva Aerobús', vivaaerobus],
    ['Volaris', volaris]]);

  return logos.get(name) ? logos.get(name) : plane;
};

class ResultCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isShowingDetails: false
    };
  }
  render() {
    const { airleg, totalPrice } = this.props;
    const { isShowingDetails } = this.state;

    // Airports
    const arrivalDate = moment(airleg.get('arrivalDate'));
    const departureDate = moment(airleg.get('departureDate'));
    const arrivalAirport = airleg.get('arrivalAirport');
    const departureAirport = airleg.get('departureAirport');

    // Segments
    const segments = airleg.get('segments');
    const airLineMarketingName = segments.getIn([0, 'airLineMarketingName']);

    // Duration
    const totalDuration = segments.reduce((sum, obj) => sum + obj.get('duration'), 0);
    const tripDuration = moment.duration({ minutes: totalDuration });


    return (
      <div className='result-card-row row'>
        <div className='col-xs-2 m-none result-card-logo'>
          <img alt='logo' src={getAirlineLogo(airLineMarketingName)} className='img-responsive logo' />
        </div>
        <div className='col-xs-4 u-mt--small'>
          <div className='text-main'>
            {`${departureDate.format('HH:mm')} - ${arrivalDate.format('HH:mm')}`}
          </div>
          <div className='text-muted'>
            { airLineMarketingName }
          </div>
        </div>
        <div className='col-xs-2 u-mt--small'>
          <div>
            {`${tripDuration.hours()}h ${tripDuration.minutes()}m`}
          </div>
          <div className='text-muted'>
            {`${departureAirport.get('iata').toUpperCase()}-${arrivalAirport.get('iata').toUpperCase()}`}
          </div>
        </div>
        <div className='col-xs-2 text-center u-mt--small'>
          { segments.count() > 1 ? `${segments.count()} Stops` : 'Nonstop' }
        </div>
        <div className='col-xs-2 u-mt--small'>
          <span className='lead'>{`$${Math.ceil(totalPrice)}`}</span>
          <i
            tabIndex='0'
            role='button'
            onClick={() => { this.setState({ isShowingDetails: !isShowingDetails }); }}
            className={`icon-chevron-${isShowingDetails ? 'up' : 'down'} u-ml`}
          />
        </div>
      </div>);
  }
}

export default ResultCard;
