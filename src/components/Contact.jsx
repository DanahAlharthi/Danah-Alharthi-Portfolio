import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'; 
import { IoSend } from "react-icons/io5";

emailjs.init("by3p8Bq5bNyP3QTwe");

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
      e.preventDefault();
      setStatus('Sending...');

      // تجهيز البيانات يدوياً لضمان وصولها
      const templateParams = {
        user_name: form.current.user_name.value,
        user_email: form.current.user_email.value,
        message: form.current.message.value,
      };

      emailjs.send(
        'service_jbwc8th', 
        'template_8oata9h', 
        templateParams, 
        'by3p8Bq5bNyP3QTwe'
      )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setStatus('Message sent successfully! ✨');
            form.current.reset();
        }, (err) => {
            console.log('FAILED...', err);
            setStatus(`Failed to send: ${err.text || 'Check console'}`);
        });
    };

  return (
    <section id="contact" style={{ padding: '30px 20px', maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ 
        background: 'rgba(255, 255, 255, 0.6)', 
        backdropFilter: 'blur(20px)', 
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '40px', 
        padding: '30px 30px', 
        boxShadow: '0 25px 50px rgba(57, 32, 95, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.4)',
      }}>
        
        <h2 style={{ color: '#39205f', fontSize: '2.2rem', marginTop: '0', marginBottom: '10px', fontWeight: '800' }}>
          Email me!
        </h2>
        <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '20px' }}>
          Feel free to reach out for collaborations or just a friendly hello!
        </p>

        <form ref={form} onSubmit={sendEmail} style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '20px',
          textAlign: 'left'
        }}>
          {/* خانة الاسم */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={labelStyle}>Full Name</label>
            <input type="text" name="user_name" placeholder="E.g. Danah" required style={inputStyle} />
          </div>

          {/* خانة الإيميل */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={labelStyle}>Email Address</label>
            <input type="email" name="user_email" placeholder="name@example.com" required style={inputStyle} />
          </div>

          {/* خانة الرسالة - تأخذ العرض كامل */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', gridColumn: '1 / -1' }}>
            <label style={labelStyle}>Your Message</label>
            <textarea name="message" placeholder="Tell me about your project..." rows="6" required style={inputStyle}></textarea>
          </div>
          
          {/* زر الإرسال */}
          <div style={{ gridColumn: '1 / -1', marginTop: '10px' }}>
            <button type="submit" className="send-btn" style={{
              background: '#39205f',
              color: 'white',
              padding: '16px 40px',
              borderRadius: '18px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '18px',
              fontWeight: '600',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 20px rgba(57, 32, 95, 0.2)'
            }}>
              Send Message <IoSend size={18} />
            </button>
          </div>

          {status && (
            <p style={{ 
              gridColumn: '1 / -1', 
              color: '#39205f', 
              fontWeight: '600', 
              marginTop: '15px',
              fontSize: '0.9rem' 
            }}>
              {status}
            </p>
          )}
        </form>

        <div style={{ 
          margin: '50px 0 30px', 
          height: '1px', 
          background: 'linear-gradient(to right, transparent, rgba(57, 32, 95, 0.2), transparent)' 
        }} />

        {/* روابط التواصل الاجتماعي */}
        <div className="social-links-container">
          <a 
            href="http://linkedin.com/in/danahalharthi" 
            target="_blank" 
            rel="noreferrer" 
            className="social-icon-wrapper" /* غيرنا الكلاس وحذفنا الـ style يدوياً */
          >
            <FaLinkedinIn size={22} />
          </a>
          
          <a 
            href="https://x.com/it_danah" 
            target="_blank" 
            rel="noreferrer" 
            className="social-icon-wrapper" /* غيرنا الكلاس وحذفنا الـ style يدوياً */
          >
            <FaXTwitter size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}

// الستايلات المشتركة
const labelStyle = {
  fontSize: '14px',
  fontWeight: '600',
  color: '#39205f',
  marginLeft: '5px'
};

const inputStyle = {
  padding: '16px 20px',
  borderRadius: '16px',
  border: '1px solid rgba(57, 32, 95, 0.1)',
  background: 'rgba(255, 255, 255, 0.8)',
  outline: 'none',
  fontSize: '15px',
  color: '#39205f',
  transition: '0.3s',
  resize: 'none',
  fontFamily: 'inherit'
};

const socialIconStyle = {
  width: '55px',
  height: '55px',
  borderRadius: '18px',
  background: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#39205f',
  boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
  transition: 'all 0.3s ease',
  textDecoration: 'none'
};