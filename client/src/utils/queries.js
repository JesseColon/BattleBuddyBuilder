import { gql } from '@apollo/client';

export const QUERY_TEAMS = gql`
  query team($: ID) {
    pokemons(team: $Team) {
      _id
      pokeID
      itemID
      moves {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      teams {
        _id
        name
        pokemons {
          _id
        }
      }
    }
  }
`;
