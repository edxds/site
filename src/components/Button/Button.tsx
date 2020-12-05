import React from 'react';
import clsx from 'clsx';

import { Box, PolymorphicComponentProps } from '../Box';

import styles from './Button.module.css';

export interface BaseButtonProps {
  variant: 'contained' | 'text' | 'textPrimary';
  inline?: boolean;
}

export type ButtonProps<E extends React.ElementType> = PolymorphicComponentProps<
  E,
  BaseButtonProps
>;

export function Button<E extends React.ElementType>(props: ButtonProps<E>) {
  const { className, variant, inline, ..._pass } = props;
  const pass = _pass as PolymorphicComponentProps<E, unknown>;

  const contained = variant === 'contained';
  const text = variant === 'text' || variant === 'textPrimary';
  const textPrimary = variant === 'textPrimary';

  const classes = clsx([
    className,
    styles.button,
    {
      [styles['button-contained']]: contained,
      [styles['button-text']]: text,
      [styles['button-text-primary']]: textPrimary,
      [styles['button-inline']]: inline,
    },
  ]);

  return <Box as="button" {...pass} className={classes} />;
}
