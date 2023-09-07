import React from "react";

interface HorizontalBulletGraphProps {
  scaleMin: number;
  scaleMax: number;
  impact: number;
  base: number;
  baseColor?: string;
  negativeImpactColor?: string;
  positiveImpactColor?: string;
  height?: number;
  width?: number;
}

const HorizontalBulletGraph: React.FC<HorizontalBulletGraphProps> = ({
  scaleMin,
  scaleMax,
  impact,
  base,
  baseColor = "#c7c7c7",
  negativeImpactColor = "red",
  positiveImpactColor = "green",
  height = 20,
  width = 1000,
}) => {
  const baseValue = Math.min(base, scaleMax);
  const impactValue = Math.min(impact, scaleMax);

  const widthScale = width / (scaleMax - scaleMin);

  const horizontalBulletGraphStyles: React.CSSProperties = {
    display: "flex",
    justifyContent: "start",
  };

  const graphStyles: React.CSSProperties = {
    position: "relative",
  };

  const bulletStyles: React.CSSProperties = {
    backgroundColor: "transparent",
    height: `${height}px`,
    width: `${width}px`,
    zIndex: 1,
  };

  const impactWidth = (impactValue - scaleMin) * widthScale;
  const baseWidth = (baseValue - scaleMin) * widthScale + impactWidth;

  let impactLeft;
  let markLeft;
  let impactBackgroundColor = "transparent";

  if (impactValue > 0) {
    impactLeft = baseWidth - impactWidth;
    markLeft = impactLeft + impactWidth + 5;
    impactBackgroundColor = positiveImpactColor;
  } else {
    impactLeft = baseWidth;
    markLeft = Math.abs(impactLeft) + Math.abs(impactWidth) + 5;
    impactBackgroundColor = negativeImpactColor;
  }

  const baseStyles: React.CSSProperties = {
    backgroundColor: baseColor,
    height: `${height}px`,
    left: "0",
    position: "absolute",
    top: "0",
    width: `${baseWidth}px`,
    zIndex: 2,
  };

  const impactStyles: React.CSSProperties = {
    backgroundColor: impactBackgroundColor,
    height: `${height / 3}px`,
    left: `${impactLeft}px`,
    marginBottom: `${height / 3}px`,
    marginTop: `${height / 3}px`,
    position: "absolute",
    top: "0",
    width: `${Math.abs(impactWidth)}px`,
    zIndex: 4,
  };

  const markStyles: React.CSSProperties = {
    height: `${height}px`,
    left: `${markLeft}px`,
    position: "absolute",
    top: "0",
    zIndex: 2,
  };

  return (
    <div style={horizontalBulletGraphStyles}>
      <div className="Graph" style={graphStyles}>
        <div style={bulletStyles}></div>

        {!isNaN(baseValue) && <div style={baseStyles}></div>}

        {!isNaN(impactValue) && <div style={impactStyles}></div>}

        <div style={markStyles}>{(baseValue + impactValue).toFixed(2)}</div>
      </div>
    </div>
  );
};

export default HorizontalBulletGraph;
