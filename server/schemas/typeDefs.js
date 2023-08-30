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
    firstName: String
    lastName: String
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

  type Query {
    user: User
    team(user:ID): [Team]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addTeam(name: String!, pokemons: [ID]): Team
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateTeam(teamID: Int!, pokemons: [ID]): Team
  }
`;

module.exports = typeDefs;
