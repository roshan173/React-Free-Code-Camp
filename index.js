import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {

  render() {
    return (
      <div>
        <p>
          Start editing to see some magic happen :)
        </p>
        <ul>
          <li></li>
        </ul>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
