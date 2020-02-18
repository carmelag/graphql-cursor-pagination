### Readme V1.0

## How to run the application

# Install the packages 
`npm install`

# Run the application
`nodemon start`

The application runs on localhost:4000/graphql

# Example of GraphQL query

query {
  artists {
    firstName
    lastName
    artMovement
    artworks {
      title
      year
    }
  }
}