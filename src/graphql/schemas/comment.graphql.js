export default `#graphql
  type Comment {
    id: Int!
    content: String
    author: User!
    post: Post!
    createdAt: String
    updatedAt: String
  }
`;
