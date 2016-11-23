Luosimao Captcha For AngularJS
=======================

## Getting started

This is a directive for AngularJS `^1.2.0`. And ease the way to display a luosimao captcha on your page.

If you plan to hack on the directives or want to run the example locally, first thing to do is to install NPM dependencies:

```shell
npm install
```

### Launch the demo

To run the demo page, just run

```shell
npm start
```

and open your browser on `http://localhost:8080/`.

### Example Html

```html
<lccaptcha lc-key="Your-Data-Site-Key" lc-width="100%" lc-verified="vm.captcha_verified(resp, LUOCAPTCHA)">
</lccaptcha>
```

```javascript
captcha_verified(response, LUOCAPTCHA) {
    this.captcha = response;
    this.luocaptcha = LUOCAPTCHA;
}
```

See `demo/` for more information.


### Usage
 
Use in your project:

```shell
npm install git://github.com/yoyokko/lc-captcha-angular.git --save
```

## LICENSE ##

[MIT License](https://raw.githubusercontent.com/leftstick/BaiduMapForAngularJS/master/LICENSE)
