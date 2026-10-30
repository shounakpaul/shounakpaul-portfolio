import { Navigate, Route, Routes } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import RouteEffects from "./components/RouteEffects";
import Home from "./pages/Home";

export default function App() {
  return (
    <div id="top" className="flex min-h-dvh flex-col">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <RouteEffects />
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/*" element={<Navigate to="/#work" replace />} />
          <Route
            path="/projects"
            element={<Navigate to="/#work" replace />}
          />
          <Route
            path="/experience"
            element={<Navigate to="/#experience" replace />}
          />
          <Route path="/about" element={<Navigate to="/#toolkit" replace />} />
          <Route
            path="/contact"
            element={<Navigate to="/#contact" replace />}
          />
          <Route
            path="/certifications"
            element={<Navigate to="/#experience" replace />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}
