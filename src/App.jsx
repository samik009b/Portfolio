import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import FooterComponent from "./components/Footer";
import HeroTerminal from "./components/HeroTerminal";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  // play retro bios boot up screen for exactly 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-neutral-primary text-body font-sans selection:bg-brand selection:text-neutral-primary flex flex-col justify-between animate-fade-in-up">
      <div>
        <Navbar />
        
        <main className="mx-auto max-w-7xl p-4 flex flex-col gap-10 my-4 lg:my-6">
          
          {/* Section 1: Hero Terminal */}
          <section id="home" className="scroll-mt-24">
            <HeroTerminal />
          </section>
          
          {/* Section 2: Skills */}
          <section id="skills" className="scroll-mt-20">
            <Skills />
          </section>
          
          {/* Section 3: Projects */}
          <section id="projects" className="scroll-mt-20">
            <Projects />
          </section>
          
          {/* Section 4: About */}
          <section id="about" className="scroll-mt-20">
            <About />
          </section>
          
        </main>
      </div>
      
      <FooterComponent />
    </div>
  );
}

export default App;
