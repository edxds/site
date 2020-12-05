import React from 'react';

export function Section({ className, ...props }: React.ComponentPropsWithoutRef<'section'>) {
  return <section className={`w-screen max-w-full min-h-screen ${className}`} {...props} />;
}
