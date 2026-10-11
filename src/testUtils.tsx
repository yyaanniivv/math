import React, { ReactNode } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '@testing-library/jest-dom';

const theme = createTheme();

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  theme?: typeof theme;
}

function customRender(ui: React.ReactElement, options: CustomRenderOptions = {}): RenderResult {
  const { theme: customTheme, ...renderOptions } = options;
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <ThemeProvider theme={customTheme || theme}>{children}</ThemeProvider>
  );
  return render(ui, { wrapper: Wrapper as any, ...renderOptions });
}

export * from '@testing-library/react';
export { customRender as render };
