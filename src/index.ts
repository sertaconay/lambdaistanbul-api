import { ApolloServer, gql } from 'apollo-server';

const users = [
  {
    username: 'sertaconay',
    email: 'sertac@onay.me',
  },
  {
    username: 'ozkozturk',
    email: 'ozkozkturk00@gmail.com',
  },
];

const typeDefs = gql`
  type User {
    username: String
    email: String
  }

  type Query {
    users: [User]
  }
`;

const resolvers = {
  Query: {
    users: () => users,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4100 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
