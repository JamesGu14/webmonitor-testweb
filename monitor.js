
var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
var curr_url = window.location.href.split('?')[0];
function guid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}


var _guid = guid();

window.onload = function pageLoaded() {
  var XHR = new XMLHttpRequest();  
  var TRACKPIX = {
    appid: "575e40fb48ecb35278f4d34a",
    api_key: "23d6bb71f4c85597cc2a33b6491f276543db2e7d9b17f3056965dd9ffcb78f00",
    rand_uuid: _guid,
    url: curr_url
  };

  var param = '';
  for(let key in TRACKPIX){
    param = param + key + '=' + TRACKPIX[key] + '&';
  }
  param = param.substr(0, param.length - 1);

  
  if(XHR) {
    XHR.open('POST', 'http://localhost:8000/visit', true);

    XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    XHR.send(param); 
  }
};

window.onbeforeunload = function doGet(){ 
  var XHR = new XMLHttpRequest();
  XHR.open('GET', 'http://localhost:8000/leave/' + _guid, true);
  XHR.send(null); 
}; 
