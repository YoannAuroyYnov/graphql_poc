export default `#graphql
  type Post {
    id: Int!
    title: String!
    content: String
    published: Boolean!
    author: User!
    comments: [Comment]
    likes: [Like]
    createdAt: String
    updatedAt: String
  }

  extend type Query {
    post(id: Int!): Post
    posts: [Post]
  }
`;
