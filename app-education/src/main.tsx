import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Providers } from "./redux/provider.tsx";
import { BrowserRouter as Router } from "react-router";
createRoot(document.getElementById("root")!).render(
  <Router>
    <StrictMode>
      <Providers>
        <App />
      </Providers>
    </StrictMode>
  </Router>
);
