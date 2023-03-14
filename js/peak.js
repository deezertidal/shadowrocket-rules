let Premium = $response.body
var modified = JSON.parse(Premium);
modified = {
  "response" : {
    "bbuid" : "jwDeFNKzxk",
    "usedIntroOfferPeriod" : false,
    "class" : "UserModuleBillingResponse",
    "is_in_billing_retry" : false,
    "modules" : [
      {
        "class" : "BillingModuleResponse",
        "name" : "com.brainbow.module.peak.PeakModule",
        "subscription" : {
          "status" : 0,
          "statusdate" : 0,
          "source" : {
            "id" : "com.brainbow.peak.arsub_1wtrial_12m3499",
            "cancelable" : false,
            "provider" : "itunes",
            "type" : "trial"
          },
          "bbuid" : "jwDeFNKzxk",
          "endTime" : 4070880000000,
          "startTime" : 1672502400000,
          "pro" : true
        }
      }
    ]
  },
  "metaResponse" : {
    "code" : 0
  }
};
$done({body:JSON.stringify(modified)});
