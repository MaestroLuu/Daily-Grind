const express = require('express');
const app = express();
// const fetch = require('node-fetch');
// const yelp_API= "https://api.yelp.com/v3/businesses/search?latitude=32.8073216&longitude=-117.1554304&term=coffee";


app.get('/api/coffeeshops', (req, res) => {
    const coffeeshops = [
        {id:1, name: 'Starbucks', address: '123 Main St.', city: 'New York', state: 'NY', zip: '12345'},
        {id:2, name: 'Better Buzz', address: '456 Main St.', city: 'New York', state: 'NY', zip: '12345'},
        {id:3, name: 'Dutch Bros', address: '789 Main St.', city: 'New York', state: 'NY', zip: '12345'},
    ];
    return res.json(coffeeshops);
}); 

// function getCoffeeshops() {
//     fetch(yelp_API, {
//         method: 'GET',
//         headers: { 
//             Authorization: `Bearer `PROCESS.ENV.API_KEY`,
//         }
//     }).then(function (res) {
//         console.log(res);
//         return res.json();
//     })
// }

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
