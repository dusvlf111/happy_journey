// 음성편지 컴포넌트 (src/pages/dashboard/VoiceMessages.jsx)
import React from 'react';
import Card from '../../components/common/Card';

// 예시 목데이터
const voiceMessages = [
  {
    id: 1,
    from: '김보호자',
    to: '홍길동',
    date: '2024-05-30',
    type: '보호자→고령자',
    content: '아버지, 오늘도 건강하게 지내세요! 사랑합니다.',
  },
  {
    id: 2,
    from: '홍길동',
    to: '김보호자',
    date: '2024-05-29',
    type: '고령자→보호자',
    content: '걱정하지 말고 일 열심히 해라. 나 잘 지내고 있다!',
  },
];

/**
 * 음성편지 미리보기/전체 목록
 * @param {boolean} previewMode - true면 1개만, false면 전체
 */
const VoiceMessages = ({ previewMode }) => {
  const list = previewMode ? voiceMessages.slice(0, 1) : voiceMessages;
  return (
    <div>
      {list.length === 0 && <div className="text-gray-500">음성편지가 없습니다.</div>}
      {list.map(msg => (
        <Card key={msg.id} className="mb-2 p-3">
          <div className="flex justify-between items-center mb-1">
            <span className="font-semibold text-blue-700">{msg.from} → {msg.to}</span>
            <span className="text-xs text-gray-400">{msg.date}</span>
          </div>
          <div className="text-gray-800 mb-1">{msg.content}</div>
          <div className="text-xs text-gray-500">({msg.type})</div>
        </Card>
      ))}
      {!previewMode && (
        <div className="text-xs text-gray-400 mt-2">※ 실제 서비스에서는 음성 재생/녹음 기능이 제공됩니다.</div>
      )}
    </div>
  );
};

VoiceMessages.defaultProps = {
  previewMode: false,
};

export default VoiceMessages;
