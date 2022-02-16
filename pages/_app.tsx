import React from "react";
import { AppProps } from "next/app";

import GlobalStyle from "../styles/global";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import "antd/dist/antd.css";

const client = new ApolloClient({
  uri: 'https://api-funmidia.herokuapp.com/graphql',
  // uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {

  return (
    <>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ApolloProvider>
    </>
  );
};

export default MyApp;
