
import { useEffect, useState } from 'react';
import Layout from '../components/Layout'

const Home = () => {
     const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
     // Update isMobile on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Common container style
  const containerStyle = {
    maxWidth: 1280,
    margin: "0 auto",
    paddingLeft: 16,
    paddingRight: 16,
  };

  const FeatureCard = ({ icon, title, description }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: 24,
        borderRadius: 12,
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        cursor: "default",
        transition: "box-shadow 0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 10px 15px rgba(0,0,0,0.15)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)")}
    >
      <div style={{ marginBottom: 16 }}>{icon}</div>
      <h3 style={{ fontSize: 20, fontWeight: "600", marginBottom: 8, color: "#111827" }}>{title}</h3>
      <p style={{ color: "#4B5563" }}>{description}</p>
    </div>
  );
};

const BenefitCard = ({ title, description }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: 32,
        borderRadius: 12,
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      <h4 style={{ fontSize: 24, fontWeight: "600", marginBottom: 16, color: "#6366F1" }}>{title}</h4>
      <p style={{ color: "#4B5563", fontSize: 18 }}>{description}</p>
    </div>
  );
};

const StepCard = ({ step, title, description }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: 24,
        borderRadius: 12,
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: 32,
          fontWeight: "700",
          color: "#4F46E5",
          marginBottom: 12,
        }}
      >
        Step {step}
      </div>
      <h4
        style={{
          fontSize: 20,
          fontWeight: "600",
          color: "#111827",
          marginBottom: 8,
        }}
      >
        {title}
      </h4>
      <p style={{ color: "#4B5563" }}>{description}</p>
    </div>
  );
};



  return (
   <Layout>
    <main style={{ backgroundColor: "#F9FAFB", minHeight: "100vh", flexGrow: 1 }}>
      {/* Hero Section */}
      <section
        style={{
          display: "flex",
          flexDirection: isMobile ? "column-reverse" : "row",
          alignItems: "center",
          paddingTop: isMobile ? 64 : 96,
          paddingBottom: isMobile ? 64 : 96,
          ...containerStyle,
        }}
      >
        <div
          style={{
            width: isMobile ? "100%" : "50%",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? 28 : 40,
              fontWeight: "800",
              color: "#111827",
              marginBottom: 24,
              lineHeight: 1.2,
            }}
          >
            Empower Citizens to Report Civic Issues Instantly
          </h1>
          <p
            style={{
              color: "#4B5563",
              marginBottom: 32,
              fontSize: isMobile ? 16 : 20,
              maxWidth: 450,
              marginLeft: isMobile ? "auto" : 0,
              marginRight: isMobile ? "auto" : 0,
            }}
          >
            Report potholes, malfunctioning streetlights, overflowing trash bins,
            and more — with photos, voice notes, and automatic location tagging.
            Track your reports and see real-time updates on your city’s progress.
          </p>
          <div style={{ display: "flex", justifyContent: isMobile ? "center" : "flex-start", gap: 16 }}>
            <a
              href="/register"
              style={{
                backgroundColor: "#4F46E5",
                color: "white",
                padding: "12px 28px",
                borderRadius: 6,
                fontSize: isMobile ? 16 : 18,
                fontWeight: "600",
                textDecoration: "none",
                display: "inline-block",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4338CA")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4F46E5")}
            >
              Get Started
            </a>
            <a
              href="#features"
              style={{
                backgroundColor: "#E5E7EB",
                color: "#374151",
                padding: "12px 28px",
                borderRadius: 6,
                fontSize: isMobile ? 16 : 18,
                fontWeight: "600",
                textDecoration: "none",
                display: "inline-block",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#D1D5DB")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#E5E7EB")}
            >
              Learn More
            </a>
          </div>
        </div>
        <div
          style={{
            width: isMobile ? "100%" : "50%",
            marginBottom: isMobile ? 48 : 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="https://247drainageuk.com/app/uploads/2024/03/06-How-often-should-manholes-be-inspected-1536x861.jpg"
            alt="City street maintenance and civic issues"
            style={{ borderRadius: 12, boxShadow: "0 10px 15px rgba(0,0,0,0.1)", maxWidth: "100%", height: "auto" }}
          />
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        style={{
          backgroundColor: "white",
          paddingTop: 64,
          paddingBottom: 64,
          ...containerStyle,
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? 28 : 36,
            fontWeight: "700",
            color: "#111827",
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          Key Features
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: 40,
            maxWidth: 960,
            margin: "0 auto",
          }}
        >
          <FeatureCard
            icon={(
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: 48, width: 48, color: "#6366F1" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276a2 2 0 010 3.552L15 14m0 0v6m0-6H9m6 0v6m-6-6v6m6-6H9" />
              </svg>
            )}
            title="Real-Time Reporting"
            description="Instantly submit issues with photos, voice/text, and automatic location tagging for accurate context."
          />
          <FeatureCard
            icon={(
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: 48, width: 48, color: "#6366F1" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6a3 3 0 013-3h3l3 3v6m-3 0v4m0 0H9a3 3 0 01-3-3v-3" />
              </svg>
            )}
            title="Smart Routing"
            description="Automatically route reports to the right department based on issue type and location."
          />
          <FeatureCard
            icon={(
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: 48, width: 48, color: "#6366F1" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M9 21V9m6 12V9" />
              </svg>
            )}
            title="Track & Notify"
            description="Follow your reports through confirmation, acknowledgment, and resolution with real-time notifications."
          />
        </div>
      </section>

      {/* Live Map Section */}
     <section
  id="how-it-works"
  style={{
    backgroundColor: "#F3F4F6",
    paddingTop: 64,
    paddingBottom: 64,
  }}
>
  <div style={{ maxWidth: 1280, margin: "0 auto", paddingLeft: 16, paddingRight: 16 }}>
    <h2
      style={{
        fontSize: isMobile ? 28 : 36,
        fontWeight: "700",
        color: "#111827",
        marginBottom: 40,
        textAlign: "center",
      }}
    >
      How It Works
    </h2>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
        gap: 40,
      }}
    >
      <StepCard
        step="1"
        title="Capture the Issue"
        description="Open the app and take a photo or record a voice note. Your location will be added automatically."
      />
      <StepCard
        step="2"
        title="Submit Report"
        description="Choose the issue category (like roads, lights, sanitation) and submit it directly to your local authority."
      />
      <StepCard
        step="3"
        title="Track Progress"
        description="Receive notifications at every stage: submission, acknowledgment, and resolution — all in one place."
      />
    </div>
  </div>
</section>

      {/* Benefits Section */}
      <section style={{ ...containerStyle, maxWidth: 960, paddingTop: 64, paddingBottom: 64 }}>
        <h2
          style={{
            fontSize: isMobile ? 28 : 36,
            fontWeight: "700",
            color: "#111827",
            marginBottom: 40,
            textAlign: "center",
          }}
        >
          Why It Matters
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: 48,
          }}
        >
          <BenefitCard
            title="For Citizens"
            description="Empower yourself by reporting issues easily and stay informed on the progress. Your voice helps create safer, cleaner neighborhoods."
          />
          <BenefitCard
            title="For Local Governments"
            description="Streamline issue management with automated routing and real-time tracking to improve efficiency, transparency, and citizen trust."
          />
        </div>
      </section>

      {/* Final Call to Action */}
      <section
        style={{
          backgroundColor: "#4F46E5",
          paddingTop: 45,
          paddingBottom: 45,
          textAlign: "center",
          color: "white",
        }}
      >
        <h3
          style={{
            fontSize: isMobile ? 28 : 36,
            fontWeight: "700",
            marginBottom: 24,
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          Ready to Make a Difference in Your Community?
        </h3>
        <a
          href="/register"
          style={{
            backgroundColor: "white",
            color: "#4F46E5",
            fontWeight: "600",
            padding: "16px 40px",
            borderRadius: 8,
            fontSize: isMobile ? 18 : 20,
            textDecoration: "none",
            display: "inline-block",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#EDE9FE")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
        >
          Get Started Now
        </a>
      </section>
    </main>



   </Layout>
  )
}

export default Home
