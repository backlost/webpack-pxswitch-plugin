### Webpack-pxswitch-plugin

This is a webpack plugin used for px to rem switch personally. Because we wanted to switch px to rem finally when files are packaging. It's not convient to write rem directly and we have quite different base-font in our group.


### Usage

Bash install：

```shell
npm i -D webpack-pxswitch-plugin
```

webpack.config:

```javascript
const WebpackPxswitchPlugin =require('webpack-pxswitch-plugin')
...
plugins:[
  new WebpackPxswitchPlugin({
    fontsize:50,
  })
]
```
