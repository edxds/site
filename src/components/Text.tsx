import { styled } from '@src/stitches.config';

export const Text = styled('span', {
  margin: 0,
  variants: {
    type: {
      landingTitle: {
        color: '$title',
        fontSize: '$landingTitle',
        lineHeight: '$display',
        letterSpacing: '$display',
      },
      landingText: {
        color: '$body',
        fontSize: '$landingText',
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
