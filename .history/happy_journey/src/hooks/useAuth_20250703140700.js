// 인증 커스텀 훅 (src/hooks/useAuth.js)
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

/**
 * 인증 컨텍스트를 쉽게 사용하기 위한 커스텀 훅
 */
const useAuth = () => useContext(AuthContext);

export default useAuth;
