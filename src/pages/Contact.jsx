import React, { useState, useEffect } from "react";
import Layout from '../components/Layout'

const Contact = () => {
    
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
    alert("Message sent! (This is frontend-only for now)");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const labelStyle = {
  display: "block",
  marginBottom: 8,
  fontWeight: "600",
  color: "#374151",
  fontSize: 16,
};

const inputStyle = {
  width: "100%",
  padding: 12,
  borderRadius: 8,
  border: "1px solid #D1D5DB",
  fontSize: 16,
  color: "#111827",
};

  return (
   <Layout>
    <main style={{ backgroundColor: "#F9FAFB", minHeight: "100vh", paddingTop: 64, paddingBottom: 64 }}>
      <div style={{ maxWidth: 700, margin: "0 auto", padding: 20 }}>
        
        <h1
          style={{
            fontSize: isMobile ? 28 : 36,
            fontWeight: "700",
            textAlign: "center",
            color: "#111827",
            marginBottom: 40,
          }}
        >
          Contact Us
        </h1>

        
        <p
          style={{
            fontSize: 16,
            color: "#4B5563",
            textAlign: "center",
            marginBottom: 40,
            maxWidth: 600,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Got a question, feedback, or suggestion? Fill out the form below and we’ll get back to you shortly.
        </p>

        
        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: "#ffffff",
            padding: 24,
            borderRadius: 12,
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
         
          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              style={inputStyle}
            />
          </div>

         
          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              style={inputStyle}
            />
          </div>

          
          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What is this about?"
              style={inputStyle}
            />
          </div>

         
          <div style={{ marginBottom: 30 }}>
            <label style={labelStyle}>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              placeholder="Write your message here..."
              style={{
                ...inputStyle,
                resize: "vertical",
                fontFamily: "inherit",
              }}
            ></textarea>
          </div>

         
          <div style={{ textAlign: "center" }}>
            <button
              type="submit"
              style={{
                backgroundColor: "#4F46E5",
                color: "#fff",
                padding: "14px 40px",
                border: "none",
                borderRadius: 8,
                fontSize: 18,
                fontWeight: 600,
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4338CA")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4F46E5")}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </main>
   </Layout>
  )
}

export default Contact
