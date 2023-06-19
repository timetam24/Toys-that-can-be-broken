# 로그인 페이지 구현 연습

<br>

## 1. 로그인 폼 유효성 검사
+ 아이디와 비밀번호 모두 입력 시 로그인 버튼 활성화  
→ 필수 데이터 값 유무 확인  

+ 로그인 버튼 클릭 시 아이디와 비밀번호 형식 확인 (정규표현식 사용)  
→ 아이디: 영문자 시작, 영문자+숫자 조합 6 ~ 20자리  
→ 비밀번호: 영문자+숫자+특수문자 조합 8 ~ 25자리  

+ 미리 설정한 아이디와 비밀번호가 입력과 일치할 경우 로그인 성공  
→ 아이디: imuser1   
→ 비밀번호: frontend1@  

+ 입력한 아이디와 비밀번호의 형식이 조건에 맞지 않거나 설정값과 일치하지 않을 경우 id_pd_wrapper 아래에서 에러 메시지 출력  

+ 로그인 성공 시 페이지 이동 & 아래 문구 출력  
>> Welcome! you have successfully logged in to TimeTam🎊

<br>
<br>

## 2. 소셜 로그인
+ 네이버, 카카오톡, 구글, 깃허브 로그인  
+ 각 소셜마다 로그인 성공 후 지정되어 있는 callback url로 이동 & 회원이름과 프로필 사진을 출력  

<br>
<br>

## 3. 마주쳤던 문제 상황 및 해결 과정
 
1. 구글 로그인 연동 과정에서 403 에러 발생  
    + Failed to load resource: the server responded with a status of 403 ()  

+ 해결 과정  
    + 1차 시도: URL 재확인 
        +  Google Cloud - API 및 서비스 - 웹 애플리케이션의 클라이언트 ID - 승인된 자바스크립트 원본(웹 애플리케이션을 호스팅하는 HTTP 원본)  
    + 2차 시도: 쿠키 및 캐시 데이터 삭제
    + 3차 시도 & 성공: VSCode 설정에서 Host 변경  
        + Live Server > Settings: Host에서 127.0.0.1(default)를 localhost로 변경

<br/>

2. 깃허브 유저 정보를 얻기 위해 code로 access token 요청 시 CORS 에러 발생  
    + Access to XMLHttpRequest at 'https://github.com/login/oauth/access_token' from origin 'http://localhost:5500' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.  
    + POST https://github.com/login/oauth/access_token net::ERR_FAILED 200  

+ 해결 과정
    + 1차 시도: 비동기 HTTP 통신 변경  
        + Ajax, fetch API, Axios로 바꿔보기  
    + 2차 시도: credentials 옵션으로 인증 정보를 담아 서버에 요청  
    + 3차 시도: package.json에서 proxy 설정
    + 4차 시도 & 성공: 'heroku' proxy server 사용  
        + 'heroku' proxy server가 Access-Control-Allow-Origin: * 헤더를 추가 설정하여 CORS 해결  

<br>
<br>

## 4. 스크린 샷

1. 입력 전 로그인 버튼 비활성화  
    <img width="80%" src="https://github.com/timetam24/Toys-that-can-be-broken/assets/135303974/b23dea98-1722-4c8c-8fab-ec5fa1fc7147"/>

2. 아이디 형식 오류  
    <img width="80%" src="https://github.com/timetam24/Toys-that-can-be-broken/assets/135303974/3a5b6766-3742-4096-8e4e-54e3409e3903"/>

3. 아이디 또는 비밀번호 불일치   
    <img width="80%" src="https://github.com/timetam24/Toys-that-can-be-broken/assets/135303974/103d3932-d14b-451a-9c25-3766e6abe760"/>

4. 로그인 성공  
    <img width="80%" src="https://github.com/timetam24/Toys-that-can-be-broken/assets/135303974/6ba4f953-dd49-4d38-b748-dfba0f52e588"/>

5. 소셜 로그인 성공 (GitHub)  
    <img width="80%" src="https://github.com/timetam24/Toys-that-can-be-broken/assets/135303974/8457c025-14d0-4cc4-93a6-68ed9bd6fefc"/>