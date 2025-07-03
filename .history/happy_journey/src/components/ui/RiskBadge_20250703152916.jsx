// 위험도 뱃지 컴포넌트입니다. 위험 수준(낮음, 보통, 높음 등)에 따라 색상과 텍스트를 다르게 표시합니다.
import React from "react";

const riskColors = {
  낮음: '#22c55e',
  보통: '#facc15',
  높음: '#ef4444',
};

export default function RiskBadge({ level }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '2px 10px',
      borderRadius: 12,
      background: riskColors[level] || '#e5e7eb',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 13,
    }}>
      {level}
    </span>
  );
}
