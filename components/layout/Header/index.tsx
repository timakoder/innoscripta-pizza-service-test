import React, { useEffect, useRef, useState, useCallback } from 'react';
import Logo from '../../common/Logo';
import NextLink from '../../common/NextLink';
import Button from '../../common/Button';
import { useGlobalContext } from '../../utils/hooks';
import utilStyles from '../../../styles/utils.module.scss';
import styles from './header.module.scss';
import cn from 'classnames';
import { useModalActions } from '../../models/modal';

type HeaderWidgetProps = {
  small: boolean
}

const HeaderWidget: React.FC<HeaderWidgetProps> = ({ small }) => {
  const { openLogin } = useModalActions();

  return <div className={cn(utilStyles.fullPageContainer, styles.headerWidgetContainer)}>
    <div className={styles.logoContainer}>
      <NextLink href="/">
        <Logo color="white" small={small}/>
      </NextLink>
    </div>
    <div className={styles.buttonsContainer}>
      <Button color="main" size={small ? 'small' : 'medium'} onClick={openLogin}>
        Account
      </Button>
      <Button color="main" marginLeft={12} size={small ? 'small' : 'medium'}>
        Cart
      </Button>
    </div>
  </div>
}

const Header: React.FC = () => {
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const { isMobile } = useGlobalContext();

  const headerContainer = useRef<HTMLDivElement>(null);

  const scrollCallback = useCallback(() => {
    if (!headerContainer.current) {
      return;
    }

    const rect = headerContainer.current.getBoundingClientRect();
    const isMainHeaderVisible = (rect.top + rect.height) > -15;
  
    if (!showStickyHeader && !isMainHeaderVisible) {
      return setShowStickyHeader(true);
    }

    if (showStickyHeader && isMainHeaderVisible) {
      return setShowStickyHeader(false);
    }
  }, [showStickyHeader, headerContainer]);

  useEffect(() => {
    scrollCallback();

    window.addEventListener('scroll', scrollCallback);

    return () => window.removeEventListener('scroll', scrollCallback);
  }, [showStickyHeader]);

  return <header className={styles.root}>
    <div ref={headerContainer} className={styles.headerContainer}>
      <HeaderWidget small={isMobile}/>
    </div>
    <div
      style={{
        opacity: showStickyHeader ? 1 : 0,
        top: showStickyHeader ? 0 : -50
      }}
      className={styles.stickyHeaderContainer}
    >
      <HeaderWidget small={true}/>
    </div>
  </header>
}

export default Header;
