var config = require('../knexfile.js');
var env = 'development';
var knex = require('knex')(config[env]);

module.exports = knex;

knex.migrate.latest([config]);

const artists = [
    { firstName: 'Vincent', lastName: 'Van Gogh', artMovement: 'Post-impressionism' },
    { firstName: 'Frida', lastName: 'Kahlo', artMovement: 'Surrealism' },
    { firstName: 'Pablo', lastName: 'Picasso', artMovement: 'Cubism' },
    { firstName: 'Edgar', lastName: 'Degas', artMovement: 'Realism' },
    { firstName: 'Gustav', lastName: 'Klimt', artMovement: 'Surrealism' },
    { firstName: 'Marc', lastName: 'Chagall', artMovement: 'Surrealism' },
    { firstName: 'Marc', lastName: 'Chagall', artMovement: 'Surrealism' },
    { firstName: 'George', lastName: 'Saurat', artMovement: 'Pointillism' },
    { firstName: 'Jacques Louis', lastName: 'David', artMovement: 'Neoclassicism' }

];

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
        var encodedId = Buffer.from(plainId).toString('base64');
        return encodedId;
    },
    decode: function (encodedId) {
        var decodedID = Buffer.from(encodedId, 'base64').toString('utf-8');
        return decodedID;
    },
    allArtists: function () {
        return knex('artist');
    },
    allArtworks: function () {
        return knex('artwork');
    },
    allArtworksCursor: function (cursor) {
        return knex('artwork').where('id', '>', cursor);
    }
}

