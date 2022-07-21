// 3. After context, define router:
import * as trpc from "@trpc/server";
import { z } from "zod";

import { Context } from "./context";

export const serverRouter = trpc
  // Endpoint is called a procedure
  // Backend has a total of four procedures
  // A procedure can have two types of operations (query and mutation);
  // Queries are responsible for fetching data, while mutations are responsible for making changes to the data (server-side)
  .router<Context>()
  .query("findAll", {
    resolve: async ({ ctx }) => {
      return await ctx.prisma.groceryList.findMany();
    },
  })
  .mutation("insertOne", {
    input: z.object({
      title: z.string(),
    }),
    resolve: async ({ input, ctx }) => {
      return await ctx.prisma.groceryList.create({
        data: { title: input.title },
      });
    },
  })
  .mutation("deleteAll", {
    input: z.object({
      ids: z.number().array(),
    }),
    resolve: async ({ input, ctx }) => {
      const { ids } = input;
      return await ctx.prisma.groceryList.deleteMany({
        where: {
          id: { in: ids },
        },
      });
    },
  });

export type ServerRouter = typeof serverRouter;
// Exported router (serverRouter) and its data type (ServerRouter)
