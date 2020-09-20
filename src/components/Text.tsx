import { styled } from '@src/stitches.config';

export const Text = styled('span', {
  margin: 0,
  variants: {
    type: {
      landingTitle: {
        color: '$title',
        lineHeight: '$display',
        letterSpacing: '$display',

        // Stitches doesn't have support for using tokens in CSS functions yet,
        // but we can still access token values since they just map to CSS properties.
        fontSize: 'calc(var(--fontSizes-landingTitle) * 0.8)',
        md: {
          fontSize: '$landingTitle',
        },
      },
      landingText: {
        color: '$body',
        fontSize: 'calc(var(--fontSizes-landingText) * 0.8)',
        md: {
          fontSize: '$landingText',
        },
      },
      sectionTitle: {
        color: '$title',
        fontSize: '$sectionTitle',
        lineHeight: '$display',
        letterSpacing: '$display',
      },
      sectionTagline: {
        color: '$subtitle',
        fontSize: '$sectionTagline',
        letterSpacing: '$text',
      },
      body: {
        color: '$body',
        fontSize: '$body',
        letterSpacing: '$text',
        lineHeight: '$text',
      },
      highlightedProjectBody: {
        color: '$body',
        fontSize: '$highlightedProjectBody',
      },
      asideTitle: {
        color: '$title',
        fontSize: '$asideTitle',
        letterSpacing: '$display',
        lineHeight: '$display',
      },
      asideBody: {
        color: '$body',
        fontSize: '$asideText',
        letterSpacing: '$text',
      },
    },
    align: {
      left: { textAlign: 'left' },
      right: { textAlign: 'right' },
      center: { textAlign: 'center' },
    },
  },
});
