# vue-reddit-frontend

## 기술: vue, vuex, bootstrap

### 기술 사용 이유

1. vue : react와 같이 쉽게 프론트를 구현할 수 있는 프레임워크로 유명해 react와 어떤 차이가 있는지 궁금해 사용했다.
2. vuex : react로 작업할 때 state를 매번 props로 전달해주어 불편했는데, state를 중앙에서 관리할 수 있는 vuex를 사용해 state를 편리하게 사용할 수 있었다.
3. bootstrap: 디자인에는 감각이 없어 bootstrap로 css를 구현했다.

### 실행 방법

```jsx
npm install && npm run serve -- --port 3000

id: abc
pw: 1234
```

### 구현 내용

- 회원 가입

회원 가입 신청 후 본인 확인 이메일을 보내 이메일 인증 완료 시에 회원 가입 성공

현재는 development mode로 mailtrap을 사용해 가입 불가 

- 로그인

    Spring Security + JWT 로그인

    세션과 쿠키 기반의 로그인보다 보안이 좋은 jwt 로그인을 구현하고 싶었다.

    나중에는 OAuth2도 추가하고 싶다.

- 게시판 (Subreddit 카테고리)

    게시판 생성, 삭제 (수정 예정)

- 게시글 (Post)

    게시글 생성, 삭제, 수정

- 댓글 (Comment)

    댓글 생성, (수정과 삭제는 예정)

    댓글 달리면 메일로 댓글 달렸다고 알림

- 게시글 투표(Vote)

    투표 Up & Down 기능 구현

- 회원 활동 요약

    "/user-profile/:id"

- 관리자 권한

    Post, Subreddit 삭제 가능
