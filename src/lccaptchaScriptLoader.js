
export const loader = function(callback) {
    var SCRIPT_URL = `//captcha.luosimao.com/static/dist/api.js`;

    function onload(){
        callback();
    };
    var scriptHeat = document.createElement('script');
    scriptHeat.type = 'text/javascript';
    scriptHeat.src = SCRIPT_URL;
    scriptHeat.onload = onload;
    document.body.appendChild(scriptHeat);

    var scriptResponse = document.createElement('script');
    scriptResponse.type = 'text/javascript';
    var code = 'function luosimaoCaptchaResponse(response) { \
        angular.element("#luosimao-captcha").scope().getResponse(response); \
    };'
    scriptResponse.text = code;
    document.body.appendChild(scriptResponse);
};
