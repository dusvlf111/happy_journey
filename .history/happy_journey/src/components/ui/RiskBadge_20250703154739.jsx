// 위험도 뱃지 컴포넌트입니다. 위험 수준(낮음, 보통, 높음 등)에 따라 색상과 텍스트를 다르게 표시합니다.
import React from "react";

const riskClass = {
  낮음: 'risk-badge risk-low',
  보통: 'risk-badge risk-medium',
  높음: 'risk-badge risk-high',
};

export default function RiskBadge({ level }) {
  return (
    <span className={riskClass[level] || 'risk-badge'}>
      {level}
    </span>
  );
}
