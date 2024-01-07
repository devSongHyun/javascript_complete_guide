## export

- JavaScript 내장 키워드로, 이 모듈 안에 있는 본 클래스를 다른 파일에서도 사용할 것이라는 신호를 보낸다.

```jsx
export 클래스, 함수...
// 무기명 내보내기: 모두 다른 이름으로 가져오기 때문에 팀 협업에 불편할 수 있다.
export default class
```

## serve

- 정적 파일을 제공하거나 웹 애플리케이션을 호스팅하는 데 사용되는 Node.js 패키지
- 설치
    
    ```jsx
    npm install -g serve
    ```
    

## import

```jsx
import { 클래스, 함수 } '경로/파일명.js'
import { 클래스, 함수 as 별칭 } '경로/파일명.js'
// js 파일 내 모든 내보내기 항목들을 별칭 객체에 담아서 가져올 수 있다.
import * as 별칭 '경로/파일명.js'
// 기명, 무기명 가져오기를 동시에 할 수 있다.
import 클래스, { 함수 } from '경로/파일명.js'
```

## 동적 임포트

- 큰 파일들의 경우 필요할 때만 가져오기 하여 속도를 향상할 수 있다.
    
    ```jsx
    showMoreInfoHandler() {
    	...
    	import('./Tooltip.js').then(module => {const tooltip = new module.Tooltip()});
    }
    ```
    

## 모듈 코드 실행 시점

- ⭐모듈 안의 코드는 모듈을 두 번 임포트 또는 동적 임포트 하더라도 처음으로 임포트 및 로드될 때만 실행

## 모듈 스코프

- 모듈은 엄격모드로 실행되어 `this` 가 `undefined` 를 표시
- 모듈 파일의 최상위 계층에서 뭐든지 정의되면 그 파일 안에서만 머무르도록 해주는 특별한 모듈 스코프 존재

### globalThis

- `this` 대신 사용하며 전역 객체를 가르킨다.
- window를 사용할 수 없는 브라우저 측과 Node.js 측 둘 다에서 JavaScript에서 사용 가능