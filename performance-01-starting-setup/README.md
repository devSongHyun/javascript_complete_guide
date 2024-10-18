## 성능

JavaScript 뿐만 아니라 CSS, HTML 코드 등 웹 페이지를 방문하고 사용할 때 관련된 모든 것

### 시작 시간 - Browser-side JS

1. 화면에서 무언가를 보는 데 걸리는 시간
2. 사용자가 페이지와 상호 작용할 수 있는 속도에 관한 시간
3. Node.js가 있는 서버 측 JavaScript는 이미 실행될 서버에 코드가 있으므로 전체 시작 시간은 서버 측에서 문제가 되지 않는다.

### 런타임 성능 - All JS

1. 얼마나 매끄럽게 작동하는지(가끔 멈추거나 지연되지 않는지)
2. 애니메이션이 매끄럽게 재생되지 않는지
3. 메모리 누수가 있는지

## 성능 개선

### 시작 시간

1. JavaScript 파일의 크기
2. HTTP 왕복의 양

### 런타임

1. 코드 실행 최적화: 효율적인 코드 작성
2. DOM 접근: 불필요한 DOM 작업 피하기
3. 메모리 누수
4. 더 나은 성능을 갖춘 코드 찾기
5. 마이크로 최적화
    1. 배열을 반복할 때 두 가지 다른 방법 중 빠른 방법을 사용하기

## 성능 측정

- 추측하지 말고 측정하기
- https://jsperf.app/

## Chrome 개발자 도구

- Network 탭: 인터넷 속도를 낮추어 시뮬레이션을 할 수 있다.
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/9bab7ae3-3494-4a1b-abd1-80ae98c8af73/641235ae-0009-4dbe-88f6-d8874372cf5e/Untitled.png)
    
- Performance탭: CPU 스로틀링
    - 복잡한 스크립트, 애니메이션, 상호 작용이 많은 페이지의 경우 문제가 있는지 확인
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/9bab7ae3-3494-4a1b-abd1-80ae98c8af73/591107b6-3bba-4887-8bf4-ff92f6159129/Untitled.png)
    
- https://web.dev/articles/optimize-javascript-execution?hl=ko
- https://developer.chrome.com/docs/devtools?hl=ko
- Coverage탭: 사용되지 않는 JavaScript 코드 양을 확인할 수 있다.
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/9bab7ae3-3494-4a1b-abd1-80ae98c8af73/ba44f2c0-02df-4fa4-9104-0bce2b0c1f47/Untitled.png)
    

## 메모리 누출

- 개발자도구의 Memory 탭에서 스냅샷을 찍어 확인할 수 있다.
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/9bab7ae3-3494-4a1b-abd1-80ae98c8af73/4e2444dd-56b4-4731-95d4-b134587ea5aa/image.png)
    

## 기타

- getElementById가 quersySeelector보다 속도가 빠르다.
- 현재 A방법이 B방법보다 느려도 시간에 따라 추월할 수 있다. → 결국 가독성 좋고 짧은 코드를 작성하자.