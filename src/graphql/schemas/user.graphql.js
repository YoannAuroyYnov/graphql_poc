export default `#graphql
  type User {
    id: Int!
    email: String!
    name: String
    posts: [Post]
    comments: [Comment]
    likes: [Like]
    images: [Image]
    createdAt: String
    updatedAt: String
  }

  type Query {
    me: User
    user(id: Int!): User
    users: [User]
  }
`;
