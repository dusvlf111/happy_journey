// 케어서비스 카드 컴포넌트입니다. 서비스 정보(이름, 설명, 가격 등)를 카드 형태로 보여줍니다.
import React from "react";

export default function CareServiceCard({ service }) {
  if (!service) return null;
  return (
    <div className="care-service-card" style={{border:'1px solid #e5e7eb', borderRadius:8, padding:16, marginBottom:16, background:'#fff'}}>
      <h3 style={{fontSize:'1.2rem', fontWeight:'bold', marginBottom:8}}>{service.name}</h3>
      <p style={{marginBottom:8}}>{service.description}</p>
      <div style={{fontWeight:'bold', color:'#2563eb'}}>{service.price?.toLocaleString()}원</div>
    </div>
  );
}
