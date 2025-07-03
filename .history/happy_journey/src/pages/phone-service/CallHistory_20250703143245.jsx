// 통화 기록 페이지 (src/pages/phone-service/CallHistory.jsx)
import React, { useEffect, useState } from 'react';
import { getCallHistory } from '../../services/api/voiceApi';
import Card from '../../components/common/Card';

/**
 * 전화 통화 기록 내역 페이지
 */
const CallHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getCallHistory().then(setHistory);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">통화 기록</h1>
      <div className="space-y-4">
        {history.map(call => (
          <Card key={call.id} className="flex flex-col md:flex-row md:items-center gap-2">
            <div className="font-semibold text-blue-700">{call.date} {call.time}</div>
            <div className="text-sm">{call.duration}</div>
            <div className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700">{call.status}</div>
            <div className="flex-1 text-sm text-gray-600">{call.summary}</div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CallHistory;
