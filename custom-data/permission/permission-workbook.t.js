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

        { type : "master[TAB]qwe-123", target : "#root .g-text-input:nth-of-type(1) .g-text-input__control" },

        { waitForPageLoad : [], trigger : { click : "#root .g-button__text" } },

        { click : "#root .dl-collection-content-table__content-row[href='/workbooks/z4wtz6tg5194o'] div:nth-of-type(5) button.g-button", offset : [5.02606201171875,6.3370361328125], desc: "Назначение прав" },

        { click : ".dl-collection-dropdown-action__text:textEquals(Доступ)" },

        { click : ".g-table__row .g-table__cell_edge-padding:textEquals(Пользователь)~.g-table__cell_edge-padding:nth-of-type(2) .g-checkbox__control" },

        { click : ".g-table__row .g-table__cell_edge-padding:textEquals(Администратор)~.g-table__cell_edge-padding:nth-of-type(2) .g-checkbox__control" },

        { moveCursorTo : ".g-button__text:textEquals(Сохранить)", offset : [33,10] },

        { click : ".g-dialog .g-button__text:textEquals(Сохранить)" },

        {
            action: function(next) {
                t.global.localStorage.clear();
                t.global.location.reload();
                next();
            },
            "desc": "Авторизация под admin"
        },

        { click : "#root .g-text-input:nth-of-type(1) .g-text-input__control" },

        { type : "admin[TAB]qwe-123", target : "#root .g-text-input:nth-of-type(1) .g-text-input__control" },

        { waitForPageLoad : [], trigger : { click : "#root .g-button__text" } },

        { click : "#root .dl-collection-content-table__content-row[href='/workbooks/z4wtz6tg5194o'] div:nth-of-type(5) button.g-button", desc: "Назначение прав отсутствует" },

        t.harness.helperObj.notFoundHandler(t, ".dl-collection-dropdown-action__text:textEquals(Доступ)"),

        {
            action: function(next) {
                t.global.localStorage.clear();
                t.global.location.reload();
                next();
            },
            "desc": "Авторизация под user"
        },

        { click : "#root .g-text-input:nth-of-type(1) .g-text-input__control" },

        { type : "user[TAB]qwe-123", target : "#root .g-text-input:nth-of-type(1) .g-text-input__control" },

        { waitForPageLoad : [], trigger : { click : "#root .g-button__text" } },

        { click : "#root .dl-collection-content-table__content-row[href='/workbooks/z4wtz6tg5194o'] div:nth-of-type(5) button.g-button", desc: "Назначение прав отсутствует" },

        t.harness.helperObj.notFoundHandler(t, ".dl-collection-dropdown-action__text:textEquals(Доступ)"),
        
        {
            action: function(next) {
                t.global.localStorage.clear();
                t.global.location.reload();
                next();
            },
            "desc": "Авторизация под master"
        },

        { click : "#root .g-text-input:nth-of-type(1) .g-text-input__control" },

        { type : "master[TAB]qwe-123", target : "#root .g-text-input:nth-of-type(1) .g-text-input__control" },

        { waitForPageLoad : [], trigger : { click : "#root .g-button__text" } },

        { click : "#root .dl-collection-content-table__content-row[href='/workbooks/z4wtz6tg5194o'] div:nth-of-type(5) button.g-button", offset : [5.02606201171875,6.3370361328125], desc: "Назначение прав" },

        { click : ".dl-collection-dropdown-action__text:textEquals(Доступ)" },

        { click : ".g-table__row .g-table__cell_edge-padding:textEquals(Пользователь)~.g-table__cell_edge-padding:nth-of-type(2) .g-checkbox__control" },

        { click : ".g-table__row .g-table__cell_edge-padding:textEquals(Администратор)~.g-table__cell_edge-padding:nth-of-type(2) .g-checkbox__control" },

        { moveCursorTo : ".g-button__text:textEquals(Сохранить)", offset : [33,10] },

        { click : ".g-dialog .g-button__text:textEquals(Сохранить)" },

        {
            action: function(next) {
                t.global.localStorage.clear();
                t.global.location.reload();
                next();
            },
            "desc": "Авторизация под admin"
        },

        
        { click : "#root .g-text-input:nth-of-type(1) .g-text-input__control" },

        { type : "admin[TAB]qwe-123", target : "#root .g-text-input:nth-of-type(1) .g-text-input__control" },

        { waitForPageLoad : [], trigger : { click : "#root .g-button__text" } },

        { type : "#root .gc-placeholder-container__title:textEquals(Нет коллекций и воркбуков)" }
    )
});