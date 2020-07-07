import React from 'react';
import cn from 'classnames';
import { Default, Box, Color } from '../types';
import styles from './input.module.scss';

export type InputProps = Default & Box & Color & {
  placeholder?: string,
  onChange?: (str: string) => void,
  onBlur?: (str: string) => void
}

const Input: React.FC<InputProps> = ({
  className,
  placeholder = '',
  onChange = () => {},
  onBlur = () => {},
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  marginTop = 0,
  color = 'main'
}) => <div className={cn(styles.root, styles[color], className)}>
  <input
    placeholder={placeholder}
    onChange={e => onChange(e.target.value)}
    onBlur={e => onBlur(e.target.value)}
    style={{
      marginLeft,
      marginTop,
      marginBottom,
      marginRight
    }}
  />
</div>

export default Input;