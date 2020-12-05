import React from 'react';

export type ProjectInfoProps = React.ComponentPropsWithoutRef<'div'>;

export function ProjectInfo({ className, ...props }: ProjectInfoProps) {
  return <div className={`space-y-6 lg:space-y-14 ${className}`} {...props} />;
}

export function ProjectInfoLogo({ className, ...props }: React.ComponentPropsWithoutRef<'img'>) {
  return <img className={`h-9 lg:h-16 ${className}`} {...props} />;
}

export function ProjectInfoParagraphs({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return <div className={`space-y-5 ${className}`} {...props} />;
}
