// 음성 메시지 카드 컴포넌트입니다. 발신자, 내용, 재생 버튼 등을 표시합니다.
import React from "react";

export default function VoiceMessage({ message, onPlay }) {
  if (!message) return null;
  return (
    <div style={{border:'1px solid #e5e7eb', borderRadius:8, padding:12, marginBottom:12, background:'#f9fafb'}}>
      <div style={{fontWeight:'bold', marginBottom:4}}>{message.sender}</div>
      <div style={{marginBottom:8}}>{message.text}</div>
      <button onClick={() => onPlay && onPlay(message)} style={{padding:'4px 12px', borderRadius:4, background:'#2563eb', color:'#fff', border:'none'}}>재생</button>
    </div>
  );
}
