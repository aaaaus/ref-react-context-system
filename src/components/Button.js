//connect to Context Object via 'Consumer'
//Consumer can handle data from multiple Context Objects within single Component

import React from 'react';

import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {

  //helper functions to reduce gross mess of JSX

  renderButtonText(language) {
    return language === 'english' ? 'Submit' : 'Voorleggen';
  }

  renderButton(color) {
    return(
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {/* { (value) => value === 'english' ? 'Submit' : 'Voorleggen' } */}
          { ({ language }) => this.renderButtonText(language) }
        </LanguageContext.Consumer>
      </button>
    );
  }

  //function within Consumer can be a one liner (see deactivated within helper above)
  //or use helper if logic becomes complex
  //the ONLY child of a Consumer MUST be a function
  render() {
    return (
      <ColorContext.Consumer>
        { (color) => this.renderButton(color) }
      </ColorContext.Consumer>
    )
  }
}

export default Button;
