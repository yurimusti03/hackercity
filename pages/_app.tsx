import "../styles/globals.css";
import "../styles/fonts.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import Head from "next/head";
import type { AppProps } from "next/app";
import Script from "next/script";

import { ChakraProvider } from "@chakra-ui/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-hackercity.herokuapp.com/graphql",
  // uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hackercity</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="UTF-8" />
        <meta
          name="facebook-domain-verification"
          content="dztk9nn45665natw4akwish5ws52j4"
        />
        <meta
          name="description"
          content="Welcome to the hackerverse!
Are you ready to become a white hat hacker?
Hacker City is a play-to-earn game where players can have fun, earn an income and still learn and venture into the world of programming and cybersecurity."
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WJWBCXJH0D"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'G-WJWBCXJH0D');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TSKJSPQ');`,
          }}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '961607131431285');
  fbq('track', 'PageView');`,
          }}
        />
      </Head>

      <ApolloProvider client={client}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
