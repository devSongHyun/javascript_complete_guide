## Security Details In Your Code

코드에 데이터 노출하기

- 데이터베이스 예제 또는 기밀일 수 있는 다른 데이터의 경우 클라이언트 측 코드에 넣지 않도록 확인해야함.

    ⚠️ 브라우저 개발자도구의 Sources 탭에서 누구나 확인할 수 있다.
    

## Cross-Site Scription Attacks (XSS)

교차-사이트 스크립팅 공격

- 해로운 JavaScript 코드를 애플리케이션에 삽입하고 실행
- innerHTML 구문을 사용하면 해커가 `<script>`태그를 통해 코드를 작성할 수 있다.
    
    👉 `textcontent`로 텍스트만 삽입하도록 확인.
    
    👉 `sanitize-html` 과 같은 패키지를 사용하여 텍스트를 검사하고 원하지 않는 태그를 삭제
    
- 안전성 검사는 가능한 서버 측에서 이뤄져야한다.

## Cross-Site Request Forgery (CSRF)

교차 사이트 요청 위조 공격

- 사용자를 속여서 링크를 클릭하여 준비된 페이지로 유도.

## Cross-Origin Resource Sharing (CORS)

교차 출처 리소스 공유

- 공격 패턴이 아닌 보안의 개념.
- 기본적으로 브라우저는 같은 서버에서 온 리소스만 허용된다.
- 누구나 리소스에 엑세스 하거나, 모든 페이지에 엑세스 하지 못하도록 하는 것.