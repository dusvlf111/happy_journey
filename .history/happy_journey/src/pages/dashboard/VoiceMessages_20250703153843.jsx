// 음성편지 컴포넌트 (src/pages/dashboard/VoiceMessages.jsx)
import React from 'react';
import Card from '../../components/common/Card';
import { voiceMessages } from '../../services/mockData/voiceMessages';

/**
 * 음성편지 미리보기/전체 목록
 * @param {boolean} previewMode - true면 1개만, false면 전체
 */
const VoiceMessages = ({ previewMode }) => {
  const list = previewMode ? voiceMessages.slice(0, 1) : voiceMessages;
  return (
    <div>
      {list.length === 0 && <div>음성편지가 없습니다.</div>}
      {list.map(msg => (
        <Card key={msg.id} className="mb-2 p-3">
          <div className="font-semibold text-blue-700 mb-1">{msg.sender}</div>
          <div className="text-gray-800 mb-1">{msg.text}</div>
          <div className="text-xs text-gray-400">{msg.date}</div>
        </Card>
      ))}
    </div>
  );
};

VoiceMessages.defaultProps = {
  previewMode: false,
};

export default VoiceMessages;
