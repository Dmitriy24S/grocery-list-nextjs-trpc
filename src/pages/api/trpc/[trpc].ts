// 4. After router configured, create API route
// With router configured, need to create a API route from Next.js to which will add handler api.
// In handler api will pass router and  context (which is invoked on every request).
import * as trpcNext from "@trpc/server/adapters/next";

import { createContext } from "@/server/context";
import { serverRouter } from "@/server/router";

export default trpcNext.createNextApiHandler({
  router: serverRouter,
  createContext,
});
