# react-fade-image
> Fade or lazy image for react

## properties:
```javascript
BACKUP_PROPERTIES
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
BACKUP_USAGE
```

## skills:
+ 当图片没有 src 时，有 1px 边框无法移除
  - 解决方式： 用 blank.gif 占位 - 可行
  - 解决方式： 用 content:''; 不行
+ 用 transition 做动画，会出现卡顿，这里改用 animation

