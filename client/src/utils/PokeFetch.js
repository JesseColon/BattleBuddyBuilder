const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/pokemonDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PokemonSchema = new mongoose.Schema({
  name: String,
  type: String,
});

const PokemonModel = mongoose.model('Pokemon', PokemonSchema);

const typeDefs = gql`
  type Pokemon {
    id: ID
    name: String
    type: String
  }

  type Query {
    searchPokemon(query: String): [Pokemon]
  }
`;

const resolvers = {
  Query: {
    searchPokemon: async (_, { query }) => {
      const searchQuery = new RegExp(query, 'i');
      const results = await PokemonModel.find({ name: searchQuery });
      return results;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
