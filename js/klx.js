var Url = $request.url;
function setQueryString(key, val) { 
    var url = Url.split('?'), search=url[1];
    var query = {};
    if (search) {
        search.split('&').forEach((item) => {
            var arr = item.split('=');
            query[arr[0]] = arr[1];
        });
    }
    query[key] = val;
    var queryArr = [];
    for (var p in query) {
        queryArr.push(p + '=' + query[p]);
    }
    return url[0]+'?'+queryArr.join('&');
};
setQueryString("api_token","60ONiZRsgFEFpbGXBp8orRTm3avSET4WVwnzYRP8NoMTDBZeB8jr6tyy1BHNxYax");

Url = setQueryString("api_token","60ONiZRsgFEFpbGXBp8orRTm3avSET4WVwnzYRP8NoMTDBZeB8jr6tyy1BHNxYax");
Url = setQueryString("sign","f4d5833dc8183d7cd3e1c09a70ae7f07");
console.log(Url);

$done({ url:Url });
