const url = "http://ip-api.com/json/?fields=8450015&lang=zh-CN"
$httpClient.get(url, function(error, response, data){
if ($network.wifi.ssid){
var obj = JSON.parse(data);
        console.log(obj);
var title = "当前无线名称:" + $network.wifi.ssid;
var subtitle ="🌍"+obj.country+obj.city+"\xa0"+obj.query;
var desc="\xa0\xa0\xa0\xa0"+obj.as;
       $notification.post(title,subtitle,desc)
$done();} else {
var obj = JSON.parse(data);
        console.log(obj);
var title2 = "当前正在使用蜂窝数据";
var subtitle2 ="🌍"+obj.country+obj.city+"\xa0"+obj.query;
var desc2="\xa0\xa0\xa0\xa0"+obj.as;
$notification.post(title2,subtitle2,desc2)
$done();}});
