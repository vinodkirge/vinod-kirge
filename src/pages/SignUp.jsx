import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";

const SignUp = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      errs.email = "Invalid email address";
    }
    if (!formData.password) errs.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      errs.confirmPassword = "Passwords do not match";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // TODO: Submit data to backend
      alert("Sign Up Successful!");
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
      setErrors({});
    }
  };

  const labelStyle = {
  display: "block",
  marginBottom: 12,
  fontSize: 14,
  fontWeight: "600",
  color: "#374151",
};

const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  fontSize: 14,
  borderRadius: 6,
  border: "1.5px solid #D1D5DB",
  marginTop: 6,
  boxSizing: "border-box",
  outline: "none",
  transition: "border-color 0.3s ease",
};

const errorTextStyle = {
  color: "#DC2626",
  fontSize: 12,
  marginTop: 4,
  fontWeight: "600",
};

  return (
    <Layout>
      <main
      style={{
        backgroundColor: "#F9FAFB",
        minHeight: "100vh",
        paddingTop: 64,
        paddingBottom: 64,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#fff",
          padding: 30,
          borderRadius: 12,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          width: isMobile ? "90%" : 400,
          boxSizing: "border-box",
        }}
        noValidate
      >
         <h2
          style={{
            marginBottom: 24,
            fontSize: 28,
            fontWeight: "700",
            color: "#111827",
            textAlign: "center",
          }}
        >
          CityZen!
        </h2>

        <h2
          style={{
            marginBottom: 22,
            fontSize: 20,
            fontWeight: "500",
            color: "#111827",
            textAlign: "center",
          }}
        >
          Sign-Up
        </h2>

        {/* Name */}
        <label htmlFor="name" style={labelStyle}>
          Name
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ ...inputStyle, borderColor: errors.name ? "#DC2626" : "#D1D5DB" }}
          />
          {errors.name && <p style={errorTextStyle}>{errors.name}</p>}
        </label>

        {/* Email */}
        <label htmlFor="email" style={labelStyle}>
          Email
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ ...inputStyle, borderColor: errors.email ? "#DC2626" : "#D1D5DB" }}
          />
          {errors.email && <p style={errorTextStyle}>{errors.email}</p>}
        </label>

        {/* Password */}
        <label htmlFor="password" style={labelStyle}>
          Password
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ ...inputStyle, borderColor: errors.password ? "#DC2626" : "#D1D5DB" }}
          />
          {errors.password && <p style={errorTextStyle}>{errors.password}</p>}
        </label>

        {/* Confirm Password */}
        <label htmlFor="confirmPassword" style={labelStyle}>
          Confirm Password
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={{
              ...inputStyle,
              borderColor: errors.confirmPassword ? "#DC2626" : "#D1D5DB",
            }}
          />
          {errors.confirmPassword && (
            <p style={errorTextStyle}>{errors.confirmPassword}</p>
          )}
        </label>

        <button
          type="submit"
          style={{
            marginTop: 20,
            width: "100%",
            backgroundColor: "#2563EB",
            color: "#fff",
            fontWeight: "600",
            fontSize: 16,
            padding: "12px 0",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#1E40AF")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#2563EB")}
        >
          Create Account
        </button>
      </form>
    </main>
    </Layout>
  )
}

export default SignUp
