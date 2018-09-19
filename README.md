# react-fade-image
> Fade or lazy image for react

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.bool
  };

  static defaultProps = {
    onChange: noop,
    value: false
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-fade-image --registry=https://registry.npm.taobao.org
```

```js
import ReactFadeImage from 'react-fade-image';
```

```scss
// customize your styles:
$react-fade-image-options:(
);

@import 'node_modules/react-fade-image/dist/style.scss';
```


## usage:
```jsx

// install: npm install afeiship/react-fade-image --save
// import : import ReactFadeImage from 'react-fade-image'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-react-fade-image">
        <ReactFadeImage value={false} src="http://imglf4.nosdn.127.net/img/KzNuMlRKSFVENitYYjJBYnU5Q2cwQjRjd0ljSURUWmxZeGxvWVlOYnhHZWRReFBoUVJWUXFRPT0.jpg?imageView&thumbnail=1680x0&quality=96&stripmeta=0&type=jpg" ref='rc' />
      </div>
    );
  }
}

```
