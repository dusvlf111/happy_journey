// 통화 기록 페이지 (src/pages/phone-service/CallHistory.jsx)
import React from 'react';
import { callHistory } from '../../services/mockData/voiceMessages';
import Card from '../../components/common/Card';

/**
 * 전화 통화 기록 내역 페이지
 */
export default function CallHistory() {
  return (
    <div>
      <h1 className="title mb-4">통화 기록</h1>
      {callHistory.length === 0 && <div className="text-gray">통화 기록이 없습니다.</div>}
      {callHistory.map(call => (
        <Card key={call.id} className="mb-2">
          <div className="mb-2">날짜: {call.date} {call.time}</div>
          <div className="mb-2">상태: {call.status}</div>
          <div className="mb-2">요약: {call.summary}</div>
          <div>통화 시간: {call.duration}</div>
        </Card>
      ))}
    </div>
  );
}
