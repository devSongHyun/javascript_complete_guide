## 심볼

```javascript
const sym1 = Symbol();
const sym2 = Symbol();
const sym3 = Symbol('foo');
```

- 변경이 불가능한 원시 값
- 인자로 전달하는 문자열은 일종의 설명문으로 오직 디버깅 용도로만 사용
- Symbol() 호출할 때마다 새로운 심볼이 생성
    
    ```javascript
    sym1 === sym1 // true
    sym1 === sym2 // false
    sym2 === sym3 /// false
    ```
    
- 프로퍼티 키로 사용될 수 있다.
    
    → 심볼은 항상 고유하기 때문에 다른 어떤 프로퍼티와 충돌하지 않는다.
    
    ```javascript
    const obj = {};
    obj[sym1] = 'value1';
    obj[sym3] = 'value2';
    
    console.log(obj); // {Symbol(): 'value1', Symbol(foo): 'value2'}
    ```
    

### 내장 심볼(Built-in Symbol)

- JavaScript 엔진 내에 미리 생성되어 상수로 존재하는 심볼
- `Symbol.toStringTag`
- `Symbol.iterator`
    - `function*` 제너레이터 함수를 실행하면 next 메서드를 가진 반복자 객체가 생성
    - `yiled` return과 비슷하지만 제너레이터 함수 내에서 실행을 잠시 멈추어 next 메서드에 대한 모든 호출의 반환값을 정의
        - yield에 도달할 때마다 JavaScript는 그 시점까지의 실행 상태를 저장 후 다음번에 next 메서드를 호출하면 그 지점부터 이어서 실행

## 리플렉션 API

- 객체를 구성하고 작업하는 데 필요한 모든 메서드들을 그룹화
    - 내가 만든 객체의 toString 함수를 만들어준다거나, 프로퍼티를 설정해주는 등..
- Object API와 비슷하나, 비교적 더 최신
    - 메서드가 작동에 실패하면 에러, True, False를 반환하여 작동 여부를 알려준다.

### Reflect.deleteProperty

- 과거 `delete` 연산자로 속성을 삭제해야했다.

```javascript
Reflect.deleteProperty(course, 'title');
// delete course.title;
```

## 프록시 API

- 특정 개체의 연산을 위해 트랩을 만든다.
- 예를 들어 외부 사용자가 내 라이브러리에 존재하는 객체에 잘못된 속성으로 접근할 때 가로채어 수행할 연산을 지정할 수 있다.
- 트랩은 여러 가지가 존재하므로 API 문서를 참고
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#a_complete_traps_list_example