// 6. Create the tRPC hook, to which add the data type of router as a generic on the createReactQueryHooks() function, so that can make api calls:
import { ServerRouter } from "@/server/router";
import { createReactQueryHooks } from "@trpc/react";

export const trpc = createReactQueryHooks<ServerRouter>();
// 7. Now frontend ->
