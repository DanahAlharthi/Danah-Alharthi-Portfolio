// src/components/Skills.jsx

import React from 'react';
// استدعاء الأيقونات المناسبة لكل قسم
import { FiLayout, FiCode, FiTerminal, FiTool, FiAward } from 'react-icons/fi'; 

const Skills = () => {
  const categories = [
    {
      title: "UI/UX Skills",
      icon: <FiLayout />,
      skills: ["UI Design", "User Research", "Wireframing", "Prototyping", "Interaction Design"]
    },
    {
      title: "Frontend Development",
      icon: <FiCode />,
      skills: ["HTML", "CSS", "JavaScript", "React.js"]
    },
    {
      title: "Programming Languages",
      icon: <FiTerminal />,
      skills: ["Java", "Python", "SQL"]
    },
    {
      title: "Tools",
      icon: <FiTool />,
      skills: ["Figma", "Canva", "Blender", "VS Code","Git/GitHub", "Excel"]
    },
    {
      title: "Professional Skills",
      icon: <FiAward />,
      skills: ["Leadership", "Public Speaking", "Problem Solving", "Teamwork", "Creativity"]
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        {categories.map((cat, index) => (
          <div key={index} className="skill-category-card">
            <div className="category-header">
              <span className="category-icon">{cat.icon}</span>
              <h3>{cat.title}</h3>
            </div>
            <div className="skills-wrapper">
              {cat.skills.map((skill, i) => (
                <span key={i} className="individual-skill">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;