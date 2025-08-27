# YouTube Dashboard (원클릭 배포 가능)

이 리포지토리는 YouTube Data API를 활용한 검색 대시보드 템플릿입니다.

---

## 1️⃣ 원클릭 배포 버튼

### Render (백엔드)
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/<GITHUB_USER>/<REPO_NAME>/tree/main)

> 버튼 클릭 → Render가 backend를 자동 배포  
> 환경변수: `YT_API_KEY` 입력 필수

### Vercel (프론트엔드)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/<GITHUB_USER>/<REPO_NAME>/tree/main&project-name=youtube-dashboard-frontend)

> 버튼 클릭 → Vercel이 frontend를 자동 배포  
> 환경변수: `VITE_BACKEND_URL=<Render에서 발급받은 백엔드 URL>` 입력

---

## 2️⃣ 사용 방법

1. GitHub 리포지토리 Fork 또는 복사  
2. Render 버튼 클릭 → `YT_API_KEY` 입력  
3. Vercel 버튼 클릭 → `VITE_BACKEND_URL` 입력  
4. Vercel URL 접속 → 바로 사용 가능
