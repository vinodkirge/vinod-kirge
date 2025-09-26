import { useState, useEffect } from "react";
import Layout from "../components/Layout";

const ReportIssue = () => {
  const labelStyle = {
    display: "block",
    marginBottom: 8,
    fontWeight: "600",
    color: "#374151",
    fontSize: 16,
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: 8,
    border: "1px solid #D1D5DB",
    fontSize: 16,
    color: "#111827",
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [form, setForm] = useState({
    photo: null,
    description: "",
    audio: null,
    video: null,
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, files, value } = e.target;
    if (name === "photo" || name === "audio" || name === "video") {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Issue submitted! (Frontend only)");
  };

  return (
    <Layout>
      <main
        style={{
          backgroundColor: "#F9FAFB",
          minHeight: "100vh",
          paddingTop: 64,
          paddingBottom: 64,
        }}
      >
        <div style={{ maxWidth: 768, margin: "0 auto", padding: 20 }}>
          <h1
            style={{
              fontSize: isMobile ? 28 : 36,
              fontWeight: "700",
              textAlign: "center",
              color: "#111827",
              marginBottom: 40,
            }}
          >
            Report a Civic Issue
          </h1>

          <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: "#ffffff",
              padding: 24,
              borderRadius: 12,
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            {/* 📷 Photo input with camera access */}
            <div style={{ marginBottom: 24 }}>
              <label style={labelStyle}>Upload Photo of Issue</label>
              <input
                type="file"
                name="photo"
                accept="image/*"
                capture="environment" // This prompts camera on mobile devices
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>

            {/* 📝 Description */}
            <div style={{ marginBottom: 24 }}>
              <label style={labelStyle}>Description</label>
              <textarea
                name="description"
                placeholder="Describe the issue (e.g. pothole on main road near shop)..."
                value={form.description}
                onChange={handleChange}
                rows={5}
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  fontFamily: "inherit",
                }}
                required
              />
            </div>

            {/* 🎤 Optional audio */}
            <div style={{ marginBottom: 24 }}>
              <label style={labelStyle}>Upload Voice Note (optional)</label>
              <input
                type="file"
                name="audio"
                accept="audio/*"
                onChange={handleChange}
                style={inputStyle}
              />
            </div>

            {/* 📹 Optional video */}
            <div style={{ marginBottom: 32 }}>
              <label style={labelStyle}>Upload Video of Issue (optional)</label>
              <input
                type="file"
                name="video"
                accept="video/*"
                onChange={handleChange}
                style={inputStyle}
              />
            </div>

            {/* 🚀 Submit */}
            <div style={{ textAlign: "center" }}>
              <button
                type="submit"
                style={{
                  backgroundColor: "#4F46E5",
                  color: "white",
                  padding: "14px 40px",
                  borderRadius: 8,
                  fontSize: 18,
                  fontWeight: "600",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#4338CA")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#4F46E5")
                }
              >
                Submit Issue
              </button>
            </div>
          </form>
        </div>
      </main>
    </Layout>
  );
};

export default ReportIssue;
