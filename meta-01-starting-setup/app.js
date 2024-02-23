// 라이브러리 영역
const uid = Symbol("uid");
console.log(uid);

const user = {
  // id: 'p1',
  [uid]: "p1",
  name: "Max",
  age: 30,
  [Symbol.toStringTag]: "User",
};

user[uid] = "p3";

// 앱 영역 => 라이브러리를 사용

user.id = "p2"; // 불가능한 행동이여야 한다.

console.log(user[Symbol("uid")]);

console.log(Symbol("uid") === Symbol("uid"));

console.log(user.toString());

const company = {
  // curEmployee: 0,
  employees: ["Max", "Manu", "Anna"],
  // next() {
  //   if (this.curEmployee >= this.employees.length) {
  //     return { value: this.curEmployee, done: true };
  //   }
  //   const returnValue = {
  //     value: this.employees[this.curEmployee],
  //     done: false,
  //   };
  //   this.curEmployee++;
  //   return returnValue;
  // },
  [Symbol.iterator]: function* employeeGenerator() {
    // let employee = company.next();

    // while(!employee.done) {
    //   yield employee.value;
    //   employee = company.next();
    // }
    let currentEmployee = 0;
    while(currentEmployee < this.employees.length) {
      yield this.employees[currentEmployee];
      currentEmployee++;
    }
  }
};

// let employee = company.next();

// while(!employee.done) {
//   console.log(employee.value);
//   employee = company.next();
// }

for (const employee of company) {
  console.log(employee);
}

console.log([...company])

// const it = company.getEmployee();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

const course = {
  title: "JavaScript - The Complete Guide"
}

Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  }
});

// Reflect.deleteProperty(course, "title");

// Object.deleteProperty(course, 'title'); 존재하지 않는 함수

// delete course.title;

console.log(course);

const courseHandler = {
  get(obj, propertyName) {
    console.log(propertyName);
    if (propertyName === "length") {
      return 0;
    }
    return obj[propertyName] || "NOT FOUND";
  }
};

// course 객체를 다른 객체로 래핑
const pCourse = new Proxy(course, courseHandler);
console.log(pCourse.title);
console.log(course, pCourse, pCourse.length, pCourse.rating);