import React from 'react';
import clsx from 'clsx';

import { Box, PolymorphicComponentProps } from './Box';

type BaseTextProps = {
  type:
    | 'landingTitle'
    | 'landingText'
    | 'sectionTitle'
    | 'sectionTagline'
    | 'highlightedProjectBody'
    | 'body'
    | 'asideTitle'
    | 'asideBody';
  align?: 'left' | 'center' | 'right';
  dontRestrict?: boolean;
};

const elementMap: { [key in BaseTextProps['type']]: React.ElementType } = {
  landingTitle: 'h1',
  landingText: 'p',
  sectionTitle: 'h2',
  sectionTagline: 'p',
  highlightedProjectBody: 'p',
  body: 'p',
  asideTitle: 'h6',
  asideBody: 'p',
};

export type TextProps<E extends React.ElementType> = PolymorphicComponentProps<E, BaseTextProps>;

export function Text<E extends React.ElementType = 'span'>(props: TextProps<E>) {
  const { type, align, dontRestrict, className, ..._pass } = props;
  const pass = _pass as PolymorphicComponentProps<E, unknown>;

  const classes = clsx([
    className,
    {
      'text-left': align === 'left',
      'text-right': align === 'right',
      'text-center': align === 'center',
      'text-4xl sm:text-7xl font-bold text-black tracking-tight': type === 'landingTitle',
      'text-xl sm:text-3xl text-gray-500': type === 'landingText',
      'text-2xl sm:text-4xl font-bold text-black tracking-tight': type === 'sectionTitle',
      'text-base sm:text-xl tracking-wide text-gray-600': type === 'sectionTagline',
      'text-lg sm:text-2xl font-medium leading-7 sm:leading-9 text-gray-500':
        type === 'highlightedProjectBody',
      'text-base font-normal sm:text-xl leading-7 sm:leading-9 text-gray-500': type === 'body',
      'text-base sm:text-2xl tracking-tight leading-tight': type === 'asideTitle',
      'text-sm text-gray-500 tracking-wide': type === 'asideBody',
      'max-w-screen-md': !dontRestrict,
    },
  ]);

  return <Box className={classes} as={elementMap[type]} {...pass} />;
}
