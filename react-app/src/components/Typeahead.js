import React from 'react';
import Autosuggest from 'react-autosuggest';

import { debounce } from './../utils/timing';

const getSuggestionValue = suggestion => `${suggestion.city}, ${suggestion.country} - ${suggestion.name}`;

class Typeahead extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };

    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event, { newValue }) {
    const { fecthDestinations } = this.props;

    const inputLength = newValue.length;
    if (inputLength >= 3) {
      fecthDestinations(newValue);
    }

    this.setState({
      value: newValue
    });
  }

  getSuggestions(value) {
    const { destinations } = this.props;

    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : destinations.slice(0, 25).filter(destination =>
      destination.get('city').toLowerCase().slice(0, inputLength).includes(inputValue)).toJS();
  }

  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  }

  onSuggestionSelected(event, { suggestion }) {
    const { setDestination } = this.props;
    setDestination(suggestion);
  }

  render() {
    const { placeholder } = this.props;
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder,
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={debounce(this.onSuggestionsFetchRequested, 500)}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        onSuggestionSelected={this.onSuggestionSelected}
        inputProps={inputProps}
      />
    );
  }

  renderSuggestion(suggestion) {
    const { iconClass } = this.props;
    return (
      <div>
        <i className={`icon-aircraft-${iconClass}`} aria-hidden='true' />&nbsp;
        <span>{`${suggestion.city}, ${suggestion.country} - ${suggestion.name}`}</span>
      </div>
    );
  }
}

export default Typeahead;
