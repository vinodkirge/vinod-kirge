import React, { useState } from 'react'
import Layout from '../components/Layout'

const ChatBot = () => {

const faqData = [
  {
    question: "How do I report a civic issue?",
    answer: "Click the 'Report Issue' button, upload a photo, and describe the problem. Your location will be auto-tagged.",
  },
  {
    question: "How do I earn points?",
    answer: "You earn 1 point for every issue you report. Points help you level up to Silver, Gold, or Diamond user.",
  },
  {
    question: "What happens after I submit a report?",
    answer: "Your report is sent to the appropriate municipal department. You can track its status in 'My Reports'.",
  },
  {
    question: "How can I update or delete a report?",
    answer: "Currently, you cannot delete a report. Contact support if a report was made by mistake.",
  },
  {
    question: "How long does it take to resolve an issue?",
    answer: "Resolution time varies depending on the issue type and workload of the responsible department.",
  },
  {
    question: "Can I submit reports anonymously?",
    answer: "No, you must be logged in to submit reports so that updates can be sent to you.",
  },
  {
    question: "Is my location data safe?",
    answer: "Yes, location data is only used to route your report and is not shared with third parties.",
  },
  {
    question: "Can I report multiple issues at once?",
    answer: "You can submit multiple reports but each must be a separate submission.",
  },
  {
    question: "Can I add more photos to my report after submitting?",
    answer: "Currently, additional photos cannot be added after submission.",
  },
  {
    question: "How do I know if my report was received?",
    answer: "You will receive a confirmation notification once your report is successfully submitted.",
  },
  {
    question: "What if my issue is urgent?",
    answer: "You can mark your report as urgent to prioritize it in the system.",
  },
  {
    question: "How can I contact municipal staff directly?",
    answer: "Use the communication features in your report tracking dashboard to message staff.",
  },
  {
    question: "Are reports verified before action?",
    answer: "Municipal staff review reports for validity before taking action.",
  },
  {
    question: "Can I vote or comment on other users’ reports?",
    answer: "Yes, you can upvote, downvote, and comment to support or provide more information.",
  },
  {
    question: "How do I earn badges like Gold or Diamond?",
    answer: "Badges are awarded when you reach point thresholds: Silver at 10 points, Gold at 50, Diamond at 100.",
  },
  {
    question: "What types of issues can I report?",
    answer: "Common issues include potholes, broken streetlights, trash overflow, graffiti, and more.",
  },
  {
    question: "Can I share my reports on social media?",
    answer: "Yes, there are share buttons on each report to post on platforms like Facebook and Twitter.",
  },
  {
    question: "What if the issue is already reported?",
    answer: "You can add a comment or upvote an existing report to help prioritize it.",
  },
  {
    question: "How often is the data updated?",
    answer: "The dashboard updates in near real-time to reflect new reports and status changes.",
  },
  {
    question: "Can I get email notifications?",
    answer: "Yes, enable notifications in your profile settings to get email updates.",
  },
  {
    question: "Is there a mobile app available?",
    answer: "Currently, the platform is mobile-friendly via browsers; dedicated apps are planned.",
  },
  {
    question: "How do I reset my password?",
    answer: "Use the 'Forgot Password' link on the login page to reset your password via email.",
  },
  {
    question: "Who do I contact for technical support?",
    answer: "Contact the support team via the 'Help' section in your profile dashboard.",
  },
  {
    question: "Can I suggest new features?",
    answer: "Yes, please use the feedback form available in the app to submit your ideas.",
  },
];


  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    setSelected(selected === i ? null : i);
  };

  return (
    <Layout>
   <div
      style={{
        maxWidth: 600,
        margin: "30px auto",
        backgroundColor: "#f9fafb",
        borderRadius: 12,
        padding: 20,
        boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 24 }}>🤖 Help & FAQ</h2>

      {faqData.map((item, i) => (
        <div
          key={i}
          style={{
            marginBottom: 14,
            borderBottom: "1px solid #e5e7eb",
            paddingBottom: 10,
            cursor: "pointer",
          }}
          onClick={() => toggle(i)}
          aria-expanded={selected === i}
          aria-controls={`faq-answer-${i}`}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              toggle(i);
            }
          }}
        >
          <div
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "#1f2937",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>{item.question}</span>
            <span>{selected === i ? "▲" : "▼"}</span>
          </div>
          {selected === i && (
            <p
              id={`faq-answer-${i}`}
              style={{ color: "#4b5563", marginTop: 8 }}
            >
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
    </Layout>
  )
}

export default ChatBot
