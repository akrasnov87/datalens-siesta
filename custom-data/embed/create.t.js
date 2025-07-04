describe({
    name : "New recording...",
    enablePageRedirect : true
}, function(t) {
    t.harness.helperObj.resetPage(t);
    var chartName = 'Charts: Area chart';
    var LONG_TIMEOUT = 2500;
    //var args = null;

    var embedUrl = null;
    var embedUrl_1 = null;

    t.chain(
        t.harness.helperObj.loginHandler(
            t, 
            t.harness.helperObj.__NAMES__.MASTER.login, 
            t.harness.helperObj.__NAMES__.MASTER.password
        ),
        t.harness.helperObj.workbookOrCollectionClickHandler(
            t, 
            t.harness.helperObj.__NAMES__.DEFAULT_WORKBOOK_NAME
        ),

        t.harness.helperObj.entryClickHandler(
            t, 
            chartName
        ),

        t.harness.helperObj.entryActionsClickHandler(t),
        t.harness.helperObj.entryActionClickHandler(t, 'Поделиться'),
        { waitFor: LONG_TIMEOUT },

        {
            action: function(next) {
                embedUrl = t.global.document.getElementsByClassName('dialog-share__text-field')[0].innerText;
                next();
            },
            desc: "Копирование ссылки"
        },

        {
            action: function(next) {
                t.global.localStorage.clear();
                t.global.location.href = embedUrl.replace('http://localhost:8080', t.harness.__ARGUMENTS__.pageUrl);
                next();
            },
            desc: "Сброс авторизации и просмотр ссылки"
        },

        { waitFor: LONG_TIMEOUT },

        t.harness.helperObj.foundHandler(t, '.chartkit-graph'),

        t.harness.helperObj.goToPage(t, '/auth'),

        t.harness.helperObj.loginHandler(
            t, 
            t.harness.helperObj.__NAMES__.MASTER.login, 
            t.harness.helperObj.__NAMES__.MASTER.password
        ),

        t.harness.helperObj.workbookOrCollectionClickHandler(
            t, 
            t.harness.helperObj.__NAMES__.DEFAULT_WORKBOOK_NAME
        ),

        t.harness.helperObj.entryClickHandler(
            t, 
            chartName
        ),

        t.harness.helperObj.entryActionsClickHandler(t),
        t.harness.helperObj.entryActionClickHandler(t, 'Поделиться'),
        { waitFor: LONG_TIMEOUT },
        { click : ".g-button__text:textEquals(Обновить ссылку)" },
        { waitFor: LONG_TIMEOUT },
        { click : ".g-button__text:textEquals(Продолжить)" },
        { waitFor: LONG_TIMEOUT },

        {
            action: function(next) {
                embedUrl_1 = t.global.document.getElementsByClassName('dialog-share__text-field')[0].innerText.replace('http://localhost:8080', t.harness.__ARGUMENTS__.pageUrl);
                next();
            },
            desc: "Копирование ссылки"
        },
        { waitFor: LONG_TIMEOUT },

        t.harness.helperObj.resetAuthHandler(t),

        {
            action: function(next) {
                t.global.location.href = embedUrl;

                next();
            },
            desc: "Просмотр ссылки"
        },
        
        { waitFor: LONG_TIMEOUT },

        t.harness.helperObj.foundHandler(t, '.preview__loader'),

        {
            action: function(next) {
                t.global.localStorage.clear();
                t.global.location.reload();

                t.global.location.href = embedUrl_1;            //simulation          : 'native',

                next();
            },
            desc: "Сброс авторизации и просмотр старой ссылки"
        },

        { waitFor: LONG_TIMEOUT },

        t.harness.helperObj.foundHandler(t, '.chartkit-graph')
    )
});