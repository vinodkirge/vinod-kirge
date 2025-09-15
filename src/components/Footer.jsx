import React, { useEffect, useState } from "react";

const Footer = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const headingStyle = {
  fontSize: 18,
  fontWeight: "600",
  marginBottom: 12,
  color: "#F3F4F6",
};

const textStyle = {
  fontSize: 14,
  lineHeight: 1.6,
  color: "#D1D5DB",
};

const linkStyle = {
  fontSize: 14,
  color: "#D1D5DB",
  textDecoration: "none",
  display: "block",
  marginBottom: 8,
};

  return (
    <div>
       <footer
      style={{
        backgroundColor: "#1F2937",
        color: "#D1D5DB",
        paddingTop: 40,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          maxWidth: 1100,
          margin: "0 auto",
          gap: isMobile ? 35 : 7,
        }}
      >
       
        <div style={{ flex: 1 }}>
          <h3 style={headingStyle}>About the Platform</h3>
          <p style={textStyle}>
            A mobile-first civic issue reporting system that empowers citizens and enables local governments to
            respond faster, smarter, and more transparently.
          </p>
        </div>

       
        <div style={{ flex: 1 }}>
          <h3 style={headingStyle}>Quick Links</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><a href="/" style={linkStyle}>Home</a></li>
            <li><a href="/about" style={linkStyle}>About</a></li>
            <li><a href="/report-ussue" style={linkStyle}>Report Issue</a></li>
            <li><a href="/track-reports" style={linkStyle}>Track Reports</a></li>
            <li><a href="/contact" style={linkStyle}>Contact</a></li>
          </ul>
        </div>

       
        <div style={{ flex: 1 }}>
          <h3 style={headingStyle}>Contact</h3>
          <p style={textStyle}>Email: vinodkirge@gmail.io</p>
          <p style={textStyle}>Phone: +91 000000000</p>
          <p style={textStyle}>Location: akurdi pune, India</p>
          <p style={textStyle}>
            Instagram:{" "}
            <a
              href="https://instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#F3F4F6", textDecoration: "underline" }}
            >
              @yourpage
            </a>
          </p>
        </div>
      </div>

      
      <div
        style={{
          textAlign: "center",
          borderTop: "1px solid #374151",
          marginTop: 40,
          paddingTop: 20,
          fontSize: 14,
          color: "#9CA3AF",
        }}
      >
        &copy; {new Date().getFullYear()} CityZen Platform. All rights reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer
