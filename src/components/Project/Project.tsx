import React from 'react';
import clsx from 'clsx';

import styles from './Project.module.css';

export type ProjectProps = { flipped?: boolean } & React.ComponentPropsWithoutRef<'div'>;

export function Project({ flipped, className, ...props }: ProjectProps) {
  const classes = clsx([className, styles.grid, { [styles.flipped]: flipped }]);

  return <div className={classes} {...props} />;
}
