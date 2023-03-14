var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip1 = '/apps';
/***const pay1 = '/abtest';***/
/**const pay2 = '/ucapp/getUserSVip';**/

if (url.indexOf(vip1) != -1) {
    obj = {
  "receive_receipts_enable" : true,
  "uses_provisional_auth" : true,
  "outcomes" : {
    "direct" : {
      "enabled" : true
    },
    "indirect" : {
      "enabled" : true,
      "notification_attribution" : {
        "limit" : 10,
        "minutes_since_displayed" : 60
      }
    },
    "unattributed" : {
      "enabled" : true
    }
  }
}
     body = JSON.stringify(obj);
}

$done({body});
