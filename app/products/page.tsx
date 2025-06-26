"use client";
import React, { useState } from "react";

const products = [
  { name: "Accumulators", img: "accumulators.jpg" },
  { name: "Air Breather", img: "Air_breather.jpg" },
  { name: "Bell Housing", img: "bell_housing.jpg" },
  { name: "Level Indicators", img: "Level_Indicators.png" },
  { name: "Magnetic sticks", img: "Magnetic_sticks.jpg" },
  { name: "Power units", img: "Power_units.jpg" },
  { name: "Ball Valves", img: "Ball_Valves.jpg" },
  { name: "Clamps (Hydraulic pipes)", img: "Clamps.jpg" },
  { name: "Cylinders Hydraulics and Pneumatics", img: "Cylinders.jpg" },
  { name: "Direction control valves", img: "control_valves.jpg" },
  { name: "De watering Pumps (Submergible)", img: "Dewatering_Pumps.jpg" },
  { name: "Electric Motors", img: "Electric_Motors.jpg" },
  { name: "Filters", img: "Filters.jpg" },
  { name: "Fittings", img: "fittings.jpg" },
  { name: "Flow Meters", img: "Flow_Meters.png" },
  { name: "Flow control Valves", img: "Flow_control_Valve.jpg" },
  { name: "Flushing Systems", img: "Flushing-system.png" },
  { name: "Gear boxes", img: "Gear_boxes.jpg" },
  { name: "Gauges Hydraulics and Pneumatics", img: "gauges.jpg" },
  { name: "Hoses", img: "Hoses.jpg" },
  { name: "Hose reels", img: "Hose_reels.jpg" },
  { name: "High pressure Pumps", img: "High-pressure-Pumps.jpg" },
  { name: "Hydraulic Cylinders, Valves, Pumps, Motors, Gauges and filters", img: "hydraulic-parts.jpg" },
  { name: "Joysticks", img: "joysticks.jpg" },
  { name: "Lubrication systems and Pumps", img: "lubrication-systems.jpg" },
  { name: "Manifolds", img: "manifolds.jpg" },
  { name: "Motors", img: "motors.jpg" },
  { name: "Electrical", img: "electrical.jpg" },
  { name: "Hydraulics", img: "hydraulics.jpg" },
  { name: "O- Rings", img: "o-rings.jpg" },
  { name: "Oil seals", img: "oil-seals.jpg" },
  { name: "Pipes Hydraulics and Pneumatics", img: "pipes.jpg" },
  { name: "Pipe Clamps", img: "pipe-clamps.jpg" },
  { name: "Pneumatics", img: "pneumatics.jpg" },
  { name: "Pressure Relief Valves", img: "pressure-relief-valves.jpg" },
  { name: "Pressure Reducing Valves", img: "pressure-reducing-valves.jpg"},
  { name: "Quick Couplings", img: "quick-couplings.jpg" },
  { name: "Reservoirs", img: "reservoirs.jpg" },
  { name: "Rotary Unions", img: "rotary-unions.jpg" },
  { name: "Seals", img: "seals.jpg" },    
];

export default function Products() {
  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Our Products</h1>
      <p style={styles.subtext}>
        Explore our wide range of hydraulic, pneumatic and industrial solutions.
      </p>
      <div style={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: { name: string; img: string } }) {
  return (
    <div
      style={styles.card}
      tabIndex={0}
      role="button"
      aria-label={`Product: ${product.name}`}
      onMouseEnter={(e) => handleHover(e, true)}
      onMouseLeave={(e) => handleHover(e, false)}
    >
      <div style={styles.imageContainer}>
        <img
          src={`/${product.img}`}
          alt={product.name}
          style={styles.image}
          loading="lazy"
        />
      </div>
      <span style={styles.name}>{product.name}</span>
    </div>
  );
}

function handleHover(e: React.MouseEvent, entering: boolean) {
  const img = e.currentTarget.querySelector("img") as HTMLImageElement;
  if (img) {
    img.style.opacity = entering ? "1" : "0.85";
    img.style.transform = entering ? "scale(1.05)" : "scale(1)";
  }
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    padding: "2rem 1rem",
    backgroundColor: "#fff",
    color: "#000",
    fontFamily: "sans-serif",
    minHeight: "100vh",
  },
  heading: {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: 700,
    marginBottom: "0.5rem",
    color: "red",
  },
  subtext: {
    textAlign: "center",
    fontSize: "1rem",
    color: "#555",
    marginBottom: "2rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "1.5rem",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
    padding: "1.2rem 1rem 1rem",
    textAlign: "center",
    transition: "all 0.3s ease",
    cursor: "pointer",
    outline: "none",
  },
  imageContainer: {
    height: "110px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1rem",
    overflow: "hidden",
  },
  image: {
    width: "90px",
    height: "90px",
    borderRadius: "12px",
    objectFit: "cover",
    opacity: 0.85,
    transition: "opacity 0.3s ease, transform 0.3s ease",
  },
  name: {
    fontSize: "1rem",
    fontWeight: 600,
    color: "#222",
  },
};
