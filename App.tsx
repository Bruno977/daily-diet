import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/config/theme";

import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar style="dark" translucent backgroundColor="transparent" />
        <Routes />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
