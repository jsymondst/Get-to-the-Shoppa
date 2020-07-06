import React from 'react';


export default class Main extends React.Component {
    render() {
      return (
        <div>
          <p>logged in as {this.props.user}</p>
        </div>        
      );
    }
  }