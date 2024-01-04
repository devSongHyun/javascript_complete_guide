const button = document.querySelector("button");
const output = document.querySelector("p");

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      },
      opts
    );
  });
  return promise;
};

const setTimer = (duration) => {
  // 내장 API를 프로미스화
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, duration);
  });
  return promise;
};

async function trackUserHandler() {
  // let positionData;
  const posData = await getPosition();
  const timerData = await setTimer(2000);
  console.log(timerData, posData);
    // .then(
    //   (posData) => {
    //     positionData = posData;
    //     return setTimer(2000);
    //   }
    // )
    // .catch((err) => {
    //   console.log(err);
    //   return "on we go...";
    // })
    // .then((data) => {
    //   console.log(data, positionData);
    // });
  // 실행 순서 - 2: 타이머는 0초이더라도 호출 스택에 존재하는 console.log가 완료되어야지만 실행할 수 있다.
  // setTimer(1000).then(() => {
  //   console.log("Timer done!");
  // });
  // Track Me!를 눌렀을 때 자바스크립트의 방해 없이 바로 실행
  // 실행 순서 - 1
  // console.log("Getting position...");
}

button.addEventListener("click", trackUserHandler);

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
