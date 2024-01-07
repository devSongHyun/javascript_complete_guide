- `npm i` 는 `npm install —save`와 같다.
- `import from` 시 ..나 ../로 시작하지 않을 경우 webpack은 node_modules 폴더에서 패키지를 가져온다.

## ESLint

### eslint —init

- 명령어 에러가 날 경우 글로벌 옵셥(`-g`)으로 설치
- 해당 프로젝트 경로로 `cd` 명령어를 통해 이동했는지 확인
    
    ```jsx
    npm i eslint -g --save-dev
    ```
    

## Webpack

- Webpack은 JavaScript 애플리케이션을 위한 모듈 번들러로, 여러 모듈 및 리소스를 하나로 묶어주는 역할
- 웹 개발에서 프론트엔드 코드를 관리하고 최적화하는 데 도움을 주는 강력한 도구 중 하나이며 주로 모듈 시스템을 사용하는 프로젝트에서 자바스크립트, CSS, 이미지 등 여러 종류의 파일을 처리
- 코드를 수정할 때마다 자동으로 브라우저를 새로 고쳐주는 개발 서버를 제공
- npm 패키지 설치 시 생성되는 `package.json`을 통해 사용하도록 선언해준다.
    
    ```jsx
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack",
        "build:dev": "webpack-dev-server"
    }
    ```
    

### webpack.config.js

- webpack 설정 파일
- `devtool`을 통해 개발자 도구에서 원본 소스코드를 불러올 수 있도록 하여 디버깅을 편리하게 할 수 있다.(https://webpack.js.org/configuration/devtool/#devtool)
    
    ```jsx
    module.exports = {
      mode: 'development',
      entry: './src/app.js',
      output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'assets', 'scripts'), // __dirname: 현재 경로에 대한 액세스
        publicPath: 'assets/scripts/'
      },
      devtool: 'cheap-module-eval-source-map'
      // devServer: {
      //   contentBase: './'
      // }
    };
    ```
    

### build

```jsx
// package.json 설정에 따라
npm run build
npm run build:dev
```

- ⚠최신 Node.js를 사용하는 경우 `set NODE_OPTIONS=--openssl-legacy-provider` 명령어를 터미널에 입력해주어야 한다.

### CleanPlugin

- webpack.config에서 사용된다.
- `npm run build` 시 사용되지 않는 이전 build 파일들을 제거해준다.

### contenthash

- 파일이 변경될 때마다 해시코드로 파일명을 바꾸어준다
    
    👉브라우저가 다시 다운로드하게 된다.
    
    ```jsx
    output: {
    		...
        filename: '[contenthash].js'
    		...
    }
    ```
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/9bab7ae3-3494-4a1b-abd1-80ae98c8af73/2b97cca0-5d00-405a-ba3a-cdf96c520882/Untitled.png)