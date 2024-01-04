## 동기 코드 실행 이해하기(”Sync Code”)

- 자바스크립트는 단일 스레드이므로 코드가 위에서 아래로 순서대로 실행된다.
- 실행된 작업이 끝날 때까지 스크립트의 다른 실행이 모두 차단된다.

## 비동기 코드 실행 이해하기(”Async Code”)

- `setTimeout` 은 실행 중인 JavaScript코드에서 분리되어 브라우저에서 관리된다.
    
    👉브라우저는 해당 작업을 완료하면 다음 코드를 바로 실행시킬 수 있는 다중 스레드이다.
    
- 브라우저는 시간이 더 오래 소요되는 태스크가 메인 스레드의 작업을 차단하지 않도록 지원한다.

## 이벤트 반복문

1. 이벤트 리스너 함수는 지정되어있는 콜백함수를 브라우저에 전달
2. 브라우저는 메시지 대기열로 콜백함수를 보냄
3. 자바스크립트 엔진은 호출 스택에 함수를 넣고 순차적으로 실행
4. ❗**호출 스택이 비어있을 때** 이벤트 루프가 호출 스택으로 푸시
5. 이벤트 리스너 콜백함수 실행

👉 시간이 오래 걸리는 연산이나, 이벤트 리스너처럼 발생 위치나 발생 빈도를 알 수 없는 연산에 대해서는 브라우저로 전송시켜 JavaScript 코드를 차단하지 않도록 한다.

## Promise

- 단계 안의 단계가 아니라 단계 다음 단계로 만들어주어 콜백 지옥에서 벗어나게 해준다.
    
    ```jsx
    let positionData;
    getPosition()
        .then((posData) => {
          positionData = posData;
          return setTimer();
        })
        .then((data) => {
          console.log(data, positionData);
        });
    ```
    
    ### Promise 오류 처리
    
    - `.then(성공 시 실행 함수, 실패 시 실행 함수)`
    - `.catch(에러 객체)`
        - `catch` 블록 이전 또는 두 번째 인자로 추가한 위치 이전에 발생하는 모든 오류나 거부를 잡아낸다.
        - 전체 프로미스 체인을 취소하지 않고 제 역할을 수행한 뒤 프로미스로 감싸지게 될 다른 데이터를 반환할 수 있다.
            
            그 후 `then` 블록은 계속 작동한다.
            
        - `then` 블록에서 오류가 발생하면 `catch` 블록을 만날 때까지 모든 `then` 블록을 건너뛴다.
            - ❗프로미스 체인을 취소하고 싶다면 모든 `then` 블록의 끝으로 옮겨야 한다.
            
            ```jsx
            let positionData;
            getPosition()
                .then((posData) => {
                  positionData = posData;
                  return setTimer();
                })
            		.catch((err) => {
            			console.log(err);
            			return "on we go...";
            		})
                .then((data) => {
                  console.log(data, positionData);
                });
            }
            ```
            
    
    ### Promise 상태 & “finally”
    
    - **PENDING** => 프로미스가 작동 중이며`then()`이나 `catch()` 가 실행되지 않는다.
        - `catch()`나 `then()` 블록 다음에 또 다른 `then()` 블록이 있으면 프로미스가 **PENDING** 모드로 다시 들어간다.
    - **RESOLVED** ⇒ 프로미스가 해결 ⇒ `then()`이 실행
    - **REJECTED** ⇒ 프로미스가 거절 ⇒ `catch()`이 실행
    - **SETTLED** ⇒ 더 이상 `then()` 블록이 남아 있지 않은 경우
        - 특수 블록인 `finally()` 로 최종 정리 작업을 수행할 수 있다.
        - ❗이전에 해결됐든 거부됐든 상관없이 `finally()`로 도달