import React from "react";
// استيراد مكون الكتابة
import { Typewriter } from 'react-simple-typewriter';
import myProfileImg from '../assets/me.png'; // نطلع خطوة برا المجلد وندخل assets

export default function Hero({ data }) {
  if (!data) return null;

  return (
    <section className="hero">
      <div className="heroContent">
        {/* الاسم مع انميشن الكتابة */}
        <h1 className="heroName">
          <Typewriter
            words={[data.name]} // الكلمة اللي بتنكتب (اسمك)
            loop={1}            // تنكتب مرة وحدة بس أول ما يفتح الموقع
            cursor              // يظهر الخط اللي يرمش كأنه كيبورد
            cursorStyle='|'
            typeSpeed={100}      // سرعة الكتابة
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        
        <div className="heroRoleTag">UI/UX Designer | Front-end Developer</div>
        
        <p className="heroSummary">
          An <b>IT student </b>at King Abdulaziz University, specialized in bridging 
          the gap between design and development. I combine <b>UI/UX principles </b>
          with modern <b>Front-end </b>technologies to build responsive digital 
          experiences. As a <b>fast learner </b>who is constantly evolving, I’m 
          always eager to embrace new challenges and technologies.
        </p>

        <div className="heroActions">
          <a href="#contact" className="btnPrimary">Contact Me</a>
          <a href="#projects" className="btnSecondary">View Projects</a>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <div className="profile-frame"></div> {/* الدائرة الزجاجية */}
        <img src={myProfileImg} alt="Danah" className="profile-img" />
      </div>
    </section>
  );
}