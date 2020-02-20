var config = require('../knexfile.js');
var env = 'development';
var knex = require('knex')(config[env]);

module.exports = knex;

//knex.migrate.latest([config]);

const artworks = [
    { artistId: 1, title: 'Cafe Terrace on the Place du Forum', year: 1934 },
    { artistId: 1, title: 'Starry Night', year: 1934 },
    { artistId: 1, title: 'Vase With Twelve Sunflowers', year: 1934 },
    { artistId: 2, title: 'Frida and Diego Rivera', year: 1931 },
    { artistId: 2, title: 'The broken column', year: 1944 },
    { artistId: 3, title: 'Cat catching a bird', year: 1939 },
    { artistId: 3, title: 'Guernica', year: 1937 },
    { artistId: 3, title: 'The girls of Avignon', year: 1907 },
    { artistId: 5, title: 'Goldfish', year: 1902 },
    { artistId: 5, title: 'Danae', year: 1908 },
    { artistId: 5, title: 'The kiss', year: 1908 },
    { artistId: 5, title: 'The three ages of woman', year: 1905 },
    { artistId: 6, title: 'Bride with a Fan', year: 1911 },
    { artistId: 6, title: 'Woman with a bouquet', year: 1910 },
    { artistId: 6, title: 'Over the town', year: 1918 },
];

/* //Artists insert
knex('artist').insert(artists).then(() => console.log("Artists data inserted"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        //knex.destroy();
    });

//Artworks insert
knex('artwork').insert(artworks).then(() => console.log("Artworks data inserted"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        //knex.destroy();
    }); */

module.exports = {
    encode: function (plainId) {
        var encodedId = Buffer.from("cursor_" + plainId).toString('base64');
        return encodedId;
    },
    decode: function (encodedId) {
        var decodedID = Buffer.from(encodedId, 'base64').toString('utf-8').split("_")[1];
        console.log(decodedID);
        return decodedID;
    },
    getArtwork: function (artworkId) {
        return knex('artwork').where('id', artworkId)
            .then(function (row) {
                var normalObj = Object.assign({}, row[0]);
                console.log(normalObj);
                return normalObj;
            }
            )
            .catch((err) => { console.log(err); throw err })
            .finally(() => {
                //knex.destroy();
            });
    },
    allArtworks: function () {
        return knex('artwork');
    },
    allArtworksCursor: function (limitValue, cursor) {
        var cursorVal = cursor;
        return knex('artwork').where('id', '>', cursorVal).limit(limitValue);
    }
}

