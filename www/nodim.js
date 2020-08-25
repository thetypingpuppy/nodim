function nodim() {
}

nodim.prototype.keepAwake = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "nodim", "keepAwake", []);
};

nodim.prototype.allowSleepAgain = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "nodim", "allowSleepAgain", []);
};

nodim.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.nodim = new nodim();
  return window.plugins.nodim;
};

cordova.addConstructor(nodim.install);