import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }
  type User {
    id: ID
  name: String
  age: Int
}

  type Query {
    books: [Book]
    users: [User],
    user(name: String!): User
  }
`;

const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

const resolvers = {
    Query: {
      books: () => books,
      user: (parent, args, contextValue, info) => userData.filter(user => user.name === args.name)[0],
      users: () => userData
    },
  };

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4001 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);

  export const userData = [
    {
        id: "1",
        name: "NghiaCH",
        age: 21,
    },
    {
        id: "2",
        name: "HuyNQ",
        age: 33,
    },
    {
        id: "3",
        name: "LoiLD",
        age: 24,
    },
    {
        id: "4",
        name: "TrungTH",
        age: 23
    }
]