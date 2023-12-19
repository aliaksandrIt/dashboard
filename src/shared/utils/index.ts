export const padding = (size: string) => `padding: var(--spacing-${size});`;
export const margin = (size: string) => `margin: var(--spacing-${size});`;

export const xPadding = (size: string) => `
  padding-left: var(--spacing-${size});
  padding-right: var(--spacing-${size});
`;

export const yPadding = (size: string) => `
  padding-top: var(--spacing-${size});
  padding-bottom: var(--spacing-${size});
`;

export const xMargin = (size: string) => `
  margin-left: var(--spacing-${size});
  margin-right: var(--spacing-${size});
`;

export const yMargin = (size: string) => `
  margin-top: var(--spacing-${size});
  margin-bottom: var(--spacing-${size});
`;
