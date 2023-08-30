const { ApolloServer, gql } = require('apollo-server');
const getPokemonById = require('./pokemonData');

const typeDefs = gql`
  type Pokemon {
    id: ID
    name: String
    
  }

  type Query {
    getPokemon(pokemonId: Int!): Pokemon
  }
`;

const resolvers = {
  Query: {
    getPokemon: async (_, { pokemonId }) => {
      const pokemonData = await getPokemonById(pokemonId);
      return pokemonData;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
