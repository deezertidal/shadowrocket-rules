url = $request.url;
let obj = JSON.parse($response.body);
 obj= {
  "responseCode" : "0000",
  "result" : {
    "days" : 9999,
    "trialPeriod" : true,
    "autoRenew" : false,
    "paySuccess" : true,
    "sandbox" : true,
    "expireDate" : 1867418130000
  },
  "success" : true,
  "responseMsg" : "成功"
};
$done({body:JSON.stringify(obj)});
