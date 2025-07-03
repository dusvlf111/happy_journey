// 음성 메시지 카드 컴포넌트입니다. 발신자, 내용, 재생 버튼 등을 표시합니다.
import React from "react";

export default function VoiceMessage({ message, onPlay }) {
  if (!message) return null;
  return (
    <div className="card mb-2">
      <div className="font-bold mb-1">{message.sender}</div>
      <div className="mb-2">{message.text}</div>
      <button className="btn" onClick={() => onPlay && onPlay(message)}>재생</button>
    </div>
  );
}
