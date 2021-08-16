// 절대경로 path 모듈
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
    // main2: "./src/sample.js"
    // 엔트리가 여러개일 수 있는데 그럴 때 아웃풋도 여러개를 받을 수 있다. [name].js (엔트리는 여러 개 모듈들과 의존 관계에 있고 첫번째 시작점을 기준으로 나타낸다. )
    // 시작 점을 기준으르 모든 모듈들을 찾아서 하나의 파일로 번들링해준다. 번들링한 결과를 output에 설정해준다.
  },
  output: {
    path: path.resolve("./dist"), // 절대경로
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        /// 로더가 처리해야할 패턴(정규표현식),
        test: /\.js$/, // .js 확장자를 가진 모든 파일
        // 사용할 로더 설정
        use: [path.resolve("./my-webpack-loader.js")],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // 순서는 뒤에서 부터 앞으로 순
      },
      {
        test: /\.(svg|gif|jpg|png)$/,
        loader: "url-loader",
        options: {
          publicPath: "./dist/", // 경로 앞에 추가되는 경로 앞에 ,/dist가 오고 그 다음 경로가 옴
          name: "[name].[ext]?[hash]", // 파일로더가 파일 아웃풋에 복사할 때 사용하는 파일이름(원본파일명, 확장자, 캐시 무력화를 위해서 매번 다른 해쉬값을 입력)
          limit: 20000, // 2kb 미만의 파일은 url-loader로 base64로 변환(자바스크립트 문자열), 이상일 경우 file-loader로 실행(파일 복사)
        },
      },
    ],
  },
};
