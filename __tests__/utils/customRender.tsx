import { render, RenderOptions } from "@testing-library/react-native";
import { ReactElement, ReactNode } from "react";

import { theme } from "../../src/config/theme";
import { ThemeProvider } from "styled-components/native";

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react-native";

export { customRender as render };
