
import "./App.css";
import { data } from "./data/data.js";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Section from "./components/Section.jsx";
import Skills from "./components/Skills.jsx";
import Navbar from "./components/Navbar.jsx";
import Education from "./components/Education.jsx";
import Achievements from "./components/Achievements.jsx";


export default function App() {
  return (
    <div className="page">
      <Navbar /> 

      <div className="shell">
        <main className="content">
          <Hero data={data} />

          <Section id="skills" title="Skills">
            <Skills skills={data.skills} />
          </Section>

          {/* 2. إضافة قسم الجوائز هنا بعد المهارات مباشرة */}
          <Section id="achievements" title="Achievements">
            <Achievements />
          </Section>

{/*
          <Section id="education" title="Education">
            <Education education={data.education} />
          </Section> 
*/}

          <Section id="projects" title="Projects">
            <Projects projects={data.projects} />
          </Section>

          <Section id="contact" title="Contact">
            <Contact email={data.email} links={data.links} />
          </Section>
        </main>

        <Footer name={data.name} />
      </div>
    </div>
  );
}