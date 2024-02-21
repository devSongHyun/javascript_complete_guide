// 라이브러리 영역
const uid = Symbol('uid');
console.log(uid);

const user = {
  // id: 'p1',
  [uid]: 'p1',
  name: 'Max',
  age: 30
};

user[uid] = 'p3';

// 앱 영역 => 라이브러리를 사용

user.id = 'p2'; // 불가능한 행동이여야 한다.

console.log(user[Symbol('uid')]);

console.log(Symbol('uid') === Symbol('uid'));

console.log(user);