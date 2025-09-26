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
    location: null, // { lat, lon }
    locationName: "", // Human-readable address
  });

  const cameraInputRef = useRef(null);
  const galleryInputRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchLocationName = async (lat, lon) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
      );
      const data = await res.json();
      return data.display_name || "Location name not found";
    } catch (err) {
      console.error("Reverse geocoding failed:", err);
      return "Failed to retrieve location name";
    }
  };

  const getLocationAndSave = async () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        alert("Geolocation not supported.");
        reject("No geolocation");
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const name = await fetchLocationName(latitude, longitude);

          setForm((prev) => ({
            ...prev,
            location: { latitude, longitude },
            locationName: name,
          }));

          resolve();
        },
        (error) => {
          alert("Please allow location access.");
          reject(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    });
  };

  const handleChange = async (e) => {
    const { name, files, value } = e.target;
    if (name === "photo") {
      const selectedFile = files[0];

      if (!selectedFile) return;

      // Get location BEFORE setting photo
      try {
        await getLocationAndSave();
      } catch (err) {
        console.warn("Location fetch failed or denied.");
      }

      setForm((prev) => ({
        ...prev,
        photo: selectedFile,
      }));
    } else if (name === "audio" || name === "video") {
      setForm((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
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
            {/* 📷 Photo Input */}
            <div style={{ marginBottom: 24 }}>
              <label style={labelStyle}>Upload Photo of Issue</label>

              <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
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

              {/* Hidden Camera and Gallery Inputs */}
              <input
                ref={cameraInputRef}
                type="file"
                name="photo"
                accept="image/*"
                capture="environment"
                onChange={handleChange}
                style={{ display: "none" }}
              />

              <input
                ref={galleryInputRef}
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleChange}
                style={{ display: "none" }}
              />

              {/* Show photo preview */}
              {form.photo && (
                <div style={{ marginTop: 12 }}>
                  <strong>Selected:</strong> {form.photo.name}
                  <br />
                  {form.locationName && (
                    <div style={{ marginTop: 8, color: "#4B5563" }}>
                      📍 Location Detected: <em>{form.locationName}</em>
                    </div>
                  )}
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

            {/* Submit */}
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
