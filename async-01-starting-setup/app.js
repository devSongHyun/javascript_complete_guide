const button = document.querySelector("button");
const output = document.querySelector("p");

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    (posData) => {
      // 바깥의 위치 구하는 콜백 함수가 실행되어야 타이머 실행
      setTimeout(() => {
        console.log(posData);
      }, 2000);
    },
    (error) => {
      console.log(error);
    }
  );
  // 실행 순서 - 2: 타이머는 0초이더라도 호출 스택에 존재하는 console.log가 완료되어야지만 실행할 수 있다.
  setTimeout(() => {
    console.log("Timer done!");
  }, 0);
  // Track Me!를 눌렀을 때 자바스크립트의 방해 없이 바로 실행
  // 실행 순서 - 1
  console.log("Getting position...");
}

button.addEventListener("click", trackUserHandler);

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
