- Chrome 개발자 도구(F12)에서 네트워크 탭에서 헤더와 페이로드에서 요청 정보를 확인할 수 있다.

## fetch() API

- 최신 기술.
- ⚠Internet Explorer 및 오래된 브라우저에서 사용할 수 없다.
- 이벤트 핸들러를 사용하지 않기 위해 고안되었다.
- 프로미스 기반 함수.

### .json()

- response 본문을 파싱하고, JSON에서 JavaScript 객체와 배열로 변환하는 작업을 한다.
    
    👉파싱 안 된 스트리밍 본문에서 파시오딘 스냅샷 본문으로 바꾼다.
    
    ```jsx
    return fetch(url).then(response => {
        return response.json(); // 파싱 불필요
    });
    
    // XMLHttpRequest
    xhr.onload = function () {
    	if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
    		reject(new Error("Something went wrong!"));
      }
    	const listOfPosts = JSON.parse(xhr.response); // 파싱 필요
    };
    ```
    

### 요청 헤더 추가

```jsx
return fetch(url, {
  method: method,
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json",
  },
}).then((response) => {
  return response.json();
});
```

### 오류 처리

- 오류 데이터에 대한 처리를 위해 내부 프로미스 체인에서 반환하여 fetch를 호출한 함수에서 `try{} catch () {}` 문으로 잡아낼 수 있도록 한다.
    
    ```jsx
    // function sendHttpRequest
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
    				// 반환
            return response.json().then((errData) => {
              console.log(errData);
              throw new Error("Something went wrong - server-side.");
            });
          }
        })
        .catch((error) => {
          console.log(error);
          throw new Error("Something went wrong!");
        });
    
    try {
    	// 호출
      const responseData = await sendHttpRequest();
    } catch (error) {
      alert(error);
    }
    ```
    

## XMLHttpRequest ⚔ fetch()

| XMLHttpRequest | fetch() |
| --- | --- |
| 과거 | 최신 |
| Internet Explorer 및 오래된 브라우저⭕ | ❌ |
| 복잡하다 | 쉽고 빠르다 |
| 오류 처리 직관적 | 복잡하다 |

## FormData()

- 포인터로 form DOM요소를 넣어주면 알아서 `name` 속성값을 매핑한다.
    
    ```html
    <form>
            <div class="form-control">
              <label for="title">Title</label>
              <input type="text" id="title" name="title" />
            </div>
            <div class="form-control">
              <label for="content">Content</label>
              <textarea rows="3" id="content" name="body"></textarea>
            </div>
            <button type="submit">ADD</button>
    </form>
    ```
    
    ```jsx
    const fd = new FormData(form);
      // 간단히 세번째 인자로 파일도 전송할 수 있다.
    	// form 요소에 없는 name값도 append로 추가할 수 있다.
      fd.append("userId", userId);
    ```