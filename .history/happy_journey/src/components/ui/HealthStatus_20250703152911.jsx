// 건강 상태 표시 컴포넌트입니다. 건강 지표(예: 심박수, 혈압 등)를 시각적으로 보여줍니다.
import React from "react";

export default function HealthStatus({ status }) {
  if (!status) return null;
  return (
    <div style={{display:'flex', gap:16, marginBottom:16}}>
      <div>
        <div style={{fontWeight:'bold'}}>심박수</div>
        <div>{status.heartRate} bpm</div>
      </div>
      <div>
        <div style={{fontWeight:'bold'}}>혈압</div>
        <div>{status.bloodPressure}</div>
      </div>
      <div>
        <div style={{fontWeight:'bold'}}>혈당</div>
        <div>{status.bloodSugar} mg/dL</div>
      </div>
    </div>
  );
}
