// 고객지원 문의 페이지 (src/pages/support/ContactPage.jsx)
import React, { useState } from 'react';
import Card from '../../components/common/Card';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

/**
 * 고객지원 문의 폼 페이지
 */
const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess('문의가 접수되었습니다. 빠른 시일 내 답변드리겠습니다.');
    setTimeout(() => setSuccess(''), 1500);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Card>
      <h1 className="text-2xl font-bold mb-4">고객지원 문의</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input value={name} onChange={e => setName(e.target.value)} placeholder="이름" />
        <Input value={email} onChange={e => setEmail(e.target.value)} placeholder="이메일" />
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="문의 내용"
          className="border rounded px-3 py-2 w-full min-h-[80px]"
        />
        {success && <div className="text-green-600 text-sm">{success}</div>}
        <Button type="submit" className="w-full">문의하기</Button>
      </form>
    </Card>
  );
};

export default ContactPage;
