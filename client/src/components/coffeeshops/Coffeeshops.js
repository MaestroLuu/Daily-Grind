import React, {Component} from 'react';
import './Coffeeshops.css';

class Coffeeshops extends Component {
  constructor() {
    super();
    this.state = {
      coffeeshops: []
    }
  }

  componentDidMount() {
    fetch('api/coffeeshops')
    .then(res => res.json())
    .then(function (coffeeshops) {
      this.setState({ coffeeshops }, () => console.log('Coffeeshops fetched...', coffeeshops));
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Coffeeshops</h2>
        <ul>
          {this.state.coffeeshops.map(coffeeshop => <li key={coffeeshop.id}>{coffeeshop.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default Coffeeshops;
