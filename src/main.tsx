import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import "./index.css";
import Statistiques from "./pages/Statistiques.tsx";
import Settings from "./pages/Settings.tsx";
import Users from "./pages/Users.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Statistiques />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
