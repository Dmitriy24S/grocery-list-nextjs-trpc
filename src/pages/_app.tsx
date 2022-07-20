// 5. Configure app.tsx
import { ServerRouter } from "@/server/router";
import { withTRPC } from "@trpc/next";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// export default MyApp
export default withTRPC<ServerRouter>({
  config({ ctx }) {
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : "http://localhost:3000/api/trpc";
    return { url };
  },
  ssr: true,
  // ssr: false,
})(MyApp);
