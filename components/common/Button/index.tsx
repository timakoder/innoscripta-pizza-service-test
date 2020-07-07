import React from 'react';
import cn from 'classnames';
import { Default, Box, Color, Size } from '../types';
import styles from './button.module.scss';

export type ButtonProps = Default & Box & Color & Size & {
  withoutBorder?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  color = 'main',
  size = 'medium',
  withoutBorder = false,
  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
  marginBottom = 0,
  ...props
}) => <button
  className={cn(styles.root, styles[color], styles[size], withoutBorder && styles.withoutBorder)}
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