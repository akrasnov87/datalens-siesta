describe({
    name : "New recording...",
    enablePageRedirect : true
}, function(t) {
    t.global.localStorage.clear();
    t.global.location.reload();

    var args = null;

    var embedUrl = null;
    var embedUrl_1 = null;

    t.chain(
        function(next) {
            t.harness.configLoad((data)=>{
                args = data;
                next();
            })
        },
        { click : "#root .g-text-input:nth-of-type(1) .g-text-input__control", desc: "Авторизация" },

        { type : "master[TAB][TAB]qwe-123", target : "#root .g-text-input:nth-of-type(1) .g-text-input__control" },

        { waitForPageLoad : [], trigger : { click : "#root .g-button__text" } },

        { click : "#root .dl-collection-content-table__content-row[href='/workbooks/z4wtz6tg5194o']" },

        { click : "#root .dl-content-row [title='Charts\: Area chart']" },

        { click : "#root .dl-entry-panel__action-btn .g-button__icon-inner > svg:nth-of-type(1)", offset : [17.484283447265625,12.217769622802734] },

        { click : ".g-menu__item-content:textEquals(Поделиться)" },

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
                t.global.location.href = embedUrl.replace('http://localhost:8080', args.pageUrl);
                next();
            },
            "desc": "Сброс авторизации и просмотр ссылки"
        },

        {
            click: ".chartkit-graph"
        },

        {
            action: function(next) {
                t.global.localStorage.clear();
                t.global.location.href = args.pageUrl + '/auth'

                next();
            },
            "desc": "Авторизация под master"
        },

        { click : "#root .g-text-input:nth-of-type(1) .g-text-input__control" },

        { type : "master[TAB][TAB]qwe-123", target : "#root .g-text-input:nth-of-type(1) .g-text-input__control" },

        { click : "#root .g-button__text"  },

        { click : "#root .dl-collection-content-table__content-row[href='/workbooks/z4wtz6tg5194o']" },

        { click : "#root .dl-content-row [title='Charts\: Area chart']" },

        { click : "#root .dl-entry-panel__action-btn .g-button__icon-inner > svg:nth-of-type(1)", offset : [17.484283447265625,12.217769622802734] },

        { click : ".g-menu__item-content:textEquals(Поделиться)" },
        
        {
            waitFor: 500
        },

        { click : ".g-button__text:textEquals(Обновить ссылку)" },

        {
            waitFor: 500
        },

        { click : ".g-button__text:textEquals(Продолжить)" },

        {
            waitFor: 500
        },

        {
            action: function(next) {
                embedUrl_1 = t.global.document.getElementsByClassName('dialog-share__text-field')[0].innerText.replace('http://localhost:8080', args.pageUrl);
                next();
            },
            desc: "Копирование ссылки"
        },

        {
            waitFor: 10000
        },

        {
            action: function(next) {
                t.global.localStorage.clear();
                t.global.location.reload();

                next();
            },
            "desc": "Сброс авторизации и просмотр старой ссылки"
        },

        {
            action: function(next) {
                t.global.location.href = embedUrl;

                next();
            },
            "desc": "Просмотр ссылки"
        },

        {
            waitFor: 1000
        },

        function(next) {
            t.selectorExists('.preview__loader', 'Ссылка не доступна');
            next();
        },

        {
            action: function(next) {
                t.global.localStorage.clear();
                t.global.location.reload();

                t.global.location.href = embedUrl_1;

                next();
            },
            "desc": "Сброс авторизации и просмотр старой ссылки"
        },

        {
            waitFor: 1000
        },

        function(next) {
            t.selectorExists('.chartkit-graph', 'График доступен');
            next();
        }
    )
});