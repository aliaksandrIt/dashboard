export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
};

export const device = {
  mobile: `(min-width: ${breakpoints.sm}px)`,
  tablet: `(min-width: ${breakpoints.md}px)`,
  laptop: `(min-width: ${breakpoints.lg}px)`,
  desktop: `(min-width: ${breakpoints.xl}px)`,
  desktopL: `(min-width: ${breakpoints.xxl}px)`,
};
