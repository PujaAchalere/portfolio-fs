import { Cursor } from "./components/Cursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Services } from "./components/sections/Services";
import { Work } from "./components/sections/Work";
import { Process } from "./components/sections/Process";
import { Pricing } from "./components/sections/Pricing";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="page-shell grid-overlay grain-overlay">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Process />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "rgba(13, 13, 56, 0.95)",
            border: "1px solid rgba(255, 77, 0, 0.45)",
            color: "#fff",
            fontFamily: "DM Sans, sans-serif",
            backdropFilter: "blur(12px)",
          },
        }}
      />
    </div>
  );
}

export default App;
