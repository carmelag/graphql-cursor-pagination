var express = require('express');
var app = express();
var db = require('./db');
var schemaBuild = require('./schemaBuild');

const expressGraphQL = require('express-graphql')

var port = 4000;

app.use('/graphql', expressGraphQL({
    schema: schemaBuild,
    graphiql: true
}))

app.listen(port);
console.log("Listening on port", port);  