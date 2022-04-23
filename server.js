const express = require('express');
const app = express();

app.get('/api/coffeeshops', (req, res) => {
    const coffeeshops = [
        {id:1, name: 'Starbucks', address: '123 Main St.', city: 'New York', state: 'NY', zip: '12345'},
        {id:2, name: 'Better Buzz', address: '456 Main St.', city: 'New York', state: 'NY', zip: '12345'},
        {id:3, name: 'Dutch Bros', address: '789 Main St.', city: 'New York', state: 'NY', zip: '12345'},
    ];

    res.json(coffeeshops);
}); 


const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
