var config = require('../knexfile.js');
var env = 'development';
var knex = require('knex')(config[env]);

module.exports = knex;


module.exports = {
    encode: function (plainId) {
        var encodedId = Buffer.from("cursor_" + plainId).toString('base64');
        return encodedId;
    },
    decode: function (encodedId) {
        var decodedID = Buffer.from(encodedId, 'base64').toString('utf-8').split("_")[1];
        return decodedID;
    },
    getArtwork: function (artworkId) {
        return knex('artwork').where('id', artworkId)
            .then(function (row) {
                var normalObj = Object.assign({}, row[0]);
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
        return knex('artwork').where('id', '>', cursorVal).limit(limitValue)
            .then(function (rows) {
                const newArtworkMapping = rows.map(item => {
                    var normalObj = Object.assign({}, item);
                    return {
                        cursor: Buffer.from("cursor_" + normalObj.id).toString('base64'),
                        node: {
                            id: normalObj.id,
                            year: normalObj.year,
                            title: normalObj.title,
                            artist: normalObj.artist
                        }
                    }
                });
                return newArtworkMapping;
            });
    },
    allArtworksCursorCount: function (cursor) {
        var cursorVal = cursor;
        return knex('artwork').count('id as nodesLeft').where('id', '>', cursorVal)
            .then(function (res) {
                var normalObj = Object.assign({}, res[0]);
                return normalObj.nodesLeft;
            });
    }
}

