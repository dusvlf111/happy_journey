<!-- 응급상황 대응 시스템 (docs/emergency-system.md) -->

# 4. 응급상황 대응 시스템

## 4.1 응급상황 판단 기준
- 위험도 71점 이상
- 의식 저하 관련 응답
- 심한 통증 호소 (8점 이상/10점)
- 호흡 곤란 증상

## 4.2 응급상황 대응 플로우
### 4.2.1 즉시 대응 (5분 이내)
1단계: 보호자 즉시 연락 (전화 + 문자 + 앱 푸시 알림 동시 발송)
2단계: 본인 의사 확인 (AI가 병원 방문 권유)
3단계: 대응 방향 결정 (본인 동의 시 119 신고, 거부 시 보호자에게 상황 전달)

### 4.2.2 보호자 확인 시스템
응급상황 발생 시 보호자에게 제공되는 정보:
- 발생 시간
- 주요 증상 요약
- 위험도 점수
- 권장 대응 방안
- 녹음된 대화 내용 (핵심 부분)

보호자 선택 옵션:
- 즉시 119 신고
- 직접 병원 이송
- 추가 전화로 상황 확인
- 기타 (직접 입력) 