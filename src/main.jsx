import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import UsingUseMemo from "./UsingUseMemo";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UsingUseMemo />
  </StrictMode>
);
