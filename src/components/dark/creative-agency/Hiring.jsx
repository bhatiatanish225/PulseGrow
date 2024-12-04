import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import ApplyForm from "./ApplyForm";

const RotatingSphere = () => {
  return (
    <mesh rotation={[90, 0, 20]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#ff4500"
        emissive="#ff8c00"
        emissiveIntensity={0.5}
        wireframe
      />
    </mesh>
  );
};

const Hiring = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowHeader(true), 500);
    setTimeout(() => setShowContent(true), 1000);
  }, []);

  const styles = {
    page: {
      fontFamily: `'Arial', sans-serif`,
      padding: "20px",
      background: "linear-gradient(to bottom, #000000, #1c1c1c)",
      minHeight: "100vh",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      position: "relative",
    },
    contentWrapper: {
      position: "relative",
      zIndex: 2,
    },
    header: {
      opacity: showHeader ? 1 : 0,
      transform: showHeader ? "translateY(0)" : "translateY(-50px)",
      transition: "opacity 1s ease, transform 1s ease",
      textAlign: "center",
      marginBottom: "20px",
    },
    card: {
      width: "80%",
      maxWidth: "600px",
      padding: "30px",
      background: "rgba(18, 18, 18, 0.5)",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.1)",
      borderRadius: "10px",
      transform: showContent ? "scale(1)" : "scale(0.9)",
      transition: "transform 1s ease, opacity 1s ease",
      opacity: showContent ? 1 : 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: "#e0e0e0",
      position: "relative",
      zIndex: 2,
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    },
    button: {
      marginTop: "20px",
      padding: "15px 30px",
      fontSize: "1rem",
      background: "linear-gradient(145deg, #ff8c00, #ff4500)",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      boxShadow: "0 4px 8px rgba(255, 69, 0, 0.5)",
    },
    canvasWrapper: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 1,
    },
    modal: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, 0.8)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 3,
    },
    modalContent: {
      background: "#1c1c1c",
      borderRadius: "10px",
      padding: "20px",
      maxWidth: "600px",
      width: "90%",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
      position: "relative",
    },
    closeButton: {
      position: "absolute",
      top: "10px",
      right: "10px",
      background: "none",
      border: "none",
      color: "#fff",
      fontSize: "1.5rem",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.page}>
      {/* Background Canvas */}
      <div style={styles.canvasWrapper}>
        <Canvas>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} />
          <RotatingSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
        </Canvas>
      </div>

      {/* Main Content */}
      <div style={styles.contentWrapper}>
        <header style={styles.header}>
          <h1 style={{ fontSize: "2.5rem", color: "#ff4500" }}>🚀 We Are Hiring Interns!</h1>
          <p style={{ fontSize: "1.2rem", fontStyle: "italic", color: "#a0a0a0" }}>
            "Your journey to greatness starts with a single step. Take it with us!"
          </p>
        </header>

        <div style={styles.card}>
          <h2 style={{ marginBottom: "15px" }}>Why Join Us?</h2>
          <ul style={{ listStyle: "none", padding: 0, textAlign: "left", width: "100%" }}>
            <li style={{ marginBottom: "10px" }}>🌟 Gain hands-on experience in real-world projects.</li>
            <li style={{ marginBottom: "10px" }}>📚 Learn from industry experts and mentors.</li>
            <li style={{ marginBottom: "10px" }}>🤝 Be part of a dynamic and innovative team.</li>
            <li>📈 Build skills that will accelerate your career.</li>
          </ul>
          <button
            style={styles.button}
            onClick={() => setIsModalOpen(true)}
          >
            Apply Here
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <button
              style={styles.closeButton}
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>
            <ApplyForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hiring;
