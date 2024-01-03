const button = document.querySelector("button");
const output = document.querySelector("p");

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    (posData) => {
      console.log(posData);
    },
    (error) => {
      console.log(error);
    }
  );
  // Track Me!를 눌렀을 때 자바스크립트의 방해 없이 바로 실행
  console.log("Getting position...");
}

button.addEventListener("click", trackUserHandler);

let result = 0;

for (let i = 0; i < 100000000; i++) {
  result += i;
}

console.log(result);
