const { User, Team, Pokemon, Move } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'teams',
          populate: 'team'
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('no user found');
    },
    team: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'team.pokemon',
          populate: 'pokemon'
        });

        return user.teams.id(_id);
      }

      throw AuthenticationError;
    },
  },
  Mutation: {
    addUser: async (parent, args ) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    addTeam: async (parent, { _id, teamName, pokemons }, context) => {
      if (context.user) {
        const team = new Team({ teamName, pokemons });

        await User.findByIdAndUpdate(context.user._id, { $push: { teams: team } });

        return team;
      }

      throw new AuthenticationError('unable to add team');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('unable to update user');
    },
    updateTeam: async (parent, { teamID, pokemons }) => {
      if (context.user) {
        const team = new Team({ pokemons });

        return await User.findByIdAndUpdate(context.user.teamID, { new: { teams: team } });
      }

      return await Pokemon.findByIdAndUpdate(_id, { new: true });
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('unable to find user');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('password is incorrect');
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
