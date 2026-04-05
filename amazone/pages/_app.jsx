import { SessionProvider } from "next-auth/react";
import Header from "../app/component/header";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={pageProps.session}>   
      <Header />                        
      <Component {...pageProps} />
    </SessionProvider>
  );
}
