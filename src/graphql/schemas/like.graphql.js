export default `#graphql
  type Like {
    id: Int!
    post: Post!
    author: User!
    createdAt: String
    updatedAt: String
  }
`;
