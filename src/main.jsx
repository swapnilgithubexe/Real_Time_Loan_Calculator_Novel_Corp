import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./context/themeContext.jsx";
import { CurrenyProvider } from "./context/currencyContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <CurrenyProvider>
        <App />
      </CurrenyProvider>
    </ThemeProvider>
  </StrictMode>
);
