import { styled } from '@src/stitches.config';

export const Text = styled('span', {
  margin: 0,
  variants: {
    type: {
      landingTitle: {
        color: '$title',
        lineHeight: '$display',
        letterSpacing: '$display',
        fontWeight: '$landingTitle',

        // Stitches doesn't have support for using tokens in CSS functions yet,
        // but we can still access token values since they just map to CSS properties.
        fontSize: 'calc(var(--fontSizes-landingTitle) * 0.6)',
        sm: {
          fontSize: '$landingTitle',
        },
      },
      landingText: {
        color: '$body',
        fontWeight: '$landingText',
        fontSize: 'calc(var(--fontSizes-landingText) * 0.6)',
        sm: {
          fontSize: '$landingText',
        },
      },
      sectionTitle: {
        color: '$title',
        fontSize: '$sectionTitle',
        fontWeight: '$sectionTitle',
        lineHeight: '$display',
        letterSpacing: '$display',
      },
      sectionTagline: {
        color: '$subtitle',
        letterSpacing: '$text',
        fontWeight: '$sectionTagline',
        fontSize: 'calc(var(--fontSizes-sectionTagline) * 0.8)',
        sm: {
          fontSize: '$sectionTagline',
        },
      },
      body: {
        color: '$body',
        fontSize: '$body',
        letterSpacing: '$text',
        lineHeight: '$text',
      },
      highlightedProjectBody: {
        color: '$body',
        lineHeight: '$text',
        fontWeight: '$highlightedProjectBody',
        fontSize: 'calc(var(--fontSizes-highlightedProjectBody) * 0.8)',
        sm: {
          fontSize: '$highlightedProjectBody',
        },
      },
      asideTitle: {
        color: '$title',
        fontSize: '$asideTitle',
        fontWeight: '$asideTitle',
        letterSpacing: '$display',
        lineHeight: '$display',
      },
      asideBody: {
        color: '$body',
        fontWeight: '$asideText',
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
