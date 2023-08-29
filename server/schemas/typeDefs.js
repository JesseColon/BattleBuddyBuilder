const typeDefs = `

  type Team {
    _id: ID
    name: String
    pokemons: [Pokemon]
  }

  type Pokemon {
    _id: ID
    pokeID: Int!
    itemID: Int
    moves: [Move]
  }

  type Move {
    _id: ID
    moveID: Int!
  }

  type User {
    _id: ID
    username: String
    email: String
    teams: [Team]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
