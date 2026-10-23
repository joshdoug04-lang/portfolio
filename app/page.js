import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Toolkit from "@/components/Toolkit";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <Toolkit />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
