// import React, { useState } from 'react';

// export default function Navbar() {
//   // غيرنا القيمة الافتراضية لتبدأ بـ #skills
//   const [activeNav, setActiveNav] = useState('#skills'); 

//   return (
//     <nav style={fixedWrapper}>
//       <div className="glass-nav" style={navBody}>
//         {/* Logo */}
//         <div style={logoStyle}>DA</div>

//         {/* Links Container */}
//         <div style={linksContainer}>
          
//           <a 
//             href="#skills" 
//             onClick={() => setActiveNav('#skills')}
//             style={activeNav === '#skills' ? activeLinkStyle : navItemBase}
//           >
//             Skills
//           </a>

//           {/* أضفنا Awards هنا بدلاً من Education */}
//           <a 
//             href="#achievements" 
//             onClick={() => setActiveNav('#achievements')}
//             style={activeNav === '#achievements' ? activeLinkStyle : navItemBase}
//           >
//             Achievements
//           </a>

//           <a 
//             href="#projects" 
//             onClick={() => setActiveNav('#projects')}
//             style={activeNav === '#projects' ? activeLinkStyle : navItemBase}
//           >
//             Projects
//           </a>

//           <a 
//             href="#contact" 
//             onClick={() => setActiveNav('#contact')}
//             style={activeNav === '#contact' ? activeLinkStyle : navItemBase}
//           >
//             Contact
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }

// // --- الستايلات (نفس اللي عندك مع لمسات بسيطة) ---

// const fixedWrapper = {
//   position: 'fixed',
//   top: '20px',
//   left: '0',
//   right: '0',
//   zIndex: 9999,
//   display: 'flex',
//   justifyContent: 'center',
//   padding: '0 20px',
//   pointerEvents: 'none'
// };

// const navBody = {
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   width: '100%',
//   maxWidth: '950px',
//   padding: '8px 15px', 
//   background: 'rgba(255, 255, 255, 0.7)',
//   backdropFilter: 'blur(15px)',
//   WebkitBackdropFilter: 'blur(15px)',
//   borderRadius: '100px',
//   border: '1px solid rgba(255, 255, 255, 0.4)',
//   boxShadow: '0 15px 35px rgba(57, 32, 95, 0.1)',
//   pointerEvents: 'auto'
// };

// const navItemBase = {
//   textDecoration: 'none',
//   color: '#39205f',
//   fontWeight: '600',
//   fontSize: '14px',
//   padding: '10px 22px',
//   borderRadius: '50px',
//   transition: 'all 0.4s ease', 
//   display: 'inline-block'
// };

// const activeLinkStyle = {
//   ...navItemBase,
//   background: '#39205f', 
//   color: 'white',        
// };

// const logoStyle = {
//   width: '40px',
//   height: '40px',
//   background: '#f3f0ff',
//   color: '#39205f',
//   borderRadius: '50%',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   fontWeight: '800',
//   fontSize: '15px'
// };

// const linksContainer = {
//   display: 'flex',
//   alignItems: 'center',
//   gap: '5px' 
// };


import React, { useState, useEffect } from 'react';

export default function Navbar() {
  // 1. خليناها فاضية عشان ما يتحدد شيء في البداية وأنتِ فوق
  const [activeNav, setActiveNav] = useState(''); 

  useEffect(() => {
    const sections = ['skills', 'achievements', 'projects', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', 
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        // إذا القسم صار ظاهر في نص الشاشة، نحدده
        if (entry.isIntersecting) {
          setActiveNav(`#${entry.target.id}`);
        } 
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // 2. إضافة مراقب إضافي للتأكد إذا رجعتي لقمة الصفحة (Top)
    const handleScroll = () => {
      if (window.scrollY < 300) { // إذا كان السكرول أقل من 300 بكسل (جهة اسمك)
        setActiveNav(''); // شيل التحديد من كل الروابط
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav style={fixedWrapper}>
      <div className="glass-nav" style={navBody}>
        {/* Logo */}
        <div style={logoStyle}>DA</div>

        {/* Links Container */}
        <div style={linksContainer}>
          
          <a 
            href="#skills" 
            onClick={() => setActiveNav('#skills')}
            style={activeNav === '#skills' ? activeLinkStyle : navItemBase}
          >
            Skills
          </a>

          <a 
            href="#achievements" 
            onClick={() => setActiveNav('#achievements')}
            style={activeNav === '#achievements' ? activeLinkStyle : navItemBase}
          >
            Achievements
          </a>

          <a 
            href="#projects" 
            onClick={() => setActiveNav('#projects')}
            style={activeNav === '#projects' ? activeLinkStyle : navItemBase}
          >
            Projects
          </a>

          <a 
            href="#contact" 
            onClick={() => setActiveNav('#contact')}
            style={activeNav === '#contact' ? activeLinkStyle : navItemBase}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

// --- الستايلات حقتك (بدون أي تغيير) ---
const fixedWrapper = {
  position: 'fixed',
  top: '20px',
  left: '0',
  right: '0',
  zIndex: 9999,
  display: 'flex',
  justifyContent: 'center',
  padding: '0 20px',
  pointerEvents: 'none'
};

const navBody = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: '950px',
  padding: '8px 15px', 
  background: 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(15px)',
  WebkitBackdropFilter: 'blur(15px)',
  borderRadius: '100px',
  border: '1px solid rgba(255, 255, 255, 0.4)',
  boxShadow: '0 15px 35px rgba(57, 32, 95, 0.1)',
  pointerEvents: 'auto'
};

const navItemBase = {
  textDecoration: 'none',
  color: '#39205f',
  fontWeight: '600',
  fontSize: '14px',
  padding: '10px 22px',
  borderRadius: '50px',
  transition: 'all 0.4s ease', 
  display: 'inline-block'
};

const activeLinkStyle = {
  ...navItemBase,
  background: '#39205f', 
  color: 'white',        
};

const logoStyle = {
  width: '40px',
  height: '40px',
  background: '#f3f0ff',
  color: '#39205f',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '800',
  fontSize: '15px'
};

const linksContainer = {
  display: 'flex',
  alignItems: 'center',
  gap: '5px' 
};