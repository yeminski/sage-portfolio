# Product Requirements Document (PRD)
# PillEd — 스마트 약물 관리 애플리케이션

---

## 1. Executive Summary

- **Product**: PillEd
- **Owner**: Sage Seo (MBA, Tech Marketing)
- **Status**: Draft
- **Last Updated**: 2026-02-15

**Vision**: 다약제 복용(Polypharmacy), 약물 비순응(Nonadherence), 낮은 건강 리터러시 문제를 해결하는 사용자 친화적 모바일 플랫폼을 제공한다.

**Success Metrics**: 출시 3년 내 구독 사용자 수 기반 SOM $16M 달성, 사용자 약물 순응도 30% 이상 개선

**Strategic Alignment:**
- **Business Objectives**: 고령화 사회 및 예방 건강 트렌드에 부합하는 B2C/B2B 구독 기반 헬스케어 플랫폼 구축
- **User Problems**: 60세 이상 성인 30%가 5개 이상 약물 복용, 50%가 처방대로 복용하지 않음, 12%만이 건강 리터러시 보유
- **Market Opportunity**: TAM $565B, SAM $200.5B, SOM $16M — 원격의료 방문 2018~2019년 4,000% 증가, 2050년까지 65세 이상 인구 4,600만→9,000만 예상
- **Competitive Advantage**: OCR 카메라 약물 인식, 자동화된 약물 상호작용 경고, 이해하기 쉬운 약물 정보를 단일 앱에 통합 (기존 경쟁 제품에는 없는 조합)

**Resource Requirements:**
- **Development Effort**: 엔지니어(앱 개발자, AI 엔지니어), UI/UX 디자이너, PM 포함 핵심 팀 4인
- **Timeline**: 2023 Q1 병원 파트너십 → 2023 Q2 요양시설/산부인과 확장 → 2023 Q4 B2B 헬스케어 리테일 → 2025 Q1 정식 런칭
- **Budget**: 연간 운영비 약 $1.2M (서버, 인건비, 마케팅 포함)

---

## 2. Problem Statement & Opportunity

### Problem Definition

| 지표 | 수치 | 설명 |
|------|------|------|
| Polypharmacy | 30% | 60세 이상 성인 중 5개 이상 약물 복용 |
| Nonadherence | 50% | 처방대로 약을 복용하지 않는 성인 비율 |
| Health Literacy | 12% | 건강 리터러시가 충분한 성인 비율 |
| 의료비 부담 | $50B | 다약제 복용 또는 약물 오용으로 인한 연간 의료비 |
| 병원 입원 원인 | 30% | 약물 부작용으로 인한 전체 입원 비율 |
| 사망 원인 | 5위 | 약물 부작용이 미국 사망 원인 5위 |

**Evidence:**
- 약물 상호작용으로 인한 부작용 발생 확률 50%
- 고령 환자일수록 복용 약물 수 증가로 위험도 기하급수적 상승
- 기존 솔루션들은 기능이 분산되어 있어 통합적 관리가 불가능

### Opportunity Analysis

- **TAM (Total Addressable Market)**: $565B — "Mother" & "Caregiver" 세그먼트 전체 (11.3M × $50/year 구독)
- **SAM (Serviceable Addressable Market)**: $200.5B — 다운로드 의향이 있는 잠재 고객 (caregivers 30%, 임산부 40%)
- **SOM (Serviceable Obtainable Market)**: $16M — 실제 다운로드 및 구독 예상 (caregivers 10%, 임산부 5%)
- **Growth Drivers**: 고령화 인구 증가, 예방 건강 트렌드, 원격의료 급성장 (시장 규모 $219.76B, 2022년 기준)

### Success Criteria

- **Primary**: 출시 5년 내 누적 매출 목표 달성 (Y5 기준 약 $8~10M 연매출)
- **Secondary**: 사용자 약물 순응도 개선율 30%+, 앱 DAU/MAU 비율 40%+
- **User Behavior**: 일일 복약 알림 확인율 80%+, 약물 스캔 기능 주 2회+ 사용

---

## 3. User Requirements & Stories

### Primary User Personas

#### Persona 1: "Mother" (임산부)
- **프로필**: 임신 중인 여성, 약물 안전성에 민감
- **Pain Point**: "아기에게 안전한지 모르고 Advil을 먹어도 될까?"
- **Goal**: 임신 중 안전한 약물 확인 및 금기사항 자동 알림
- **시장 규모**: 4.0M

#### Persona 2: "Caregiver" (가족 돌봄 제공자)
- **프로필**: 의료 교육을 받지 않은 성인, 고령 부모의 약물 관리 담당
- **Pain Point**: "아버지가 9가지 약을 드시는데, Benadryl을 추가로 드려도 안전할까?"
- **Goal**: 복잡한 다약제 관리와 약물 상호작용 위험 확인
- **시장 규모**: 7.3M

#### Persona 3: "Healthcare Provider" (의료 제공자)
- **프로필**: 의사/병원, 약물 조정(Medical Reconciliation) 업무 수행
- **Pain Point**: "환자의 약물 리뷰에 너무 많은 시간을 소비한다"
- **Goal**: 약물 조정 프로세스 자동화 및 효율화

### Core User Stories

**Epic 1: 약물 등록 및 인식**
- As a 사용자, I want 카메라로 약물을 스캔하여 자동으로 등록 so that 수동 입력 없이 빠르게 약물을 추가할 수 있다.
- **Acceptance Criteria**: OCR 모듈이 약물명을 90%+ 정확도로 인식, 인식 결과를 사용자에게 확인 요청, 약물 DB에 자동 매칭

**Epic 2: 약물 상호작용 경고**
- As a caregiver, I want 새 약물 추가 시 기존 복용 약물과의 상호작용 자동 경고 so that 위험한 약물 조합을 사전에 방지할 수 있다.
- **Acceptance Criteria**: 약물 추가 즉시 DI(Drug Interaction) 모듈 실행, 위험도 레벨 표시 (HIGH/MEDIUM/LOW), "의사와 상담하세요" 권고 제공

**Epic 3: 복약 스케줄 및 알림**
- As a 사용자, I want 복약 스케줄을 설정하고 시간에 맞춰 알림을 받고 so that 약물 비순응 문제를 해결할 수 있다.
- **Acceptance Criteria**: 사용자별 복약 시간 설정, 푸시 알림 발송, 스누즈 기능, 복약 이력 자동 기록

**Epic 4: 이해하기 쉬운 약물 정보**
- As a mother, I want 약물 정보를 쉬운 언어로 확인 so that 건강 리터러시가 낮아도 안전하게 약물을 이해할 수 있다.
- **Acceptance Criteria**: 전문 용어를 일반 언어로 변환, 복용 방법/보관법/주의사항 명확 표시, 금기사항(임신, 알레르기 등) 개인화 경고

**Epic 5: 가격 비교 및 쇼핑**
- As a 사용자, I want 약물/보충제의 가격을 비교하고 인앱 구매 so that 가장 합리적인 가격으로 구매할 수 있다.
- **Acceptance Criteria**: 동일 성분 제품 가격 비교 목록, 리테일 파트너 연동, 위시리스트 기능

---

## 4. Functional Requirements

### Must Have Features (MVP)

| Feature | 설명 | Acceptance Criteria |
|---------|------|-------------------|
| **사용자 프로필 생성** | 생년월일, 성별, 체중/키, 임신 여부, 알레르기 입력 | 개인화 경고 시스템의 기반 데이터로 활용 |
| **OCR 약물 스캔** | 카메라로 약물 촬영 시 자동 인식 및 DB 매칭 | 인식 정확도 90%+, 3초 이내 결과 반환 |
| **약물 상호작용 검사 (DI Module)** | 등록된 약물 간 상호작용 자동 검사 | 위험도 레벨 분류, 실시간 경고 |
| **금기사항 알림 (Contraindication)** | 사용자 프로필 기반 금기사항 자동 경고 | 임신, 알레르기, 기저질환 고려 |
| **복약 스케줄 관리** | 약물별 복용 시간/횟수 설정 및 알림 | 푸시 알림, 스누즈, 복약 이력 |
| **이해하기 쉬운 약물 정보** | 복용법, 보관법, 부작용을 쉬운 언어로 제공 | 건강 리터러시 수준에 맞춘 정보 |

### Should Have Features

| Feature | 설명 | Priority |
|---------|------|----------|
| **가격 비교** | 동일 약물/보충제의 리테일 가격 비교 | High |
| **복약 이력 대시보드** | 기간별 복약 순응도 시각화 | Medium |
| **프리미엄 약사 상담** | 실시간 약사 질의응답 (구독 기능) | High |
| **인앱 구매** | 보충제/약물 직접 구매 연동 | Medium |

### Could Have Features

| Feature | 설명 |
|---------|------|
| **의료진 대시보드** | B2B - 의사/약사용 환자 약물 관리 화면 |
| **가족 공유** | 가족 구성원의 약물 프로필 통합 관리 |
| **웨어러블 연동** | Apple Watch 등 복약 알림 연동 |

---

## 5. Technical Requirements

### Architecture Specifications

```
[사용자 앱] → [OCR Module] → [Image Recognition API]
     ↓                              ↓
[User DB] ←→ [DI Module] ←→ [Medicine DB / DI DB]
     ↓                              ↓
[Schedule DB] → [Notification System] → [Push Alert]
     ↓
[Bio DB] → [Contraindication Engine]
```

**핵심 모듈:**
- **OCR Module**: 카메라 이미지 → 약물명 텍스트 추출
- **Image Recognition**: 약물 외형 기반 DB 매칭
- **DI Module**: Drug-Drug Interaction 검사 엔진
- **Notification System**: 복약 스케줄 기반 타이머 알림
- **Data Mining Module**: 의약품 DB 업데이트 (Web, Corporate, Research 소스)

### Data Requirements

| DB | 설명 |
|----|------|
| **User DB** | 사용자 프로필 (생년월일, 성별, 체중, 알레르기 등) |
| **Meds DB** | 사용자별 등록 약물 목록 |
| **Medicine DB** | 전체 의약품 정보 (성분, 복용법, 금기사항) |
| **DI DB** | 약물 상호작용 데이터베이스 |
| **Bio DB** | 사용자 생체 정보 |
| **Schedule DB** | 복약 스케줄 및 알림 설정 |

### Infrastructure

- **Server**: Azure High Performance Server × 4 ($34k/yr)
- **Storage**: AWS 500M (User, Medical) DB ($150/yr)
- **Image Processing**: 3.1M 이미지 처리 ($3k/yr)
- **Platform**: iOS / Android 모바일 앱

### Performance Specifications

- OCR 인식 응답 시간: 3초 이내
- 약물 상호작용 검사: 1초 이내
- 푸시 알림 지연: 1분 이내
- 앱 가용성: 99.5%+

---

## 6. User Experience Requirements

### Design Principles

- **Simplicity First**: 건강 리터러시가 낮은 사용자도 직관적으로 사용 가능
- **Personalization**: 사용자 프로필 기반 맞춤형 정보 및 경고
- **Safety-Oriented**: 위험 약물 조합은 눈에 띄는 시각적 경고 (빨간색 HIGH/노란색 MEDIUM)
- **Accessibility**: 고령 사용자를 위한 큰 글씨, 높은 대비, 음성 안내 지원

### Core Screens (User Journey)

1. **회원가입/프로필 설정** → 생년월일, 성별, 체중/키, 임신 여부, 알레르기, 현재 복용 약물
2. **메인 대시보드 (Account Management)** → 사용자 정보, 등록 약물 목록, 복약 상태
3. **약물 스캔** → 카메라 촬영 → OCR 인식 → 약물 정보 표시
4. **약물 상세 정보** → 복용법, 보관법, 위험도, 가격 비교, "ADD TO MY DOSING SCHEDULE"
5. **DI 경고 화면** → 상호작용 위험도, "Consult with your doctor" 권고
6. **복약 스케줄** → 일별/시간별 복약 현황, 알림 설정
7. **푸시 알림** → 복약 시간 도달 시 알림, 스누즈/닫기
8. **가격 비교 & 쇼핑** → 동일 제품 가격 비교, 위시리스트, 구매

---

## 7. Non-Functional Requirements

### Security Requirements
- 사용자 건강 정보 암호화 (HIPAA 준수)
- 개인 의료 데이터 전송 시 TLS/SSL 적용
- 사용자 동의 기반 데이터 수집 (GDPR 준수)
- 역할 기반 접근 제어 (사용자 vs 의료진 vs 관리자)

### Reliability Requirements
- 서비스 가용성: 99.5%+ uptime
- 약물 상호작용 DB 정확도: 99%+ (FDA 데이터 기반)
- 자동 백업: 일 1회 전체 DB 백업
- 장애 복구: RTO 4시간 이내

### Scalability Requirements
- Y1→Y5 사용자 성장: 0 → ~5M+ 사용자 예상
- DB 스토리지: 500M 레코드 기반 확장 가능 설계
- 이미지 처리: 연 3.1M → 확장 가능한 클라우드 기반

---

## 8. Success Metrics & Analytics

### Key Performance Indicators

| KPI | Target | Timeline |
|-----|--------|----------|
| 앱 다운로드 수 | Y1: 100K, Y3: 1M, Y5: 5M | 5년 |
| 프리미엄 구독 전환율 | 5~10% | Y2~ |
| DAU/MAU 비율 | 40%+ | Y1~ |
| 복약 알림 확인율 | 80%+ | Y1~ |
| 약물 스캔 사용 빈도 | 주 2회+ per user | Y1~ |
| 사용자 순응도 개선 | 30%+ 개선 | Y2~ |
| NPS (Net Promoter Score) | 50+ | Y2~ |

### Revenue Metrics

| Revenue Stream | 설명 |
|----------------|------|
| **Freemium Subscription** | $50/year — 약사 실시간 상담 프리미엄 |
| **Advertisement Sales** | $0.6/user CPM — CVS 등 리테일 약국, 보충제 브랜드 광고 |
| **Transaction/Platform Fee** | CPA 기반 인앱 구매 커미션 |

### Analytics Implementation
- 복약 순응도 트래킹 (일별/주별/월별)
- 기능별 사용 빈도 (스캔, DI 검사, 스케줄 등)
- 구독 전환 퍼널 분석
- A/B 테스트: 알림 빈도, UI 레이아웃, 온보딩 플로우

---

## 9. Implementation Plan

### Development Phases

| Phase | 시기 | 목표 |
|-------|------|------|
| **Phase 0: Discovery** | Pre-Q1 2023 | 사용자 리서치, 기술 검증, 파트너 확보 |
| **Phase 1: MVP** | Q1 2023 | 핵심 기능 (프로필, OCR, DI, 스케줄, 알림) 개발 + 병원 파트너십 |
| **Phase 2: Expansion** | Q2 2023 | 요양시설/산부인과/노인의학과 파트너 확장 |
| **Phase 3: B2B** | Q4 2023 | 헬스케어 리테일 B2B 파트너십 (프로모션 쿠폰 등) |
| **Phase 4: Launch** | Q1 2025 | 정식 런칭, 마케팅 캠페인 |
| **Phase 5: Scale** | Q1 2025~ | 프리미엄 기능 확장, 글로벌 진출 |

### Go-to-Market Strategy

1. **Q1 2023**: 병원 파트너십 — 약물 조정(Medical Reconciliation) 최적화 도구로 의료 커뮤니티 내 신뢰 구축
2. **Q2 2023**: 요양시설, 산부인과, 노인의학과 — 바쁜 외래 진료소 및 자원 부족 요양시설에 앱 다운로드 유도
3. **Q4 2023**: B2B 헬스케어 리테일 — 제약사 프로모션 쿠폰 제공으로 신규 고객 유치
4. **Q1 2025**: 정식 제품 런칭

### Resource Allocation

| Role | 인원 | 연봉 |
|------|------|------|
| App Developer | 1 | $100k/yr |
| AI Engineer | 1 | $180k/yr |
| UI/UX Designer | 1 | $80k/yr |
| Project Manager | 1 | $130k/yr |
| Premium Consultant (약사) | - | $316k/yr |
| Marketing & SG&A | - | $405k/yr |
| **Total** | **4+** | **$1.2M/yr** |

---

## 10. Risk Assessment & Mitigation

### Technical Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| OCR 인식 정확도 미달 | High | Medium | 다중 이미지 인식 엔진 적용, 사용자 수동 보정 기능 |
| 약물 DB 불완전/비최신 | High | Medium | FDA 공식 DB 연동, 주기적 자동 업데이트 파이프라인 |
| 서버 장애/데이터 손실 | High | Low | 멀티 리전 배포, 자동 백업, 장애 복구 절차 수립 |
| AI 모델 편향/오류 | High | Medium | 약사 검수 프로세스, 사용자 피드백 루프 |

### Business Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| 규제/HIPAA 컴플라이언스 미충족 | Critical | Medium | 초기부터 컴플라이언스 전문가 참여, 보안 감사 |
| 사용자 확보 속도 저조 | High | Medium | B2B 파트너십 통한 사용자 유입, 무료 기능 확대 |
| 경쟁사 기능 추격 | Medium | High | OCR + DI + 쉬운 정보의 통합 경쟁우위 유지, 빠른 반복 |
| 수익화 모델 검증 실패 | High | Medium | 다각화된 수익원 (구독 + 광고 + 트랜잭션), 빠른 피벗 |
| 의료 사고 리스크 (법적 책임) | Critical | Low | 면책 조항 명시, "의사와 상담" 권고 의무화, 보험 가입 |

---

## Quality Checklist

- ✅ Problem is clearly defined with evidence (30% polypharmacy, 50% nonadherence, $50B 비용)
- ✅ Solution aligns with user needs and business goals (통합 약물 관리 플랫폼)
- ✅ Requirements are specific and measurable (OCR 90%+, 응답 3초 이내)
- ✅ Acceptance criteria are testable (각 Epic별 AC 정의)
- ✅ Technical feasibility is validated (OCR, DI 엔진, 클라우드 인프라)
- ✅ Success metrics are defined and trackable (KPI 테이블 포함)
- ✅ Risks are identified with mitigation plans (기술/비즈니스 리스크 매트릭스)
- ✅ Stakeholder alignment is confirmed (팀 구성 및 역할 정의)

---

*This PRD is based on the Anderson Product Innovation Challenge presentation by Tommy Jiang, Michelle Li, Sage Seo, Tae Jun Jeon, and Yonghwan Choi (November 19, 2022).*
