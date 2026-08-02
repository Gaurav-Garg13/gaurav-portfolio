import { BrowserRouter, Routes, Route } from "react-router-dom";
import SmoothScroll from "./components/layout/SmoothScroll";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Spotlight from "./components/ui/Spotlight";
import CustomCursor from "./components/ui/CustomCursor";
import { ToastProvider } from "./components/ui/Toast";
import { ThemeProvider } from "./context/ThemeContext";
import CommandPalette from "./components/ui/CommandPalette";
import DiagnosticsPanel from "./components/ui/DiagnosticsPanel";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { useCommandPalette } from "./hooks/useCommandPalette";
import { useKonamiCode } from "./hooks/useKonamiCode";

export default function App() {
  const { open: cmdOpen, setOpen: setCmdOpen } = useCommandPalette();
  const { activated: konamiOn, dismiss: konamiDismiss } = useKonamiCode();

  return (
    <BrowserRouter>
      <ThemeProvider>
        <ToastProvider>
        <SmoothScroll>
          <Spotlight />
          <CustomCursor />
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />

          <CommandPalette
            open={cmdOpen}
            onClose={() => setCmdOpen(false)}
          />

          <DiagnosticsPanel
            open={konamiOn}
            onClose={konamiDismiss}
          />
        </SmoothScroll>
      </ToastProvider>
    </ThemeProvider>
  </BrowserRouter>
);
}
