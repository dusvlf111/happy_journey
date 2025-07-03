// 건강 상태 표시 컴포넌트입니다. 건강 지표(예: 심박수, 혈압 등)를 시각적으로 보여줍니다.
import React from "react";

export default function HealthStatus({ status }) {
  if (!status) return null;
  return (
    <div className="card">
      <div className="mb-2"><b>심박수:</b> {status.heartRate} bpm</div>
      <div className="mb-2"><b>혈압:</b> {status.bloodPressure}</div>
      <div className="mb-2"><b>혈당:</b> {status.bloodSugar} mg/dL</div>
      <div><b>위험도:</b> {status.riskLevel}</div>
    </div>
  );
}
