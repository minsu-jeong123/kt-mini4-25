<h1 align="center">📚 작가의 산책 - 도서 관리 시스템</h1>

<p align="center">
  도서를 등록, 조회, 수정, 삭제할 수 있는 웹 기반 도서 관리 애플리케이션<br/>
  React와 Spring Boot를 기반으로 구현된 미니 프로젝트입니다.
</p>

---

## 📌 프로젝트 개요

- **프로젝트명**: 작가의 산책
- **기간**: 2025.05.29 ~ 2025.06.02
- **목표**: 사용자 친화적인 UI를 통해 도서를 쉽고 편리하게 관리할 수 있는 웹 시스템 개발

---

## 👥 팀원 소개

| 역할 | 이름 |
|------|------|
| 🧠 PM | 김민욱 |
| 🎨 프론트엔드 | 최가영, 진예나, 김예지 |
| 🔧 백엔드 | 정민수, 이태현, 한정민 |
| 📝 서기 | 진예나, 김예지 |
| ✔️ 검토 | 최가영 |
| 🧾 발표 | 한정민 |
| 📊 PPT 제작 | 이태현, 정민수 |

---

## 🔧 사용 기술 스택

### 🔹 Frontend

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)
![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Material UI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge)

### 🔹 Backend

![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![JPA](https://img.shields.io/badge/JPA-Hibernate-59666C?style=for-the-badge&logo=hibernate)
![Lombok](https://img.shields.io/badge/Lombok-CA2131?style=for-the-badge)
![H2](https://img.shields.io/badge/H2_DB-1A237E?style=for-the-badge)

### 🔹 기타

![REST API](https://img.shields.io/badge/REST%20API-00599C?style=for-the-badge)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)


---

## 📁 프로젝트 구조
📦 book-management-project/
├── backend/
│   ├── build/
│   ├── gradle/
│   ├── src/
│   ├── build.gradle
│   ├── settings.gradle
│   ├── gradlew
│   ├── gradlew.bat
│   ├── .gitignore
│   └── .gitattributes
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── yarn.lock
│   ├── .gitignore
│   └── README.md
│
├── .git/
├── .idea/
└── README.md

---

## 🔍 주요 기능 구현 방식

### 📘 도서 등록
- `/create` 페이지에서 `TextField`로 제목/내용 입력
- `axios.post()`를 통해 `/api/books`로 데이터 전송
- 백엔드는 `@PostMapping`으로 처리, DTO → Entity 매핑 후 DB 저장

### 📖 도서 목록 조회
- 메인 페이지(`/`) 진입 시 `axios.get()`으로 전체 도서 요청
- MUI의 `Card` 컴포넌트로 도서 카드 리스트 출력
- 표지 없을 경우 회색 박스 대체 이미지로 처리

### 📄 도서 상세 조회
- `/detail/:id` 경로로 접근 시 해당 도서 ID로 API 호출
- `useParams()`로 ID 추출 → `axios.get()` 요청
- 제목, 내용, 작성일, 수정일 등 상세 정보 출력

### ✏️ 도서 수정
- `/update/:id` 경로에서 기존 정보 불러오기(`GET`)
- 사용자가 수정 후 저장 시 `PATCH` 요청으로 업데이트 처리

### 🗑 도서 삭제
- 체크된 도서 1건만 선택 가능
- 확인(alert) 후 `DELETE /api/books/:id` 호출로 삭제

### 🏠 홈 이동
- 상단 `AppBar`에 Home 버튼 추가 → `/`로 navigate


---




