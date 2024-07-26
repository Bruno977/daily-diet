import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/config/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" translucent />
      <Routes />
    </ThemeProvider>
  );
}
