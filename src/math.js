// #1
// var math = math || {};
// console.log("1:", math);

// (function () {
//   // 함수 내부에 있는 sum 함수는(스코프는) 외부로부터 독립적이다.
//   function sum(a, b) {
//     console.log("2:", math);
//     return a + b;
//   }

//   console.log("3:", math);
//   // 외부에서 사용할 수 있는 여지를 주기 위한 코드
//   math.sum = sum;
// })();

// console.log("4:", math);

//#2
export function sum(a, b) {
  return a + b;
}
