import { createStyled } from '@stitches/react';

const MUTED_BLACK = 'hsla(0, 0%, 0%, 0.87)';
const MUTED_GRAY = 'hsla(0, 0%, 0%, 0.64)';

const theme = {
  colors: {
    $primary: 'hsl(150, 75%, 40%)',
    $primaryShadow: 'hsla(150, 75%, 40%, 0.2)',
    $primaryContrast: 'white',

    $btnSecondary: 'hsl(0, 0%, 85%)',
    $btnSecondaryContrast: MUTED_BLACK,
    $btnTextOnly: MUTED_GRAY,

    $title: MUTED_BLACK,
    $subtitle: MUTED_BLACK,
    $body: MUTED_GRAY,
  },
  letterSpacings: {
    $display: '-0.56px',
    $text: '0.56px',
  },
  lineHeights: {
    $display: '0.9',
    $text: '1.333',
  },
  radii: {
    $default: '8px',
  },
  space: {
    '$.25': '2px',
    '$.5': '4px',
    $1: '8px',
    $2: '16px',
    $3: '24px',
    $4: '32px',
    $6: '48px',
    $8: '64px',
    $16: '128px',
    $32: '256px',
  },
  fontSizes: {
    $landingTitle: '4rem',
    $landingText: '2rem',

    $sectionTitle: '2.25rem',
    $sectionTagline: '1.25rem',

    $asideTitle: '1.5rem',
    $asideText: '0.875rem',

    $btnTitle: '1.25rem',
    $btnTextOnly: '1rem',

    $body: '1.25rem',
    $highlightedProjectBody: '1.5rem',
  },
};

type StitchesValue = string & unknown;
type SpaceStitchesValue = keyof typeof theme['space'] | StitchesValue;

export const { styled, css } = createStyled({
  tokens: theme,
  breakpoints: {
    sm: (rule) => `@media (min-width: 600px) { ${rule} }`,
    md: (rule) => `@media (min-width: 960px) { ${rule} }`,
    lg: (rule) => `@media (min-width: 1280px) { ${rule} }`,
    xl: (rule) => `@media (min-width: 1920px) { ${rule} }`,
  },
  utils: {
    pt: () => (value: SpaceStitchesValue) => ({ paddingTop: value }),
    pr: () => (value: SpaceStitchesValue) => ({ paddingRight: value }),
    pb: () => (value: SpaceStitchesValue) => ({ paddingBottom: value }),
    pl: () => (value: SpaceStitchesValue) => ({ paddingLeft: value }),
    px: () => (value: SpaceStitchesValue) => ({ paddingLeft: value, paddingRight: value }),
    py: () => (value: SpaceStitchesValue) => ({ paddingTop: value, paddingBottom: value }),
    p: () => (value: SpaceStitchesValue) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),

    mt: () => (value: SpaceStitchesValue) => ({ marginTop: value }),
    mr: () => (value: SpaceStitchesValue) => ({ marginRight: value }),
    mb: () => (value: SpaceStitchesValue) => ({ marginBottom: value }),
    ml: () => (value: SpaceStitchesValue) => ({ marginLeft: value }),
    mx: () => (value: SpaceStitchesValue) => ({ marginLeft: value, marginRight: value }),
    my: () => (value: SpaceStitchesValue) => ({ marginTop: value, marginBottom: value }),
    m: () => (value: SpaceStitchesValue) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),

    fd: () => (value) => ({ flexDirection: value }),
    fw: () => (value) => ({ flexWrap: value }),

    ai: () => (value) => ({ alignItems: value }),
    ac: () => (value) => ({ alignContent: value }),
    jc: () => (value) => ({ justifyContent: value }),
    as: () => (value) => ({ alignSelf: value }),
    fg: () => (value) => ({ flexGrow: value }),
    fs: () => (value) => ({ flexShrink: value }),
    fb: () => (value) => ({ flexBasis: value }),

    sy: () => (value: SpaceStitchesValue) => ({ '& > * + *': { marginTop: value } }),
    sx: () => (value: SpaceStitchesValue) => ({ '& > * + *': { marginLeft: value } }),
  },
});
