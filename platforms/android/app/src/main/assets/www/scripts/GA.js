var isMobileDevice = isMobile();
var appId = 'UA-117114226-1';

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

if (isMobileDevice) {
    // THIS IS FOR LOCALSTORAGE
    var GA_LOCAL_STORAGE_KEY = 'ga:clientId';
    ga('create', appId, {
        'storage': 'none',
        'clientId': localStorage.getItem(GA_LOCAL_STORAGE_KEY)
    });
    ga(function (tracker) {
        localStorage.setItem(GA_LOCAL_STORAGE_KEY, tracker.get('clientId'));
    });

    // THIS IS FOR FILE URL SUPPORT
    ga('set', 'checkProtocolTask', function () { /* noop */ });

} else {
    ga('create', appId, 'auto');
}
