import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

class ClassComponent extends Component {

  render() {
    return (
       <ThemeContext.Consumer>    
			{value => <div>{value.state}</div>}   
		</ThemeContext.Consumer>  
    );
  }
}

export default ClassComponent;
