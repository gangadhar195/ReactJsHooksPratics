import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeProvider from "./component/UseContext/ThemeContext.jsx";
import Hooks from "./component/Hooks/Hooks.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ThemeProvider>
      <App />
    </ThemeProvider> */}
<Hooks/>
  </StrictMode>
);
