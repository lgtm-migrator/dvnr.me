import React from 'react';
import NProgress from 'nprogress';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import { ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/core';
import { MDXProvider } from '@mdx-js/react';

import components from '../components/mdx';
import Layout from '../components/layout';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
Router.events.on('routeChangeStart', _ => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider>
        <ColorModeProvider>
          <Head>
            <title>devnur &mdash; inspirations by Nurseiit A.</title>
            {/* Import CSS for nprogress */}
            <link rel="stylesheet" type="text/css" href="/nprogress.css" />
          </Head>
          <CSSReset />
          <Layout>
            <MDXProvider components={components}>
              <Component {...pageProps} />
            </MDXProvider>
          </Layout>
        </ColorModeProvider>
      </ThemeProvider>
    );
  }
}

export default MyApp;
