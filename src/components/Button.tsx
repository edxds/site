import { styled } from '@src/stitches.config';

export const Button = styled('button', {
  border: 0,
  position: 'relative',

  // Focus ring container for inset box-shadow, since borders add to an element's
  // box size and there's already a box-shadow that we do not want to override.
  '::after': {
    content: '""',

    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,

    borderRadius: 'inherit',
    transition: 'box-shadow 250ms',
  },

  ':focus': {
    // Disable default browser outline
    outline: 0,

    '&::after': {
      // Show inset box-shadow on focus!
      boxShadow: '0 0 1px 2px hsla(0, 0%, 0%, 0.2) inset',
    },
  },

  ':hover': {
    cursor: 'pointer',
  },

  ':active': {
    transform: 'scale(0.98)',
  },

  variants: {
    variant: {
      text: {
        transitionEased: 'transform 325ms',

        background: 'transparent',
        fontSize: '$btnTextOnly',
        color: '$btnTextOnly',

        ':hover': {
          textDecoration: 'underline',
        },
      },
      contained: {
        padding: '$3 $4',
        fontSize: '$btnTitle',
        borderRadius: '$default',

        backgroundColor: '$btnSecondary',
        color: '$btnSecondaryContrast',
        boxShadow: '0 0 2px hsla(0, 0%, 40%, 0.1), 0 8px 16px hsla(0, 0%, 40%, 0.1)',

        transitionEased: 'transform 325ms, box-shadow 325ms',

        ':hover': {
          transform: 'scale(1.08)',
          boxShadow:
            '0 0 2px hsla(0, 0%, 40%, 0.1), 0 8px 16px hsla(0, 0%, 40%, 0.1), 0 16px 32px hsla(0, 0%, 40%, 0.1)',
        },

        ':active': {
          boxShadow: '0 0 2px hsla(0, 0%, 40%, 0.1), 0 8px 16px hsla(0, 0%, 40%, 0.1)',
        },
      },
    },
    color: {
      primary: {
        backgroundColor: '$primary',
        color: '$primaryContrast',
        boxShadow: '0 0 2px $primaryShadow, 0 8px 16px $primaryShadow',

        ':hover': {
          boxShadow:
            '0 0 2px $primaryShadow, 0 8px 16px $primaryShadow, 0 16px 32px $primaryShadow',
        },

        ':active': {
          boxShadow: '0 0 2px $primaryShadow, 0 8px 16px $primaryShadow',
        },
      },
    },
  },
});

export type ButtonProps = React.ComponentProps<typeof Button>;
