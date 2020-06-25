import React from 'react';
import '../styles/global.css';
import { AppProps } from 'next/app';

const App: React.FC<AppProps> = ({ Component, pageProps }) =>
  <Component {...pageProps}/>;

export default App;