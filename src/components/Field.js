//connect to Context Object via 'this.context'

import React from 'react';

import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Name' : 'Naam';
    return(
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  };
}

// Alternative to the 'static contextType' line within the class:

//Field.contextType = LanguageContext;

export default Field;
