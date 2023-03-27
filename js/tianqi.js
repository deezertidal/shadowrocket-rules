const apiurl = "https://v0.yiketianqi.com/api?unescape=1&version=v62&appid=79171417&appsecret=LP9yfUKd";

const isQuantumultX = typeof $task != "undefined";
const isSurge = typeof $httpClient != "undefined";
const isLoon = typeof $loon != "undefined";

function getWeatherData() {
    if (isQuantumultX) {
        $task.fetch({ url: apiurl }).then(response => {
            showNotification(response.body);
        }, reason => {
            console.log(reason.error);
            $done();
        });
    } else if (isSurge || isLoon) {
        $httpClient.get(apiurl, function (error, response, data) {
            if (error) {
                console.log(error);
                $done();
            } else {
                showNotification(data);
            }
        });
    }
}

function showNotification(data) {
    var obj = JSON.parse(data);
    var title = obj.city+"天气预报";
    var subtitle = "下拉查看未来10小时天气";
    var body = "今日天气: " + obj.wea + "，温度: " + obj.tem + "°C" + '\n';

    for (var i = 0; i < 10; i++) {
        var forecast = obj.hours[i];
        body += forecast.hours + ": " + forecast.wea + ", " + forecast.tem + "°C" + '\n';
    }

    if (isQuantumultX) {
        $notify(title, subtitle, body);
    } else if (isSurge || isLoon) {
        $notification.post(title, subtitle, body);
    }
    $done();
}

getWeatherData();
