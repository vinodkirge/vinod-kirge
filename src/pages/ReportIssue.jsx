import { useState, useEffect, useRef } from "react";
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

  // Refs for hidden inputs
  const cameraInputRef = useRef(null);
  const galleryInputRef = useRef(null);

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
            {/* 📷 Custom Camera and Gallery Inputs */}
            <div style={{ marginBottom: 24 }}>
              <label style={labelStyle}>Upload Photo of Issue</label>

              <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                {/* Camera Button */}
                <button
                  type="button"
                  onClick={() => cameraInputRef.current.click()}
                  style={{
                    flex: 1,
                    padding: "12px",
                    backgroundColor: "#E0E7FF",
                    border: "1px solid #CBD5E1",
                    borderRadius: 8,
                    fontWeight: 600,
                    fontSize: 16,
                    cursor: "pointer",
                  }}
                >
                  📸 Take Photo
                </button>

                {/* Gallery Button */}
                <button
                  type="button"
                  onClick={() => galleryInputRef.current.click()}
                  style={{
                    flex: 1,
                    padding: "12px",
                    backgroundColor: "#FEF9C3",
                    border: "1px solid #FCD34D",
                    borderRadius: 8,
                    fontWeight: 600,
                    fontSize: 16,
                    cursor: "pointer",
                  }}
                >
                  🖼️ Gallery
                </button>
              </div>

              {/* Hidden Camera Input */}
              <input
                ref={cameraInputRef}
                type="file"
                name="photo"
                accept="image/*"
                capture="environment"
                onChange={handleChange}
                style={{ display: "none" }}
              />

              {/* Hidden Gallery Input */}
              <input
                ref={galleryInputRef}
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleChange}
                style={{ display: "none" }}
              />

              {/* Preview if photo selected */}
              {form.photo && (
                <div style={{ marginTop: 12 }}>
                  <strong>Selected:</strong> {form.photo.name}
                </div>
              )}
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

            {/* 🎤 Audio */}
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

            {/* 📹 Video */}
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
