import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Homepage from "./components/Homepage";
import Opinion from "./components/Opinion";
import First from "./components/First";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <First />
    <Homepage />
    <Opinion />
  </StrictMode>
);
