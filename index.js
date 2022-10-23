const express = require('express');
const cors = require('cors');

const app =  express();
const port = process.env.PORT || 5000;

app.use(cors());

// first data load and show server port 5000
const hotels = require('./data/hotels.json');

app.get('/', (req, res)=>{
    res.send('Travel guru server is running')
});

// first data load and show server port 5000
app.get('/hotels', (req, res)=>{
    res.send(hotels);
})

// find for every signle hotel
app.get('/hotels/:id', (req, res)=>{
    const id =req.params.id;
    const hotel =hotels.find(ht=> ht.id == id);
    // console.log(hotel);
    res.send(hotel);
})

app.listen(port, ()=>{
    console.log(`Travel guru running on port, ${port}`);
})


