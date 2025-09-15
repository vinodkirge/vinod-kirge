import React, { useEffect, useState } from "react";
import Layout from '../components/Layout'

const About = () => {

    const sectionStyle = {
  marginBottom: 40,
};

const subheadingStyle = {
  fontSize: 24,
  fontWeight: "600",
  color: "#4F46E5",
  marginBottom: 12,
};

const paragraphStyle = {
  fontSize: 16,
  lineHeight: 1.7,
  color: "#374151",
};

const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <Layout>
      <main style={{ backgroundColor: "#F9FAFB", paddingTop: 64, paddingBottom: 64, minHeight: "100vh" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: 20 }}>
       
        <h1
          style={{
            fontSize: isMobile ? 28 : 36,
            fontWeight: "700",
            textAlign: "center",
            color: "#111827",
            marginBottom: 40,
          }}
        >
          About Our Platform
        </h1>

       
        <section style={sectionStyle}>
          <h2 style={subheadingStyle}>Why We Built This</h2>
          <p style={paragraphStyle}>
            Local governments often face challenges identifying and resolving issues like potholes,
            broken streetlights, and overflowing garbage bins. Our platform bridges this gap by empowering
            citizens to report problems directly through a simple mobile interface.
          </p>
        </section>

        
        <section style={sectionStyle}>
          <h2 style={subheadingStyle}>Helping Communities and Governments</h2>
          <p style={paragraphStyle}>
            Our system allows citizens to capture real-world issues with photos, descriptions, and even
            voice notes. Reports are automatically routed to the correct municipal department, helping
            local authorities respond faster and more efficiently.
          </p>
        </section>

        
        <section style={sectionStyle}>
          <h2 style={subheadingStyle}>What Makes It Powerful</h2>
          <ul style={{ ...paragraphStyle, listStyle: "disc", paddingLeft: 20 }}>
            <li>Real-time issue reporting with GPS tagging</li>
            <li>Photo, voice, and video support</li>
            <li>Automated routing to city departments</li>
            <li>Interactive dashboards for city administrators</li>
            <li>Status tracking and updates for citizens</li>
            <li>Data analytics to improve civic operations</li>
          </ul>
        </section>

        
        <section style={sectionStyle}>
          <h2 style={subheadingStyle}>Our Mission</h2>
          <p style={paragraphStyle}>
            We aim to foster civic engagement, transparency, and government accountability by making
            issue reporting accessible, efficient, and impactful.
          </p>
        </section>
      </div>
    </main>
    </Layout>
  )
}

export default About
