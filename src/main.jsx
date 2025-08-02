import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Homepage from "./components/Homepage";
import Opinion from "./components/Opinion";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Homepage />
    <Opinion />
  </StrictMode>
);
