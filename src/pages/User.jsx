import React from "react";
import Layout from "../components/Layout";

const getUserLevel = (points) => {
  if (points >= 50) return "Diamond";
  if (points >= 20) return "Gold";
  if (points >= 10) return "Silver";
  return "Normal";
};

const getLevelColor = (level) => {
  switch (level) {
    case "Diamond":
      return "#7C3AED"; // purple
    case "Gold":
      return "#FBBF24"; // gold yellow
    case "Silver":
      return "#6B7280"; // gray
    default:
      return "#374151"; // dark gray
  }
};

const UserProfile = ({ user }) => {
  const { name, photo, email, mobile, location, points, reports } = user;

  const level = getUserLevel(points);

  return (
    <Layout>
    <div
      style={{
        maxWidth: 450,
        margin: "30px auto",
        padding: 20,
        borderRadius: 16,
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#111827",
      }}
    >
      {/* Profile Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          marginBottom: 20,
          flexWrap: "wrap",
        }}
      >
        <img
          src={photo}
          alt={`${name}'s profile`}
          style={{
            width: 90,
            height: 90,
            borderRadius: "50%",
            objectFit: "cover",
            border: `3px solid ${getLevelColor(level)}`,
            flexShrink: 0,
          }}
        />
        <div style={{ flex: 1, minWidth: 180 }}>
          <h2
            style={{
              fontSize: 24,
              margin: 0,
              marginBottom: 6,
              fontWeight: "700",
            }}
          >
            {name}
          </h2>
          <p style={{ margin: 0, color: "#6B7280", fontSize: 14 }}>
            {email}
          </p>
          <p style={{ margin: 0, color: "#6B7280", fontSize: 14 }}>
            📞 {mobile}
          </p>
          <p style={{ margin: 0, color: "#6B7280", fontSize: 14 }}>
            📍 {location}
          </p>
        </div>
      </div>

      {/* Points & Level */}
      <div
        style={{
          backgroundColor: "#F3F4F6",
          borderRadius: 12,
          padding: 16,
          textAlign: "center",
          marginBottom: 20,
          boxShadow: `0 0 8px ${getLevelColor(level)}44`,
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 16,
            fontWeight: "600",
            color: "#374151",
          }}
        >
          Points Earned:{" "}
          <span
            style={{
              fontWeight: "700",
              fontSize: 22,
              color: getLevelColor(level),
            }}
          >
            {points}
          </span>
        </p>
        <p
          style={{
            margin: 0,
            marginTop: 8,
            fontSize: 18,
            fontWeight: "700",
            color: getLevelColor(level),
          }}
        >
          Level: {level}
        </p>
      </div>

      {/* How points earned */}
      <div>
        <h3
          style={{
            fontSize: 18,
            fontWeight: "700",
            marginBottom: 12,
            color: "#111827",
            borderBottom: "2px solid #E5E7EB",
            paddingBottom: 6,
          }}
        >
          How You Earn Points
        </h3>
        <ul style={{ paddingLeft: 20, color: "#374151", fontSize: 15 }}>
          <li>✅ 1 point per issue reported</li>
          <li>⭐ Earn badges and move to Silver, Gold, Diamond levels</li>
          <li>🎉 More points unlock special rewards (coming soon!)</li>
        </ul>
      </div>

      {/* List of reports submitted */}
      <div style={{ marginTop: 30 }}>
        <h3
          style={{
            fontSize: 18,
            fontWeight: "700",
            marginBottom: 12,
            color: "#111827",
            borderBottom: "2px solid #E5E7EB",
            paddingBottom: 6,
          }}
        >
          Your Reports ({reports.length})
        </h3>
        {reports.length === 0 && (
          <p style={{ color: "#6B7280", fontStyle: "italic" }}>
            You haven't submitted any reports yet.
          </p>
        )}
        <ul style={{ paddingLeft: 20, color: "#374151", fontSize: 15 }}>
          {reports.map((r, i) => (
            <li key={i} style={{ marginBottom: 6 }}>
              • {r}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </Layout>
  );
};



// Example usage with sample data:

const sampleUser = {
  name: "Vinod Kirge",
  photo:
    "https://randomuser.me/api/portraits/men/75.jpg",
  email: "vinod.kirge@example.com",
  mobile: "+91 9876543210",
  location: "Pune, India",
  points: 14, // earned points
  reports: [
    "Pothole near main street",
    "Streetlight not working in park",
    "Garbage overflow near market",
    "Broken bench in community garden",
  ],
};



export default function App() {
  return <UserProfile user={sampleUser} />;
}

