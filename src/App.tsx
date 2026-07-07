import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { VideoShowcase } from "./components/VideoShowcase";
import { MenuSection } from "./components/MenuSection";
import { Footer } from "./components/Footer";
import { menu } from "./data/menu";

function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header categories={menu} />
      <Hero />
      <VideoShowcase />
      {menu.map((category) => (
        <MenuSection key={category.id} category={category} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
