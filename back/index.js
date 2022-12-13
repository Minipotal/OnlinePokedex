var cors = require('cors')

const express = require("express");
const dbo = require("./db/db");
const app = express();
const port = 4444;

dbo.connectToServer();
app.use(cors())

const bodyParser = require('body-parser');
const { response } = require('express');
app.use(bodyParser.urlencoded({ extended: true }));
const jsonParser = bodyParser.json();

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});

app.get("/pokemon/list", function (req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("pokemon")
    .find({})
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching pokemons!");
      } else {
        res.json(result);
      }
    });

});

app.post('/pokemon/insert', jsonParser, (req, res) => {
  const body = req.body;
  console.log('Got body:', body);
  const dbConnect = dbo.getDb();
  const pokemon = dbConnect.collection('Pokemon')
  pokemon.insertOne(body)
    .then(function (err, result){
      if (err) {
        res.status(400).send(err);
      } else {
        res.json(result);
      }});
});

app.delete('/pokemon/delete', jsonParser, (req, res) => {
  const body = req.body;
  console.log('Got body:', body.name);
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("pokemon")
    .deleteOne({ name: body.name });

  res.json(body);
});

app.post('/pokemon/update', jsonParser, (req, res) => {
  const body = req.body;
  console.log('Got body:', body.name);
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("pokemon")
    .updateOne({numero:body.prevnumero, name:body.prevname, type:body.prevtype},{$set:{numero:body.newnumero, name:body.newname, type:body.newtype}});
  res.json(body);
});











app.get("/pokedex/list", function (req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("pokedex")
    .find({})
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching pokemons!");
      } else {
        res.json(result);
      }
    });

});

app.post('/pokedex/insert', jsonParser, (req, res) => {
  const body = req.body;
  console.log('Got body:', body.name);
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("pokemon")
    .insertOne({...body})
    .then(function (result, err) {
      if (err) {
        res.status(400).send("Error fetching pokemons!");
      } else {
        res.json(result);
      }
    }).catch(err=>res.json(err)); 
  });


app.delete('/pokedex/delete', jsonParser, (req, res) => {
  const body = req.body;
  console.log('Got body:', body.name);
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("pokedex")
    .deleteOne({ name: body.name });

  res.json(body);
});

app.post('/pokedex/update', jsonParser, (req, res) => {
  const body = req.body;
  console.log('Got body:', body.name);
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("pokedex")
    .updateOne({name:body.prevname, type:body.prevtype},{$set:{name:body.newname, type:body.newtype}});
  res.json(body);
});