import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = event => {//event as props for event handler 
    this.setState({ term: event.target.value });
  };

  // calls the callback function set in App.js
  onFormSubmit = event => {
    // <form/> will submit auto if user hit enter key, page gonna refresh
    // ensure browser do not auto submit form anytime user submitted it
    // because we want to run custom logic
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        {/* do not put parenthesis on onFormSubmit, cause it is passed to props*/}
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              // callback function will be called anytime input gets changed
              onChange={this.onInputChange} 
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
