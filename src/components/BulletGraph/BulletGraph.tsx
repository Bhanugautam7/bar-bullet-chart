import React from "react";
import HorizontalBulletGraph from "../HorizontalBulletGraph";

interface BulletGraphProps {
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

const BulletGraph: React.FC<BulletGraphProps> = ({
  scaleMin,
  scaleMax,
  impact,
  base,
  baseColor = "#c7c7c7",
  negativeImpactColor = "#ec6157",
  positiveImpactColor = "#61d4c4",
  height = 20,
  width = 1000,
}) => {
  return (
    <div style={{ marginBottom: "2px" }}>
      <HorizontalBulletGraph
        scaleMin={scaleMin}
        scaleMax={scaleMax}
        impact={impact}
        base={base}
        baseColor={baseColor}
        height={height}
        width={width}
        negativeImpactColor={negativeImpactColor}
        positiveImpactColor={positiveImpactColor}
      />
    </div>
  );
};

export default BulletGraph;
