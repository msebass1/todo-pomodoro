import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./screens/App/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
