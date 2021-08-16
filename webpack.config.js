const path = require("path");

// es6 모듈이 아니라, node가 사용하는 모듈 시스템이기 때문에 이런 키워드를 사용한다.
module.exports = {
  mode: "development",
  entry: {
    main: "./src/foo.js",
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",
  },
};
