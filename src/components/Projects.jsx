import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// استيراد الصور (تأكدي من وجودها في مجلد assets)
import m1 from '../assets/m1.jpg';
import m2 from '../assets/m2.jpg';
import m3 from '../assets/m3.jpg';
import m4 from '../assets/m4.jpg';
import m5 from '../assets/m5.jpg';
import m6 from '../assets/m6.jpg';
import m7 from '../assets/m7.jpg';
import m8 from '../assets/m8.jpg';

import bus1 from '../assets/bus1.png';
import bus2 from '../assets/bus2.png';
import bus3 from '../assets/bus3.png';
import bus4 from '../assets/bus4.png';
import bus5 from '../assets/bus5.png';
import bus6 from '../assets/bus6.png';

import Etar1 from '../assets/Etar1.png';
import Etar2 from '../assets/Etar2.png';
import Etar3 from '../assets/Etar3.png';
import Etar4 from '../assets/Etar4.png';
import Etar5 from '../assets/Etar5.png';
import Etar6 from '../assets/Etar6.png';

import em1 from '../assets/em1.png';
import em2 from '../assets/em2.png';
import em3 from '../assets/em3.png';
import em4 from '../assets/em4.png';
import em5 from '../assets/em5.png';
import em6 from '../assets/em6.png';

import d1 from '../assets/d1.jpg';
import d2 from '../assets/d2.jpg';
import d3 from '../assets/d3.jpg';

import tesla1 from "../assets/t1.jpg";
import tesla2 from "../assets/t2.jpg";
import tesla3 from "../assets/t3.jpg";

import week2 from '../assets/week2.png';

import nm1 from '../assets/nm1.jpg';
import nm2 from '../assets/nm2.jpg';
import nm3 from '../assets/nm3.jpg';

import lo1 from '../assets/lo1.jpg'; 
import lo2 from '../assets/lo2.jpg'; 
import lo3 from '../assets/lo3.jpg';

import ma1 from "../assets/ma1.jpg";
import ma2 from "../assets/ma2.jpg"; 
import ma3 from "../assets/ma3.jpg";
import ma4 from "../assets/ma4.jpg"; 
import ma5 from "../assets/ma5.jpg";



const myProjects = [
  { 
    id: 1, 
    title: "Muazir", 
    tags: ["UI/UX"], 
    description: "An innovative inclusive platform designed to empower visually impaired students. It features 'Muazir Math' for interactive equation solving and 'Smart Review' for AI-generated quizzes. Muazir proudly participated in the 'Eduthon' at King Khalid University, winning 7th place out of 30 nominated teams. The project focuses on high-level Accessibility Interfaces to ensure a seamless and independent learning journey.", 
    images: [m1, m2, m3, m4, m5, m6, m7, m8] 
  },
  { 
    id: 2, 
    title: "Masarat Alkhair", 
    tags: ["UI/UX", "Systems Analyst", "SQL & Database"], 
    description: "A comprehensive Bus Management System developed for Database (CPIT240) and Systems Analysis & Design (CPIT250). The project involved designing a robust SQL database schema and conducting full system analysis, including UML modeling and data flow diagrams. As a UI/UX Designer, I translated complex logistics requirements into user-centric interfaces, ensuring a seamless experience for both administrators and drivers while optimizing transportation efficiency.",    
    images: [bus1, bus2, bus3, bus4, bus5, bus6] 
  },
  { 
    id: 3, 
    title: "Etar", 
    tags: ["Presenter", "UI/UX"], 
    subtitle: "Enjaz Hackathon Participant",
    description: "An innovative Internal Talent Platform designed to optimize human resource utilization within organizations. 'Etar' enables employees to contribute their hidden skills across different departments. Developed during the 'Enjaz Hackathon', the platform focuses on breaking departmental silos, discovering untapped potential, and maximizing internal efficiency through a seamless, skill-based task allocation system.",    
    images: [Etar1, Etar2, Etar3, Etar4, Etar5, Etar6] 
  },
  { 
    id: 4, 
    title: "Imtinan", 
    subtitle: "Mobile App Project",
    // التاقات تركز على مهاراتك في تصميم واجهات الجوال والهوية البصرية
    tags: ["UI/UX", "Figma"], 
    description: "The final project for the 'Jusoor Challenge', where I independently handled the entire design lifecycle from concept to a High-Fidelity prototype. 'Imtinan' is a specialized platform designed to foster a culture of gratitude and social appreciation. I focused on creating an emotionally resonant visual identity, ensuring the interface evokes feelings of warmth and connectivity. The project involved designing a seamless, high-fidelity mobile experience that allows users to express appreciation intuitively, combining aesthetic appeal with a user-centric flow.",    images: [em1, em2, em3, em4, em5, em6] 
  },
  { 
    id: 5, 
    title: "Donut Galaxy", 
    tags: ["3D Modeling", "Blender"], 
    description: "A creative 3D project developed using Blender, where I reimagined the solar system as a galaxy of stylized donuts. This project involved complex 3D modeling, texture painting, and lighting to create a visually captivating and surreal cosmic environment. Each 'planet' was uniquely textured and rendered to balance realism with a playful, artistic aesthetic.", 
    images: [d1, d2, d3]
  },
  { 
    id: 6, 
    title: "Tesla in Al-Ula ", 
    tags: ["3D Animation", "Blender"], 
    description: "A collaborative 3D Animation project developed in Blender as the final project for the 'CPIT280 Graphics' course. In a team effort, we reimagined Al-Ula's majestic landscape featuring futuristic Tesla vehicles. The project involved a full animation pipeline, including 3D modeling, texturing, dynamic lighting, camera work, special effects, and a complete sound design to create an immersive cinematic experience.", 
    images: [tesla1, tesla2, tesla3] // تأكدي من تسمية الصور في الـ import فوق
  },
  { 
    id: 7, 
    title: "Jusoor Virtual App", 
    tags: ["UI/UX", "Figma"], 
    description: "UI design completed during the 'Jusoor 30-Day Challenge' . This intensive program focused on mastering Figma through daily practical assignments. The project showcases a variety of user interfaces, focusing on layout consistency, typography, and advanced prototyping techniques, reflecting a steep learning curve and dedication to professional design standards.", 
    images: [week2] // تأكدي من تسمية الصور في الـ import فوق
  },
  { 
    id: 8, 
    title: "Namaa Nonprofit Analysis", 
    tags: ["Data Analysis", "Strategic Consulting", "Design", "Problem solving"], 
    description: "Participated in the Consulting Championship organized by Aramco and Deloitte, focusing on a strategic analysis for 'Namaa,' a hypothetical non-profit healthcare organization. In this team-based project, we conducted a deep dive into volunteer demographics and operational efficiency. We utilized data visualization to identify critical gaps, such as the over-reliance on student volunteers, and proposed data-driven solutions to enhance long-term sustainability and volunteer management, aligning with healthcare impact goals.", 
    images: [nm1, nm2, nm3] // تأكدي من تسمية الصور في الـ import فوق
  },
  {
    id: 9,
    title: "Locker Reservation System",
    description: "A collaborative Software Engineering project (CPIT 251) developed using Java and Agile XP methodology. This system automates the locker reservation process for KAU students, featuring real-time availability updates and a smart priority system specifically engineered for students with special needs.",
    images: [lo1, lo2, lo3], // إذا عندك سلايدر عرض صور
    tags: ["Software Engineering", "Java", "Agile XP"]
  },
  {
    id: 10,
    title: "Matchino Calculator",
    description: "A collaborative UI/UX design project for CPIT 280 (Human-Computer Interaction). Matchino Calculator is a mobile app prototype created to solve the problem of inconsistent drink measurements. Based on a survey of 252 users, our team designed an intuitive interface that guides users through customizing their drinks. The project involved the entire design lifecycle: from Requirement Gathering and Low-fidelity wireframes to a High-fidelity Figma prototype, all validated through Usability Testing to ensure a seamless user experience.",
    images: [ma1, ma2, ma3, ma4, ma5],
    tags: ["UI/UX Design", "Figma", "User Research"],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  // تحديث مكان السكرول لضمان ظهور النافذة في المنتصف
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* قسم المشاريع الأساسي */}
      <section className="section" id="projects" style={{ padding: '0px 20px' }}>
        <div className="projects-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {myProjects.map((project) => (
            <div 
              className="project-card" 
              key={project.id} 
              onClick={() => {
                setScrollY(window.scrollY);
                setSelectedProject(project);
              }}
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                borderRadius: '24px',
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                transition: 'transform 0.3s ease'
              }}
            >
              {/* الصورة في الكرت الصغير */}
              <div style={{ height: '220px', width: '100%' }}>
                <img 
                  src={project.images[0] || "https://via.placeholder.com/400x250"} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  alt={project.title} 
                />
              </div>
              
              {/* معلومات الكرت الصغير */}
              <div className="project-info" style={{ padding: '20px' }}>
                <h3 style={{ color: '#39205f', marginBottom: '10px' }}>{project.title}</h3>
                <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '15px' }}>
                  {project.description.substring(0, 85)}...
                </p>
                {/* تاق الكرت الصغير */}
                <div style={{ 
                  display: 'flex',      // تفعيل نظام الفليكس
                  flexWrap: 'wrap',     // عشان لو زادت التاقات تنزل سطر جديد وما تخرب الكرت
                  gap: '8px'            // هذه هي المسافة "بين" التاقات يمين ويسار
                }}>
                  {project.tags?.map((tag, i) => (
                    <span key={i} style={{ 
                      background: 'rgba(57, 32, 95, 0.1)', 
                      color: '#39205f', 
                      padding: '4px 12px', // هذا البادنق (المساحة داخل التاق)
                      borderRadius: '20px', 
                      fontSize: '11px', 
                      fontWeight: '600' 
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* النافذة المنبثقة (Modal) بالبوابة السحرية Portal */}
      {selectedProject && createPortal(
        <div 
          style={{
            position: 'absolute',
            top: `${scrollY}px`,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000000,
            cursor: 'zoom-out'
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div 
            style={{
              backgroundColor: 'white',
              borderRadius: '28px',
              padding: '0',
              boxShadow: '0 40px 100px rgba(57, 32, 95, 0.2)',
              maxWidth: '600px',
              width: '90%',
              overflow: 'hidden',
              position: 'relative',
              border: '1px solid white',
              cursor: 'default'
            }}
            onClick={(e) => e.stopPropagation()} 
          >
            {/* سلايدر الصور Edge-to-Edge */}
            <div style={{ height: '400px', width: '100%' }}>
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                style={{ 
                  height: '100%', 
                  "--swiper-navigation-size": "20px", 
                  "--swiper-theme-color": "#fff" 
                }}
              >
                {selectedProject.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img 
                      src={img} 
                      alt="Detail" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* تفاصيل المشروع داخل النافذة */}
            <div style={{ padding: '30px' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '15px', color: '#39205f' }}>
                {selectedProject.title}
              </h3>
              
              {/* الوصف الكامل */}
              <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#64748b', marginBottom: '20px' }}>
                {selectedProject.description}
              </p>

              {/* التاق في نهاية الوصف - أضفنا display flex و gap هنا */}
              <div style={{ 
                marginTop: '15px', 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '10px' 
              }}>
                {selectedProject.tags?.map((tag, i) => (
                  <span key={i} style={{ 
                    background: 'rgba(57, 32, 95, 0.08)', // لون أهدأ شوي للنافذة
                    color: '#39205f', 
                    padding: '6px 16px', 
                    borderRadius: '20px', 
                    fontSize: '12px', 
                    fontWeight: '600',
                    display: 'inline-block'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* زر الإغلاق الموف الأنيق */}
            <button 
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                width: '35px',
                height: '35px',
                borderRadius: '50%',
                background: 'rgba(57, 32, 95, 0.7)',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                zIndex: 10,
                fontSize: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(5px)'
              }}
            >
              ×
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}