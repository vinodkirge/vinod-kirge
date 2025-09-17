import React, { useState } from "react";
import Layout from "../components/Layout";

const CommunityIssueCard = ({ issue }) => {
  const [upvotes, setUpvotes] = useState(issue.upvotes || 0);
  const [downvotes, setDownvotes] = useState(issue.downvotes || 0);
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState(issue.comments || []);

  const handleUpvote = () => setUpvotes(upvotes + 1);
  const handleDownvote = () => setDownvotes(downvotes + 1);

  const handleComment = () => {
    if (commentInput.trim()) {
      setComments([...comments, commentInput.trim()]);
      setCommentInput("");
    }
  };

  return (
  <Layout>
      <div
      style={{
        maxWidth: 700,
        margin: "20px auto",
        backgroundColor: "#fff",
        borderRadius: 12,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        padding: 20,
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      {/* Title */}
      <h2
        style={{
          fontSize: 20,
          fontWeight: "700",
          color: "#111827",
          marginBottom: 12,
        }}
      >
        {issue.title}
      </h2>

      {/* Image */}
      <img
        src={issue.photo}
        alt="Reported issue"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: 10,
          objectFit: "cover",
          marginBottom: 16,
        }}
      />

      {/* Address */}
      <p style={{ color: "#4B5563", marginBottom: 16 }}>
        📍 <strong>Address:</strong> {issue.address}
      </p>

      {/* Voting */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 16,
          marginBottom: 16,
        }}
      >
        <button
          onClick={handleUpvote}
          style={{
            backgroundColor: "#22C55E",
            color: "#fff",
            border: "none",
            padding: "6px 12px",
            borderRadius: 6,
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          👍 Upvote ({upvotes})
        </button>
        <button
          onClick={handleDownvote}
          style={{
            backgroundColor: "#EF4444",
            color: "#fff",
            border: "none",
            padding: "6px 12px",
            borderRadius: 6,
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          👎 Downvote ({downvotes})
        </button>
      </div>

      {/* Join NGO Button */}
      <button
        style={{
          backgroundColor: "#3B82F6",
          color: "#fff",
          border: "none",
          padding: "10px 16px",
          borderRadius: 6,
          cursor: "pointer",
          fontWeight: "600",
          marginBottom: 24,
          display: "block",
        }}
      >
        🙋 Join Community to Solve
      </button>

      {/* Comment Input */}
      <div style={{ marginBottom: 16 }}>
        <input
          type="text"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          placeholder="Write a comment..."
          style={{
            width: "100%",
            padding: "8px 12px",
            borderRadius: 6,
            border: "1px solid #d1d5db",
            marginBottom: 8,
          }}
        />
        <button
          onClick={handleComment}
          style={{
            backgroundColor: "#10B981",
            color: "#fff",
            border: "none",
            padding: "8px 16px",
            borderRadius: 6,
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          💬 Post Comment
        </button>
      </div>

      {/* Comments Section */}
      <div>
        <h4 style={{ fontSize: 16, marginBottom: 8, color: "#1F2937" }}>
          Comments ({comments.length})
        </h4>
        {comments.length === 0 ? (
          <p style={{ color: "#9CA3AF" }}>No comments yet.</p>
        ) : (
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {comments.map((c, index) => (
              <li
                key={index}
                style={{
                  background: "#F3F4F6",
                  padding: 8,
                  borderRadius: 6,
                  marginBottom: 6,
                  fontSize: 14,
                }}
              >
                {c}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </Layout>
  );
};

// Sample usage
const issueExample = {
  title: "Pothole near dypcoe",
  photo:
    "https://images.pexels.com/photos/6325955/pexels-photo-6325955.jpeg?auto=compress&cs=tinysrgb&w=600",
  address: "Sector 12, Green Park, New Delhi",
  upvotes: 5,
  downvotes: 2,
  comments: ["This needs urgent fixing!", "My car tire burst here!"],
};

const CommunityIssueSection = () => {
  return <CommunityIssueCard issue={issueExample} />;
};

export default CommunityIssueSection;
