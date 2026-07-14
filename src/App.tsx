import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { VideoShowcase } from "./components/VideoShowcase";
import { LiveMusic } from "./components/LiveMusic";
import { MenuSection } from "./components/MenuSection";
import { AboutSandona } from "./components/AboutSandona";
import { Footer } from "./components/Footer";
import { BackgroundMusic } from "./components/BackgroundMusic";
import { LandingOverlay } from "./components/LandingOverlay";
import { MenuItemModal } from "./components/MenuItemModal";
import { LanguageProvider } from "./i18n/LanguageContext";
import { MenuModalProvider } from "./context/MenuModalContext";
import { menu } from "./data/menu";

function App() {
  const [showLanding, setShowLanding] = useState(true);

  return (
    <LanguageProvider>
      <MenuModalProvider>
        <div
          className={`min-h-screen bg-cream-50 transition-[filter] duration-500 ${
            showLanding ? "pointer-events-none blur-md" : ""
          }`}
        >
          <BackgroundMusic />
          <Header categories={menu} />
          <Hero />
          <VideoShowcase />
          <LiveMusic />
          {menu.map((category) => (
            <MenuSection key={category.id} category={category} />
          ))}
          <AboutSandona />
          <Footer />
        </div>

        {showLanding && <LandingOverlay onDismiss={() => setShowLanding(false)} />}
        <MenuItemModal />
      </MenuModalProvider>
    </LanguageProvider>
  );
}

export default App;
