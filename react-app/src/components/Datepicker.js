import React from 'react';
import Pikaday from 'pikaday';
import moment from 'moment';

class DatePicker extends React.Component {
  componentDidMount() {
    const { setPicker } = this.props;
    const picker = new Pikaday({
      field: this.picker,
      format: 'ddd, MMM D, YYYY',
      minDate: moment().add(1, 'days').toDate()
    });
    picker.setDate(this.props.initialValue, true);
    setPicker(picker);
  }

  render() {
    const { placeholder } = this.props;
    return (
      <input
        ref={el => this.picker = el}
        type='text'
        className='form-control'
        placeholder={placeholder}
      />
    );
  }
}

export default DatePicker;
