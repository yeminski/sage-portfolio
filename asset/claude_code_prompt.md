# Claude Code Instructions — Career Page Components

## 프로젝트 스택
- Next.js + TypeScript + Tailwind CSS
- 디자인: minimal light-mode, teal accent color

## 작업 내용
`experience.ts` 파일의 데이터를 사용해서 Career 페이지용 컴포넌트를 만들어줘.

## 파일 구조
아래 파일들을 만들어줘:

```
components/career/
  ExperienceCard.tsx     # 회사별 카드 컴포넌트
  ExperienceSection.tsx  # 전체 경험 리스트
data/
  experience.ts          # (이미 있음 — 이 파일 그대로 사용)
```

## ExperienceCard 동작 방식
각 카드는 이렇게 구성돼:

1. **회사명 + 위치 + 직책 + 재직기간** — 상단 헤더
2. **줄글 소개** — description 배열의 각 항목을 paragraph로 렌더링
3. **카테고리 토글 버튼들** — categories 배열의 label마다 버튼 하나씩
   - 버튼 클릭하면 해당 카테고리의 bullets가 아래 펼쳐짐
   - 같은 버튼 다시 클릭하면 닫힘
   - 여러 카테고리 동시에 열 수 있게 해줘
4. **awards** — 있으면 카드 하단에 작게 표시

## 디자인 요구사항
- teal accent: 버튼 활성화 상태, hover, 카테고리 라벨에 사용
- 카드 간 구분은 subtle한 divider 또는 spacing으로
- 토글 버튼은 pill 또는 tag 스타일
- bullets는 ul/li로 렌더링, 왼쪽 teal dot 또는 dash
- 전체적으로 깔끔하고 읽기 편한 레이아웃
- 회사별로 여러 role이 있을 경우 (Epson처럼) role들을 세로로 쌓아줘

## 한 회사에 여러 role이 있는 경우
Epson처럼 `roles` 배열에 여러 항목이 있으면, 같은 회사 카드 안에서 role별로 섹션 나눠서 표시해줘.

## 참고
- `experience.ts`의 타입 정의 그대로 사용해줘 (ExperienceItem, Role, Category)
- 애니메이션은 간단한 Tailwind transition으로만
