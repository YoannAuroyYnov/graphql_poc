import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import http from "http";
import cors from "cors";
import { context } from "./src/graphql/context.js";
import { Query } from "./src/graphql/resolvers/query.graphql.js";
import userTypeDefs from "./src/graphql/schemas/user.graphql.js";
import postTypeDefs from "./src/graphql/schemas/post.graphql.js";
import likeTypeDefs from "./src/graphql/schemas/like.graphql.js";
import commentTypeDefs from "./src/graphql/schemas/comment.graphql.js";
import imageTypeDefs from "./src/graphql/schemas/image.graphql.js";

const typeDefs = [
  userTypeDefs,
  postTypeDefs,
  likeTypeDefs,
  commentTypeDefs,
  imageTypeDefs,
];

const resolvers = {
  Query,
};

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();

app.use(cors(), express.json(), expressMiddleware(server, { context }));

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000`);
