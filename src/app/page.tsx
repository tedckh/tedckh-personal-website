import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import styled from "styled-components";

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export default function Home() {
  return (
    <>
      <MainContent>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </MainContent>
      <Footer />
    </>
  );
}
