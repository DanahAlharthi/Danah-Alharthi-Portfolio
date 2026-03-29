import React from 'react';
// تأكدي من تسمية الصور بشكل صحيح في مجلد assets
// جربي كتابة المسار كذا بالضبط وتأكدي من الامتداد
import dubaiPhoto from "../assets/dubai-award.jpg"; 
import muazirPhoto from "../assets/muazir-award.jpg";

const achievementsData = [
  {
    id: 1,
    title: "2nd Runner-up | Inter-College Environmental Public Speaking Competition",
    org: "EEG - Dubai, UAE",
    year: "2025",
    desc: "Proudly represented King Abdulaziz University in an international arena, securing 2nd runner-up among top global competitors. We presented a strategic analysis on AI’s environmental impact and proposed the 'Digital Sustainability License', a pioneering regulatory framework designed to align AI innovation with global sustainability standards.",
    image: dubaiPhoto, // ربط الصورة بالكائن
  },
  {
    id: 2,
    title: "7th Place | Eduthon",
    org: "King Khalid University - Abha",
    year: "2024",
    desc: "Ranked 7th out of 30 finalists, selected from over 120 competing teams at the Innovation and Education Hackathon in Abha. We developed 'Muazir,' an assistive technology solution designed for visually impaired students, recognized for its social impact and inclusive design.",
    image: muazirPhoto, // ربط الصورة بالكائن
  }
];

export default function Achievements() {
  return (
    <div className="achievements-content">
      {achievementsData.map((award) => (
        <div key={award.id} className="achievement-row">
          
          {/* جزء النص - اليسار */}
          <div className="award-text-block">
            <span className="award-year-tag">{award.year}</span>
            <h3 className="award-row-title">{award.title}</h3>
            <p className="award-row-org">{award.org}</p>
            <p className="award-row-desc">{award.desc}</p>
          </div>

          {/* جزء الصورة - اليمين */}
          <div className="award-image-block">
            <img src={award.image} alt={award.title} className="award-row-img" />
          </div>
          
        </div>
      ))}
    </div>
  );
}