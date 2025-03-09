import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./theme/ThemeProvider.tsx";
import { HelmetProvider } from "./components/providers/HelmetProvider.tsx";

createRoot(document.getElementById("root")!).render(
 <StrictMode>
  <HelmetProvider>
   <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <BrowserRouter>
     <App />
    </BrowserRouter>
   </ThemeProvider>
  </HelmetProvider>
 </StrictMode>
);
