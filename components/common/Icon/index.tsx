import React from 'react';
import { Default, Size } from '../types';
import cn from 'classnames';
import styles from './icon.module.scss';

const buildPathToIcon = (icon: string): string => `/img/icons/${icon.trim().replace(/ /g, '_')}.svg`;

type GenericIconProps = Default & Size & {
  name: string
};

const GenericIcon: React.FC<GenericIconProps> = ({
  name,
  className,
  size = 'small',
  ...props
}) => <img
  className={cn(styles.root, styles[size], className)}
  src={buildPathToIcon(name)}
  {...props}
/>

export default GenericIcon;
