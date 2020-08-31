import React, { useState, useCallback } from 'react';
import styles from './logo.module.scss';
import Icon from '../Icon';
import { Color } from '../types';
import cn from 'classnames';

export type LogoProps = Color & {
  small?: boolean
}

const Logo: React.FC<LogoProps> = ({ color = 'main', small = false }) => {
  const [degree, setDegree] = useState(0);

  const rotateImage = useCallback(() => {
    setDegree(degree + 360);
  }, [degree]);

  return <div onMouseEnter={rotateImage} className={cn({
    [styles.root]: true
  })}>
    <Icon
      name="pizza_slice"
      className={styles.icon}
      size={small ? 'medium' : 'large'}
      style={{
        transform: `rotate(${degree}deg)`
      }}
    />
    <div className={cn({
      [styles.textContainer]: true,
      [styles.textContainerSmall]: small
    })}>
      <h1 className={styles[color]}>Pizza</h1>
      <h1 className={styles[color]}>Service</h1>
    </div>
  </div>
}

export default Logo;
