const graphql = require('graphql');
var db = require('./db');

var config = require('../knexfile.js');
var env = 'development';
var knex = require('knex')(config[env]);

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema,
    GraphQLBoolean
} = graphql;

const ArtworkType = new GraphQLObjectType({
    name: 'Artwork',
    fields: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        year: { type: GraphQLInt },
        artist: { type: GraphQLString }
    }
})

const PageInfo = new GraphQLObjectType({
    name: 'PageInfo',
    fields: {
        hasNextPage: { type: GraphQLBoolean }
    }
});

const ArtworkEdge = new GraphQLObjectType({
    name: 'ArtworkEdge',
    fields: {
        node: { type: ArtworkType },
        cursor: { type: GraphQLString },
    }
});

const ArtworkConnection = new GraphQLObjectType({
    name: 'ArtworkConnection',
    fields: {
        edges: { type: new GraphQLList(ArtworkEdge) },
        pageInfo: { type: PageInfo }
    }
});

const RootQuery = new GraphQLObjectType({
    description: 'Root Query',
    name: 'Query',
    fields: {
        artwork: {
            type: ArtworkType,
            args: {
                id: { type: GraphQLID }
            },
            description: 'Artwork with a specific ID',
            resolve(parentValue, args) {
                return db.getArtwork(args.id);
            }
        },

        artworks: {
            type: ArtworkConnection,
            description: "Connection of Artworks",
            args: {
                first: { type: GraphQLInt },
                after: { type: GraphQLString }
            },
            resolve(parentValue, args) {

                var artworksCollection;
                //artworksCollection = knex('artwork');
                var cursor = db.decode(args.after);
                artworksCollection = db.allArtworksCursor(args.first, cursor);
                const newArtworkMapping = artworksCollection.map(item => {
                    var normalObj = Object.assign({}, item);
                    return {
                        cursor: db.encode(String(normalObj.id)),
                        node: {
                            id: normalObj.id,
                            year: normalObj.year,
                            title: normalObj.title
                        }
                    }
                });

                var newConnection = {
                    pageInfo: {
                        hasNextPage: true
                    },
                    edges: newArtworkMapping
                }
                return newConnection;
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})