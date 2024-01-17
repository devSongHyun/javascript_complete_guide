- 특정 시점에서 사용할 수 있는 JavaScript 구문에 의존하는 것이 특정 브라우저 API에 의존하는 것보다 더 안전하다.

## 브라우저 지원 기능을 알려주는 자료

### MDN

- 자바스크립트 기능에 대한 브라우저 지원 표

### caniuse.com

- 어떤 브라우저가 어떤 기능을 지원하는지
- 시장 점유율(사용자의 브라우저 사용률)

### Google

- 틈새 기능, 특정 고급 사용 사례 확인 시

### ES6/JS Compat Table

- 자바스크립트 구문 기능의 상세 리스트
- 어떤 브라우저가 어떤 기능을 지원하는지
- 다음 세대의 자바스크립트 사용 가능 여부
- 다양한 트랜스파일러의 지원
    
    ❓트랜스파일러는 브라우저가 기능을 지원하지 않더라도 트랜스파일을 이용해 동작하게 할 수 있는 도구
    
- Node.js 지원 여부

## 폴리필

- 브라우저에 누락되어 있는 기능을 추가해 주는 타사 JavaScript 기능

### 이용 방법

- [caniuse.com](http://caniuse.com) 검색 > Resource 탭
- `fetch` polyfill 서치하여 찾아보기

## 트랜스파일러

- 최신 코드를 구형 코드로 변환
- babel
    - @babel/preset-env: 어떤 기능이 어떻게 컴파일링 되는지를 제어하는 사전 설정
    
    ```jsx
    npminstall -D babel-loader @babel/core @babel/preset-env webpack
    ```
    
    | babel-loader | supported webpack versions | supported Babel versions | supported Node.js versions |
    | --- | --- | --- | --- |
    | 8.x | 4.x or 5.x | 7.x | >= 8.9 |
    | 9.x | 5.x | ^7.12.0 | >= 14.15.0 |