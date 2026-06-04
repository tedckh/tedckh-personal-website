import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function IndexPage({ params }: Props) {
  const { locale } = use(params);
  setRequestLocale(locale);
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <p style={{ textAlign: "center", marginTop: "2rem" }}>
        <a href="/example-static-page.html" target="_blank" rel="noopener noreferrer" style={{ color: "blue", textDecoration: "underline" }}>
          View Example Static HTML Page
        </a>
      </p>
    </>
  );
}
