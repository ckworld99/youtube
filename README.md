# YouTube Dashboard
# YouTube Dashboard (원클릭 배포 가능)

이 리포지토리는 YouTube Data API를 활용한 검색 대시보드 템플릿입니다.  
검색어 입력 → 영상 제목, 조회수, 업로드일, 채널 구독자 수, 썸네일 확인 가능.

---

## 1️⃣ 원클릭 배포 버튼

### Render (백엔드)
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/ckstudio/youtube-dashboard/tree/main/backend)

> 버튼 클릭 → Render가 backend를 자동 배포  
> 환경변수: `YT_API_KEY` 입력 필수

### Vercel (프론트엔드)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ckstudio/youtube-dashboard/tree/main/frontend&project-name=youtube-dashboard-frontend)

> 버튼 클릭 → Vercel이 frontend를 자동 배포  
> 환경변수: `VITE_BACKEND_URL=<Render에서 발급받은 백엔드 URL>` 입력

---

## 2️⃣ 사용 방법

1. GitHub에서 리포지토리를 Fork 또는 복사  
2. Render 버튼 클릭 → `YT_API_KEY` 입력  
3. Vercel 버튼 클릭 → `VITE_BACKEND_URL` 입력  
4. Vercel URL 접속 → 바로 사용 가능

---

## 3️⃣ 예시 검색어
- 중년 다이어트
- 건강식 레시피
- 운동 방법

---

## 4️⃣ 주의 사항
- YouTube API 무료 할당량: 하루 10,000 units  
- maxResults 기본 10~12개 추천  
- 프로토타
