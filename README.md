# react-fade-image
> Fade or lazy image for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-fade-image
```

## usage
1. import css
  ```scss
  @import "~@jswork/react-fade-image/dist/style.css";

  // or use sass
  @import "~@jswork/react-fade-image/dist/style.scss";
  ```
2. import js
  ```js
  import ReactFadeImage from '@jswork/react-fade-image';
  import '@jswork/react-fade-image/dist/style.scss';

  function App() {
    return (
      <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
        <div className="badge badge-warning absolute right-0 top-0 m-4">
          Build Time: {BUILD_TIME}
        </div>
        <div className="x-2">
          <ReactFadeImage className="w-100 mx-auto" src="https://picsum.photos/id/237/200/300" />
          <ReactFadeImage className="w-100 mx-auto" src="https://picsum.photos/id/100/200/300" />
          <ReactFadeImage className="w-100 mx-auto" src="https://picsum.photos/id/101/200/300" />
          <ReactFadeImage className="w-100 mx-auto" src="https://picsum.photos/id/102/200/300" />
        </div>
      </div>
    );
  }

  export default App;
  ```

## preview
- https://afeiship.github.io/react-fade-image/

## license
Code released under [the MIT license](https://github.com/afeiship/react-fade-image/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-fade-image
[version-url]: https://npmjs.org/package/@jswork/react-fade-image

[license-image]: https://img.shields.io/npm/l/@jswork/react-fade-image
[license-url]: https://github.com/afeiship/react-fade-image/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-fade-image
[size-url]: https://github.com/afeiship/react-fade-image/blob/master/dist/react-fade-image.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-fade-image
[download-url]: https://www.npmjs.com/package/@jswork/react-fade-image
