import React, { useEffect, useMemo, useState } from "react";
import Layout from '../components/Layout'

const PastReports = () => {

  
const sampleReports = [
  {
    id: 1,
    photo:
      "https://images.hindustantimes.com/auto/img/2023/03/16/1600x900/Traffic_jam_1678944991540_1678944991839_1678944991839.jpg",
    description: "Fixed pothole at India Gate",
    date: "2025-09-10",
    rating: 4,
    feedback: "",
    status: "Resolved",
  },
  {
    id: 2,
    photo:
      "https://i.pinimg.com/originals/44/52/d8/4452d89ef83e016c41bbc316784e6175.jpg",
    description: "Streetlight repaired near park",
    date: "2025-09-01",
    rating: 5,
    feedback: "",
    status: "Resolved",
  },
  {
    id: 3,
    photo:
      "https://thumbs.dreamstime.com/z/poignant-scene-food-waste-overflowing-garbage-bin-filled-discarded-meals-produce-outside-restaurant-dusk-316196638.jpg?w=992",
    description: "Garbage cleaned near market",
    date: "2025-08-15",
    rating: 3,
    feedback: "",
    status: "Resolved",
  },
];


  const [reports, setReports] = useState(sampleReports);
  const [filter, setFilter] = useState("monthly");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle window resize to trigger re-render
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredReports = useMemo(() => {
    const now = new Date();
    return reports.filter((report) => {
      const reportDate = new Date(report.date);
      const diffDays = (now - reportDate) / (1000 * 60 * 60 * 24);

      if (filter === "weekly") return diffDays <= 7;
      if (filter === "monthly") return diffDays <= 30;
      if (filter === "yearly") return diffDays <= 365;
      return true;
    });
  }, [reports, filter]);

  const handleFeedbackChange = (id, value) => {
    setReports((prev) =>
      prev.map((r) => (r.id === id ? { ...r, feedback: value } : r))
    );
  };

  const handleRatingChange = (id, value) => {
    setReports((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, rating: parseInt(value, 10) } : r
      )
    );
  };

  // Styles for filter buttons
  const buttonStyle = (active) => ({
    padding: "10px 20px",
    border: "none",
    borderRadius: 6,
    marginRight: 12,
    backgroundColor: active ? "#2563EB" : "#E0E7FF",
    color: active ? "white" : "#2563EB",
    cursor: "pointer",
    fontWeight: active ? "600" : "500",
    transition: "background-color 0.3s ease",
  });

  // Responsive flex direction based on width
  const isMobile = windowWidth < 768;

  return (
    <Layout>
      <div
      style={{
        padding: 20,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        maxWidth: 900,
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: isMobile ? 24 : 32,
          marginBottom: 24,
          color: "#1E293B",
        }}
      >
        Resolved Reports with Feedback
      </h2>

      {/* Filter Buttons */}
      <div
        style={{
          textAlign: "center",
          marginBottom: 30,
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <button
          onClick={() => setFilter("weekly")}
          style={buttonStyle(filter === "weekly")}
        >
          Weekly
        </button>
        <button
          onClick={() => setFilter("monthly")}
          style={buttonStyle(filter === "monthly")}
        >
          Monthly
        </button>
        <button
          onClick={() => setFilter("yearly")}
          style={buttonStyle(filter === "yearly")}
        >
          Yearly
        </button>
      </div>

      {filteredReports.length === 0 ? (
        <p style={{ textAlign: "center", color: "#64748B" }}>
          No resolved reports in this time range.
        </p>
      ) : (
        filteredReports.map((report) => (
          <div
            key={report.id}
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              backgroundColor: "#FFFFFF",
              borderRadius: 12,
              padding: 16,
              marginBottom: 24,
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              gap: 16,
            }}
          >
            {/* Photo */}
            <img
              src={report.photo}
              alt="Reported issue"
              style={{
                width: isMobile ? "100%" : 220,
                height: isMobile ? "auto" : 140,
                borderRadius: 10,
                objectFit: "cover",
                flexShrink: 0,
              }}
            />

            {/* Details */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: isMobile ? 16 : 18,
                    fontWeight: "700",
                    marginBottom: 6,
                    color: "#0F172A",
                  }}
                >
                  {report.description}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    color: "#64748B",
                    marginBottom: 12,
                    userSelect: "none",
                  }}
                >
                  Date Resolved: {report.date}
                </p>

                {/* Rating */}
                <label
                  htmlFor={`rating-${report.id}`}
                  style={{ fontSize: 14, fontWeight: 600, color: "#334155" }}
                >
                  ⭐ Rating:
                  <select
                    id={`rating-${report.id}`}
                    value={report.rating}
                    onChange={(e) =>
                      handleRatingChange(report.id, e.target.value)
                    }
                    style={{
                      marginLeft: 8,
                      padding: "6px 10px",
                      borderRadius: 6,
                      border: "1px solid #CBD5E1",
                      fontSize: 14,
                      cursor: "pointer",
                    }}
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              {/* Feedback */}
              <div style={{ marginTop: 16 }}>
                <label
                  htmlFor={`feedback-${report.id}`}
                  style={{ fontSize: 14, fontWeight: 600, color: "#334155" }}
                >
                  ✍️ Feedback:
                </label>
                <input
                  id={`feedback-${report.id}`}
                  type="text"
                  placeholder="Write your feedback..."
                  value={report.feedback}
                  onChange={(e) =>
                    handleFeedbackChange(report.id, e.target.value)
                  }
                  style={{
                    width: "100%",
                    marginTop: 6,
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: "1px solid #CBD5E1",
                    fontSize: 14,
                    boxSizing: "border-box",
                  }}
                />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
    </Layout>
  )
}

export default PastReports
