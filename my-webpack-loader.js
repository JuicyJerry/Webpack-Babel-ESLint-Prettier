module.exports = function myWebpackLoader(content) {
  // 현재 적용되는 파일들이 2개라 2번 찍힘
  //   console.log("myWebpackLoader가 동작함");

  return content.replace("console.log(", "alert(");
};
