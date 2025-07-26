import React from 'react';
import '../styles/About.css'; 
import Saameer from '../assets/image.png';
import Aashish from '../assets/aashish.jpg';
import Himal from  '../assets/himal.jpg';// Ensure this image exists in your assets folder
 
export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      

      <section className="about-section">
        <h2>Contact Information</h2>
        <p><strong>Name:</strong> Burning News Team</p>
        <p><strong>Email:</strong> burnignnews911@gmail.com</p>
        <p><strong>Phone:</strong> 0167789542</p>
      </section>
      <section className="about-section">
  <h2>Social Media</h2>
  <div className="social-grid">
    <div className="social-card">
      <h3>Facebook</h3>
      <ul>
        <li><a href="https://www.facebook.com/share/1GY7LKb3km/" target="_blank" rel="noopener noreferrer">Aashish Aryal</a></li>
        <li><a href="https://www.facebook.com/himal.sunar.106/" target="_blank" rel="noopener noreferrer">Himal Sunar</a></li>
        <li><a href="https://www.facebook.com/sameer.khanbhai.50596/" target="_blank" rel="noopener noreferrer">Md Saameer Ali</a></li>
      </ul>
    </div>
    <div className="social-card">
      <h3>Instagram</h3>
      <ul>
        <li><a href="https://www.instagram.com/aashisharyal555" target="_blank" rel="noopener noreferrer">Aashish Aryal</a></li>
        <li><a href="https://www.instagram.com/himal.sunar.106" target="_blank" rel="noopener noreferrer">Himal Sunar</a></li>
        <li><a href="https://www.instagram.com/sameer_khan.bhai" target="_blank" rel="noopener noreferrer">Md Saameer Ali</a></li>
      </ul>
    </div>
    <div className="social-card">
      <h3>LinkedIn</h3>
      <ul>
        <li><a href="https://www.linkedin.com/in/aashish-aryal-7769a0370" target="_blank" rel="noopener noreferrer">Aashish Aryal</a></li>
        <li><a href="https://www.linkedin.com/in/himal-sunar-858761351" target="_blank" rel="noopener noreferrer">Himal Sunar</a></li>
        <li><a href="https://www.linkedin.com/in/sameer-khan" target="_blank" rel="noopener noreferrer">Md Saameer Ali</a></li>
      </ul>
    </div>
  </div>
</section>

<section className="about-section team-section">
  <h2>Our Team</h2>
  <div className="team-grid">
    <div className="team-card"><div><img src={Aashish} alt="Aashish"/></div>
      Aashish Aryal – Frontend Developer (Founder)
      <p>As the Founder, Mr.Aashish envisioned and initiated the creation of [Burning News], laying the strategic, operational, and cultural foundation of the organization. Mr.Aashish led the company from concept to execution—developing the core business model, building the initial team, securing resources, and steering early growth. Hiss role encompasses long-term vision, innovation, and
decision-making to drive sustainable success and impact in our industry.</p>

    </div>





    <div className="team-card"><div><img src={Himal} alt="Himal"/></div>
      Himal Sunar – UI/UX Designer (Co-Founder)
        <p>As the Co-Founder of [Burning News], Mr Himal Sunar have been instrumental in shaping the company’s vision, building its foundation, and driving its growth from the ground up. Mr Himal Sunar role spans across strategic planning, team leadership, product development, and day-to-day operations. Mr Himal Sunar bring innovation, resilience, and long-term thinking to every decision, ensuring we stay aligned with our mission while adapting to changing market dynamics.</p>
        </div>





    <div className="team-card"><div><img src={Saameer} alt="Saameer"/></div>
      Md Saameer Ail – Backend Developer (CEO)
      <p>Sameer Ali – Chief Executive Officer (CEO)
Sameer Ali leads the company with a clear vision and a passion for innovation. As CEO, he is responsible for overseeing daily operations, driving long-term strategy, and ensuring the platform delivers accurate and impactful news. With a strong background in team management and digital platforms, Sameer combines leadership with a deep understanding of how technology can shape the future of journalism.
</p>
      </div>
  </div>
</section>
</div>
  );
}
