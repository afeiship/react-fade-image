# react-fade-image
> Fade or lazy image for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @feizheng/react-fade-image
```

## update
```shell
npm update @feizheng/react-fade-image
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| lazy      | bool   | false    | false   | If set lazy load mode.                |
| once      | bool   | false    | false   | Lazy only once.                       |
| onChange  | func   | false    | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-fade-image/dist/style.scss";

  // customize your styles:
  $react-fade-image-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@feizheng/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactFadeImage from '@feizheng/react-fade-image';
  import './assets/style.scss';

  class App extends React.Component {
    state = {
      lazyValue: true
    };

    handleClick = () => {
      this.setState({ lazyValue: false });
    };

    render() {
      const { lazyValue } = this.state;
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-fade-image">
          <button className="button" onClick={this.handleClick}>
            Trigger Load Image
          </button>
          <div className="list">
            <p>
              <ReactFadeImage src="https://imglf4.nosdn.127.net/img/KzNuMlRKSFVENitYYjJBYnU5Q2cwQjRjd0ljSURUWmxZeGxvWVlOYnhHZWRReFBoUVJWUXFRPT0.jpg?imageView&thumbnail=1680x0&quality=96&stripmeta=0&type=jpg" />
            </p>
            <p>
              <ReactFadeImage
                lazy={lazyValue}
                src="https://imglf6.nosdn.127.net/img/ZWl4dnBUa0VLMzhXRThRbnV3UWlQelY1dGNPeUdQMUhib2IwOEVvTEhvUTRISnUwNmkwekV3PT0.jpg?imageView&thumbnail=3000y2000&type=jpg&quality=96&stripmeta=0&type=jpg%7Cwatermark&type=2&text=wqkgeHVlc2h1wrdBcnRvbW8gLyA3NzQzNzQ2NTUubG9mdGVyLmNvbQ==&font=bXN5aA==&gravity=southwest&dissolve=30&fontsize=680&dx=32&dy=36&stripmeta=0"
              />
            </p>
            <p>
              <ReactFadeImage
                lazy={lazyValue}
                src="http://imglf5.nosdn.127.net/img/K0FrVGtpUSszZU1kODV6SzZUSFZaNFhGaEliU29uSmJzL3lXdUpoK3ZLdjMyNWp1OWJTRnB3PT0.jpg?imageView&thumbnail=3000y1687&type=jpg&quality=96&stripmeta=0&type=jpg"
              />
            </p>
          </div>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-fade-image/


## license
Code released under [the MIT license](https://github.com/afeiship/react-fade-image/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/react-fade-image
[version-url]: https://npmjs.org/package/@feizheng/react-fade-image

[license-image]: https://img.shields.io/npm/l/@feizheng/react-fade-image
[license-url]: https://github.com/afeiship/react-fade-image/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/react-fade-image
[size-url]: https://github.com/afeiship/react-fade-image/blob/master/dist/react-fade-image.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/react-fade-image
[download-url]: https://www.npmjs.com/package/@feizheng/react-fade-image
