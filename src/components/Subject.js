import React, { Component } from 'react';

class Subject extends Component {
    render(){
      console.log('Subject render');
      return (
        <header>
          <h2>{this.props.title}</h2>
        </header>       
      );
    }
  }

  export default Subject;