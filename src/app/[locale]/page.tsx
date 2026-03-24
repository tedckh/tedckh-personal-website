import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TBDSection from "@/components/TBDSection";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import styled from "styled-components";

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

type Props = {
  params: Promise<{ locale: string }>;
};

export default function IndexPage({ params }: Props) {
  const { locale } = use(params);
  setRequestLocale(locale);
  return (
    <>
      <Header />
      <MainContent>
        <Hero />
        <Projects />
        <TBDSection titleNamespace="About" />
        {/* <About /> */}
        <Skills />
        <Contact />
      </MainContent>
      <Footer />
    </>
  );
}
