import React from 'react';
import cn from 'classnames';
import styles from './button.module.scss';

export type ButtonProps = {
  className?: string,
  color?: 'main' | 'white' | 'dark' | 'transparent',
  size?: 'small' | 'medium' | 'large',
  marginTop?: number,
  marginRight?: number,
  marginBottom?: number,
  marginLeft?: number,
  [k: string]: any
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  color = 'main',
  size = 'medium',
  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
  marginBottom = 0,
  ...props
}) => <button
  className={cn(styles.root, styles[color], styles[size])}
  style={{
    marginTop,
    marginLeft,
    marginRight,
    marginBottom
  }}
  {...props}
>
  {children}
</button>

export default Button;