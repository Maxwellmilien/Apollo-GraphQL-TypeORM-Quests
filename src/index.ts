/** Import des librairies */
import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import CartoonResolvers from "./resolvers/cartoon.resolver";
import { dataSource } from "./services/client.service";
import { buildSchema } from "type-graphql";

// const cartoonResolvers = new CartoonResolvers();

(async () => {
  await dataSource.initialize();

  const schema = await buildSchema({
    resolvers: [CartoonResolvers],
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
})();
