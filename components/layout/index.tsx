import React from 'react';
import styles from './layout.module.css';
import Head from 'next/head';
import cn from 'classnames';
import { LayoutProps } from './types';

const Layout: React.FC<LayoutProps> = ({
  children,
  pageTitle = 'Innoscripta Pizza'
}) => <div className={styles.container}>
  <Head>
    <title>{pageTitle}</title>
    <link rel="icon" href="/favicon.ico" />
    <meta
      name="description"
      content="Innoscripta test project for pizza ordering"
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
  <header className={styles.header}>
    HEADER
  </header>
  <main className={styles.main}>
    {children}
  </main>
  <footer className={styles.footer}>
    FOOTER
  </footer>
</div>

export default Layout;