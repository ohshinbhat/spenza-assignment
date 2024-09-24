import React from "react";
import geodata from "../utils/geodata.json";

const Legend = () => {
  const legendStyle = {
    position: "absolute",

    backgroundColor: "white",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0 0 15px rgba(0,0,0,0.2)",
    zIndex: 1000,
    display: "flex", // Make the legend container a flexbox
    flexDirection: "row", // Align items in a row
    flexWrap: "wrap", // Allow wrapping to the next line if needed
    gap: "10px", // Space between items
  };

  const legendItemStyle = {
    display: "flex",

    alignItems: "center",
    marginBottom: "5px",
  };
  const getColor = (value) => {
    const minValue = Math.min(...geodata.map((d) => d.data));
    const maxValue = Math.max(...geodata.map((d) => d.data));
    const percentage = (value - minValue) / (maxValue - minValue);
    return `rgb(${Math.round(220 - 220 * percentage)}, ${Math.round(
      220 - 170 * percentage
    )}, 255)`;
  };
  const minValue = Math.min(...geodata.map((d) => d.data));
  const maxValue = Math.max(...geodata.map((d) => d.data));
  const rangeStep = (maxValue - minValue) / 4; // Create 4 ranges

  const ranges = [
    { label: `< ${Math.round(minValue + rangeStep)}`, value: minValue },
    {
      label: `${Math.round(minValue + rangeStep)} - ${Math.round(
        minValue + 2 * rangeStep
      )}`,
      value: minValue + rangeStep,
    },
    {
      label: `${Math.round(minValue + 2 * rangeStep)} - ${Math.round(
        minValue + 3 * rangeStep
      )}`,
      value: minValue + 2 * rangeStep,
    },
    { label: `> ${Math.round(minValue + 3 * rangeStep)}`, value: maxValue },
  ];

  return (
    <div className="map-container" style={legendStyle}>
      <h4>Usage Legend</h4>
      {ranges.map((range, index) => (
        <div key={index} style={legendItemStyle}>
          <span
            style={{
              backgroundColor: getColor(range.value),
              width: 20,
              height: 20,
              display: "inline-block",
              marginRight: 8,
            }}
          ></span>
          {range.label}
        </div>
      ))}
    </div>
  );
};

export default Legend;
