import React from 'react';
import clsx from 'clsx';

import styles from './ProjectArt.module.css';

export type ProjectArtImageProps = {
  flipped?: boolean;
} & React.ComponentPropsWithoutRef<'img'>;

export function ProjectArtImage({ flipped, className, ...props }: ProjectArtImageProps) {
  const classes = clsx([className, styles['art-img'], { [styles['flipped']]: flipped }]);
  return <img className={classes} {...props} />;
}

export function ProjectArtRatioContainer(props: React.ComponentPropsWithoutRef<'div'>) {
  const { className, ...pass } = props;
  return <div {...pass} className={`${styles['art-ratio-container']} ${className}`} />;
}

export function ProjectArtPicture(props: React.ComponentPropsWithoutRef<'picture'>) {
  const { className, ...pass } = props;
  return (
    <picture
      {...pass}
      className={`absolute inset-0 flex items-center justify-center ${className}`}
    />
  );
}
