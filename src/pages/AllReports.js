import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const AllReports = () => {

 const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [reports, setReports] = useState([
    {
      id: 1,
      photo:
        "https://images.hindustantimes.com/auto/img/2023/03/16/1600x900/Traffic_jam_1678944991540_1678944991839_1678944991839.jpg",
      description: "Pothole near main intersection causing traffic issues.",
      date: "2025-09-12",
      status: "In Progress",
      upvotes: 3,
      downvotes: 1,
    },
    {
      id: 2,
      photo:
        "https://i.pinimg.com/originals/44/52/d8/4452d89ef83e016c41bbc316784e6175.jpg",
      description: "Streetlight not working near park entrance.",
      date: "2025-09-10",
      status: "Resolved",
      upvotes: 5,
      downvotes: 0,
    },
    {
      id: 3,
      photo:
        "https://thumbs.dreamstime.com/z/poignant-scene-food-waste-overflowing-garbage-bin-filled-discarded-meals-produce-outside-restaurant-dusk-316196638.jpg?w=992",
      description: "Overflowing garbage bin outside grocery market.",
      date: "2025-09-09",
      status: "Pending",
      upvotes: 1,
      downvotes: 2,
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Resolved":
        return "#16A34A";
      case "In Progress":
        return "#F59E0B";
      case "Pending":
      default:
        return "#DC2626";
    }
  };

  const handleVote = (id, type) => {
    setReports((prev) =>
      prev.map((report) =>
        report.id === id
          ? {
              ...report,
              upvotes: type === "up" ? report.upvotes + 1 : report.upvotes,
              downvotes: type === "down" ? report.downvotes + 1 : report.downvotes,
            }
          : report
      )
    );
  };

  const handleShare = (id) => {
    const shareUrl = `https://your-app.com/report/${id}`;
    navigator.clipboard.writeText(shareUrl);
    alert("Link copied to clipboard!");
  };

  const handleComment = (id) => {
    alert(`Open comment modal for report ID: ${id} (not implemented)`);
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
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: 20 }}>
          <h1
            style={{
              fontSize: isMobile ? 28 : 36,
              fontWeight: "700",
              textAlign: "center",
              color: "#111827",
              marginBottom: 40,
            }}
          >
            All Submitted Reports
          </h1>

          {reports.map((report) => (
            <div
              key={report.id}
              style={{
                display: isMobile ? "block" : "flex",
                alignItems: "flex-start",
                backgroundColor: "#fff",
                marginBottom: 24,
                padding: 16,
                borderRadius: 12,
                boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
              }}
            >
              <img
                src={report.photo}
                alt="Reported issue"
                style={{
                  width: isMobile ? "100%" : 180,
                  height: isMobile ? "auto" : 120,
                  objectFit: "cover",
                  borderRadius: 8,
                  marginBottom: isMobile ? 16 : 0,
                  marginRight: isMobile ? 0 : 20,
                }}
              />

              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 16, color: "#374151", marginBottom: 8 }}>
                  {report.description}
                </p>
                <p style={{ fontSize: 14, color: "#6B7280", marginBottom: 4 }}>
                  Date: {report.date}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: getStatusColor(report.status),
                    marginBottom: 12,
                  }}
                >
                  Status: {report.status}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <button
                    onClick={() => handleVote(report.id, "up")}
                    style={{
                      backgroundColor: "#e0f7fa",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: 6,
                      cursor: "pointer",
                    }}
                  >
                    🔼 Upvote ({report.upvotes})
                  </button>

                  <button
                    onClick={() => handleVote(report.id, "down")}
                    style={{
                      backgroundColor: "#ffebee",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: 6,
                      cursor: "pointer",
                    }}
                  >
                    🔽 Downvote ({report.downvotes})
                  </button>

                  <button
                    onClick={() => handleComment(report.id)}
                    style={{
                      backgroundColor: "#f3e5f5",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: 6,
                      cursor: "pointer",
                    }}
                  >
                    💬 Comment
                  </button>

                  <button
                    onClick={() => handleShare(report.id)}
                    style={{
                      backgroundColor: "#e8f5e9",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: 6,
                      cursor: "pointer",
                    }}
                  >
                    🔗 Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  )
}

export default AllReports
