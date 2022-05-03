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
    fetch('https://api.yelp.com/v3/businesses/search?latitude=32.8073216&longitude=-117.1554304&term=coffee'), {
      method: 'GET',
      headers: { 
        Authorization: `Bearer QzupW1zdd0Vd-l-Veb-8lnMKkVt4RYrf6A865pPzlRLtV3NCOvxYvfLc1L54gMrHQQdy43zM1go_S55R2MXJmlvQf-NWlevKHbYzIVMKwlPS7y9_PyVJ09Mk80hgYnYx`,
      }
    .then(function (res) {
      console.log(res);
      return res.json();
    })
    // .then(function (coffeeshops) {
    //   this.setState({ coffeeshops }, () => console.log('Coffeeshops fetched...', coffeeshops));
    // })
  }
}
  render() {
    return (
      <div className="App">
        <h2>Coffeeshops</h2>
        {/* <ul>
          {this.state.coffeeshops.map(coffeeshop => <li key={coffeeshop.id}>{coffeeshop.name}</li>)}
        </ul> */}
      </div>
    );
  }
}

export default Coffeeshops;
