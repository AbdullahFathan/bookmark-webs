import Download from "./components/Download";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import News from "./components/News";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Download />
      <FAQ />
      <News />
      <Footer />
    </main>
  );
};
export default App;
