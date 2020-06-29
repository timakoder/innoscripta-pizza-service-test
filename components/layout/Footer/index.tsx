import React from 'react';
import styles from './footer.module.scss';
import utilStyles from '../../../styles/utils.module.scss';
import NextLink from '../../common/NextLink';
import Logo from '../../common/Logo';

const Footer: React.FC = () => <footer className={styles.root}>
  <div className={utilStyles.fullPageContainer}>
    <NextLink href="/">
      <Logo/>
    </NextLink>
    <span className={styles.copyright}>© {new Date().getFullYear()}</span>
  </div>
</footer>

export default Footer;
