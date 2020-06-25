import React from 'react';
import Link from 'next/link';
import { NextLinkProps } from './types';

const NextLink: React.FC<NextLinkProps> = ({
  children,
  href,
  as,
  key,
  ...props
}) =>
  <Link href={href} as={as} key={key}>
    <a {...props}>
      {children}
    </a>
  </Link>

  export default NextLink;
