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
      {list.length === 0 && <div className="text-gray">음성편지가 없습니다.</div>}
      {list.map(msg => (
        <Card key={msg.id} className="mb-2">
          <div className="font-bold mb-1">{msg.sender}</div>
          <div className="mb-2">{msg.text}</div>
          <div className="text-gray text-xs">{msg.date}</div>
        </Card>
      ))}
    </div>
  );
};

VoiceMessages.defaultProps = {
  previewMode: false,
};

export default VoiceMessages;
