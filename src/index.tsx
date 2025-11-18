import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Commande } from "./screens/Commande";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Commande />
  </StrictMode>,
);
