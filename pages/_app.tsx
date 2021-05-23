import React from 'react';
import { ApolloProvider } from '@apollo/client/react';
import withData from '../lib/withData';
import ApolloClient from '../apollo-client'

import '../assets/styles/globals.scss';

import type { AppContext, AppProps } from 'next/app';
MyApp.getInitialProps = async function ({ Component, ctx }: AppContext) {
 
  let pageProps: any = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

interface IProps {
  Component: AppProps["Component"];
  pageProps: AppProps["pageProps"];
  apollo: any
}
function  MyApp ({ Component, pageProps }: IProps) {
  return (
    <ApolloProvider client={ApolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
