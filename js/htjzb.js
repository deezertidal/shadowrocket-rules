var obj = JSON.parse($response.body);
 obj={
 "data": {
  "level": 2,
  "status": 1,
  "openTime": "2212-12-12",
  "startTime": "2212-12-12",
  "endTime": "2212-12-12",
  "shareToken": ""
 },
 "code": 0,
 "msg": "返回成功"
};
$done({body: JSON.stringify(obj)});
//
