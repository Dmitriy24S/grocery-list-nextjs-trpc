// 2. Create context, pass prisma client instance
import { PrismaClient } from "@prisma/client";
import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";

export async function createContext(opts?: trpcNext.CreateNextContextOptions) {
  const prisma = new PrismaClient();

  return { prisma };
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
// Context created (createContext()) and the data types inferred from it (Context),
