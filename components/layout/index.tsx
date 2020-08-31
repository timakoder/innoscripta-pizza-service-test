import React from 'react';
import styles from './layout.module.scss';
import Head from 'next/head';
import { LayoutProps } from './types';
import Header from './Header';
import Footer from './Footer';
import Modal from '../modal';

const Layout: React.FC<LayoutProps> = ({
  children,
  pageTitle = 'Innoscripta Pizza'
}) => <div className={styles.container}>
  <Modal/>
  <Head>
    <title>{pageTitle}</title>
    <link rel="icon" href="/favicon.ico" />
    <meta
      name="description"
      content="Innoscripta test project for pizza ordering"
    />
    <meta  
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <meta
      property="og:image"
      content={`https://og-image.now.sh/${encodeURI(
        pageTitle
      )}.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg`}
    />
    <meta name="og:title" content={pageTitle} />
    <meta name="twitter:card" content="summary_large_image" />
  </Head>
  <Header/>
  <main className={styles.main}>
    {children}
  </main>
  <Footer/>
</div>

export default Layout;