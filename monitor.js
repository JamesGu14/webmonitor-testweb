
function _senso_guid() {
  return _senso_s4() + _senso_s4() + '-' + _senso_s4() + '-' + _senso_s4() + '-' +
    _senso_s4() + '-' + _senso_s4() + _senso_s4() + _senso_s4();
}

function _senso_s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}


var _guid = _senso_guid();

window.onload = function pageLoaded() {
  var XHR = new XMLHttpRequest();  
  var TRACKPIX = {
    appid: "57823745b7ea84c24686bf03",
    api_key: "f99ce062882857f8fd0a7c02097af16ad7897fb338b27de65cd445a80b072038",
    rand_uuid: _guid,
    url: window.location.href.split('?')[0]
  };

  var param = '';
  for(let key in TRACKPIX){
    param = param + key + '=' + TRACKPIX[key] + '&';
  }
  param = param.substr(0, param.length - 1);

  
  if(XHR) {
    XHR.open('POST', 'http://120.24.234.208/visit', true);

    XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    XHR.send(param); 
  }
};

window.onbeforeunload = function doGet(){ 
  var XHR = new XMLHttpRequest();
  XHR.open('GET', 'http://120.24.234.208/leave/' + _guid, true);
  XHR.send(null); 
}; 
