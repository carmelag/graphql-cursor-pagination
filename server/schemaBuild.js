const graphql = require('graphql');
var db = require('./db');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema,
    GraphQLBoolean
} = graphql;

//GraphQL types definition
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
        hasNextPage: { type: GraphQLBoolean },
        lastCursor: { type: GraphQLString }
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

//GraphQL queries definition
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
                //This variable should store how many nodes there are in the edge
                var moreResults;
                var cursor = db.decode(args.after);
                artworksCollection = db.allArtworksCursor(args.first, cursor);

                /* This way to decide if more results are available doesn't work"

                var nodesLeft = db.allArtworksCursorCount(cursor);
            
                if (nodesLeft > args.first) {
                    moreResults = true;
                } else {
                    moreResults = false;
                }
                */

                //The right value for hasNextPage should be stored within moreResult and returned by a count function on the db*/
                var newConnection = {
                    pageInfo: {
                        //hasNextPage: moreResults,
                        hasNextPage: true,
                        lastCursor: args.after
                    },
                    edges: artworksCollection
                }
                return newConnection;
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})