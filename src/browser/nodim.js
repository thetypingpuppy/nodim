function notSupported() {
    console.log('nodim is not supported on the browser');
}

module.exports = {
    keepAwake: notSupported,
    allowSleepAgain: notSupported
};

require('cordova/exec/proxy').add('nodim', module.exports);
