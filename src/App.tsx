import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { VideoShowcase } from "./components/VideoShowcase";
import { LiveMusic } from "./components/LiveMusic";
import { MenuSection } from "./components/MenuSection";
import { AboutSandona } from "./components/AboutSandona";
import { Footer } from "./components/Footer";
import { BackgroundMusic } from "./components/BackgroundMusic";
import { LanguageProvider } from "./i18n/LanguageContext";
import { menu } from "./data/menu";

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-cream-50">
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
    </LanguageProvider>
  );
}

export default App;
