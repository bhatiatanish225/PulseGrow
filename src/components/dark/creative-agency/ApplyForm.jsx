import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const ApplyForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitApplicationForm = async (data) => {
    try {
      setLoading(true);
      console.log("Application Form Data:", data);

      // EmailJS integration
      emailjs
        .send(
          "service_48wtxge", // Your service ID
          "template_dn1sato", // Your template ID
          {
            from_name: data.firstname + " " + data.lastname, // Full name
            from_email: data.email, // User email
            from_phone: data.phoneNo, // User phone number
            from_college: data.collegename, // College name
            from_branch: data.branch, // Branch
            from_cgpa: data.cgpa, // CGPA
            from_passingyear: data.passingyear, // Passing year
            from_skills: data.skills, // Skills
            from_role: data.role, // Role
            to_email: "pulsegroww@gmail.com", // Destination email address
            subject: "Job Application", // Subject of the email
            message: `Dear Pulse Grow, \n\nI am applying for the ${data.role} role. Below are my details:\n\nName: ${data.firstname} ${data.lastname}\nEmail: ${data.email}\nPhone: ${data.phoneNo}\nCollege: ${data.collegename}\nBranch: ${data.branch}\nCGPA: ${data.cgpa}\nPassing Year: ${data.passingyear}\nSkills: ${data.skills}\n\nPlease find my application attached.` // Message body
          },
          "eomuFLsdpwSxvHZ2s" // Your public key
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you for your application! We will get back to you soon.");
            reset({
              firstname: "",
              lastname: "",
              email: "",
              phoneNo: "",
              collegename: "",
              branch: "",
              cgpa: "",
              passingyear: "",
              skills: "",
              role: "",
              resume: null, // Reset the resume field
            });
          },
          (error) => {
            setLoading(false);
            console.error("Error sending email:", error);
            alert("Something went wrong. Please try again.");
          }
        );
    } catch (error) {
      setLoading(false);
      console.error("Error:", error.message);
      alert("There was an error. Please try again.");
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstname: "",
        lastname: "",
        email: "",
        phoneNo: "",
        collegename: "",
        branch: "",
        cgpa: "",
        passingyear: "",
        skills: "",
        role: "",
        resume: null,
      });
    }
  }, [reset, isSubmitSuccessful]);

  const inputStyles = {
    background: "#ffffff",
    color: "#333",
    border: "1px solid #ccc",
    padding: "12px",
    borderRadius: "8px",
    boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    width: "100%",
  };

  const buttonStyle = {
    background: "linear-gradient(145deg, #ffa726, #ff9800)",
    color: "#fff",
    padding: "12px 20px",
    border: "none",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(255, 153, 51, 0.6)",
    cursor: loading ? "not-allowed" : "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    marginTop: "20px",
    height: "50px", // Ensure fixed button height
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        background: "#f9f9f9",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        width: "100%",
        maxWidth: "600px",
        margin: "auto",
        color: "#333",
        overflowY: "auto", // Allow scrolling only in the form container
        maxHeight: "80vh", // Prevent page scroll, ensure container is scrollable within view
      }}
      onSubmit={handleSubmit(submitApplicationForm)}
    >
      {/* Form Fields */}
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ flex: 1 }}>
          <label htmlFor="firstname" style={{ fontWeight: "600", color: "#333", marginBottom: "8px" }}>
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            placeholder="Enter first name"
            style={inputStyles}
            {...register("firstname", { required: true })}
          />
          {errors.firstname && <span style={{ fontSize: "12px", color: "red" }}>Please enter your first name.</span>}
        </div>
        <div style={{ flex: 1 }}>
          <label htmlFor="lastname" style={{ fontWeight: "600", color: "#333", marginBottom: "8px" }}>
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            placeholder="Enter last name"
            style={inputStyles}
            {...register("lastname")}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" style={{ fontWeight: "600", color: "#333", marginBottom: "8px" }}>
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter email address"
          style={inputStyles}
          {...register("email", { required: true })}
        />
        {errors.email && <span style={{ fontSize: "12px", color: "red" }}>Please enter your email address.</span>}
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor="phoneNo" style={{ fontWeight: "600", color: "#333", marginBottom: "8px" }}>
          Phone Number
        </label>
        <input
          type="number"
          id="phoneNo"
          placeholder="+91 12345 67891"
          style={inputStyles}
          {...register("phoneNo", { required: "Please enter your phone number." })}
        />
        {errors.phoneNo && <span style={{ fontSize: "12px", color: "red" }}>{errors.phoneNo.message}</span>}
      </div>

      {/* College Name */}
      <div>
        <label htmlFor="collegename" style={{ fontWeight: "600", color: "#333", marginBottom: "8px" }}>
          College Name
        </label>
        <input
          type="text"
          id="collegename"
          placeholder="Enter college name"
          style={inputStyles}
          {...register("collegename", { required: true })}
        />
        {errors.collegename && <span style={{ fontSize: "12px", color: "red" }}>Please enter your college name.</span>}
      </div>

      {/* Branch */}
      <div>
        <label htmlFor="branch" style={{ fontWeight: "600", color: "#333", marginBottom: "8px" }}>
          Branch
        </label>
        <input
          type="text"
          id="branch"
          placeholder="Enter your branch"
          style={inputStyles}
          {...register("branch", { required: true })}
        />
        {errors.branch && <span style={{ fontSize: "12px", color: "red" }}>Please enter your branch.</span>}
      </div>

      {/* CGPA */}
      <div>
        <label htmlFor="cgpa" style={{ fontWeight: "600", color: "#333", marginBottom: "8px" }}>
          CGPA
        </label>
        <input
          type="text"
          id="cgpa"
          placeholder="Enter your CGPA"
          style={inputStyles}
          {...register("cgpa", { required: true })}
        />
        {errors.cgpa && <span style={{ fontSize: "12px", color: "red" }}>Please enter your CGPA.</span>}
      </div>

      {/* Passing Year */}
      <div>
        <label htmlFor="passingyear" style={{ fontWeight: "600", color: "#333", marginBottom: "8px" }}>
          Passing Year
        </label>
        <input
          type="text"
          id="passingyear"
          placeholder="Enter passing year"
          style={inputStyles}
          {...register("passingyear", { required: true })}
        />
        {errors.passingyear && <span style={{ fontSize: "12px", color: "red" }}>Please enter your passing year.</span>}
      </div>

      {/* Skills */}
      <div>
        <label htmlFor="skills" style={{ fontWeight: "600", color: "#333", marginBottom: "8px" }}>
          Skills
        </label>
        <input
          type="text"
          id="skills"
          placeholder="Enter your skills"
          style={inputStyles}
          {...register("skills", { required: true })}
        />
        {errors.skills && <span style={{ fontSize: "12px", color: "red" }}>Please enter your skills.</span>}
      </div>

      {/* Role */}
      <div>
        <label htmlFor="role" style={{ fontWeight: "600", color: "#333", marginBottom: "8px" }}>
          Role
        </label>
        <input
          type="text"
          id="role"
          placeholder="Enter role"
          style={inputStyles}
          {...register("role", { required: true })}
        />
        {errors.role && <span style={{ fontSize: "12px", color: "red" }}>Please enter your role.</span>}
      </div>

      {/* Resume Upload */}
      <div>
        <label htmlFor="resume" style={{ fontWeight: "600", color: "#333", marginBottom: "8px" }}>
          Upload Resume
        </label>
        <input
          type="file"
          id="resume"
          accept=".pdf,.doc,.docx,.txt"
          style={inputStyles}
          {...register("resume", { required: true })}
        />
        {errors.resume && <span style={{ fontSize: "12px", color: "red" }}>Please upload your resume.</span>}
      </div>

      {/* Submit Button */}
      <button type="submit" style={buttonStyle} disabled={loading}>
        {loading ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
};

export default ApplyForm;
