const size = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};
const device = {
  sm: `(min-width: ${size.sm}px)`,
  md: `(min-width: ${size.md}px)`,
  lg: `(min-width: ${size.lg}px)`,
  xl: `(min-width: ${size.xl}px)`,
};
export default { size, device };
