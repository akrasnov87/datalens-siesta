describe({
    name : "New recording...",
    enablePageRedirect : true
}, function(t) {
    t.global.localStorage.clear();
    t.global.location.reload();
    
    var args = null;
    var pageUrl = null;

    t.chain(
        function(next) {
            t.harness.configLoad((data)=>{
                args = data;
                pageUrl = data.pageUrl
                next();
            })
        },
        { click : "#root .g-text-input:nth-of-type(1) .g-text-input__control", desc: "Авторизация" },

        { type : "master[TAB][TAB]qwe-123", target : "#root .g-text-input:nth-of-type(1) .g-text-input__control" },

        { waitForPageLoad : [], trigger : { click : "#root .g-button__text" } },

        {
            action: function(next) {
                t.global.location.href = pageUrl + '/admin/projects';
                next();
            },
            desc: "Переход"
        },
        {
            type: ".g-text g-text_variant_header-1 base-admin__title:textEquals(Проекты)", desc: "Раздел доступен"
        },
        {
            action: function(next) {
                t.global.localStorage.clear();
                t.global.location.reload();
                next();
            },
            "desc": "Авторизация под admin"
        },

        { click : "#root .g-text-input:nth-of-type(1) .g-text-input__control" },

        { type : "admin[TAB][TAB]qwe-123", target : "#root .g-text-input:nth-of-type(1) .g-text-input__control" },

        { waitForPageLoad : [], trigger : { click : "#root .g-button__text" } },

        {
            action: function(next) {
                t.global.location.href = pageUrl + '/admin/projects';
                next();
            },
            desc: "Переход"
        },
        {
            type: ".dl-collections-navigation-layout__header-title:textEquals(Проекты)", desc: "Раздел  недоступен"
        },

        {
            action: function(next) {
                t.global.localStorage.clear();
                t.global.location.reload();
                next();
            },
            "desc": "Авторизация под user"
        },

        { click : "#root .g-text-input:nth-of-type(1) .g-text-input__control" },

        { type : "user[TAB][TAB]qwe-123", target : "#root .g-text-input:nth-of-type(1) .g-text-input__control" },

        { waitForPageLoad : [], trigger : { click : "#root .g-button__text" } },

        {
            action: function(next) {
                t.global.location.href = pageUrl + '/admin/projects';
                next();
            },
            desc: "Переход"
        },
        {
            type: ".dl-collections-navigation-layout__header-title:textEquals(Проекты)", desc: "Раздел  недоступен"
        }
    )
});