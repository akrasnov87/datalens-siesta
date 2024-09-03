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

        { click : "#root .dl-collection-content-table__content-row[href='/workbooks/z4wtz6tg5194o'] div:nth-of-type(5) button.g-button", offset : [5.02606201171875,6.3370361328125], desc: "Назначение прав" },

        { click : ".dl-collection-dropdown-action__text:textEquals(Доступ)" },

        { click : ".g-table__row .g-table__cell_edge-padding:textEquals(Пользователь)~.g-table__cell_edge-padding:nth-of-type(2) .g-checkbox__control" },

        { click : ".g-table__row .g-table__cell_edge-padding:textEquals(Администратор)~.g-table__cell_edge-padding:nth-of-type(2) .g-checkbox__control" },

        { moveCursorTo : ".g-button__text:textEquals(Сохранить)", offset : [33,10] },

        { click : ".g-dialog .g-button__text:textEquals(Сохранить)" },

        { click : "#root .dl-collection-content-table__content-row[href='/workbooks/z4wtz6tg5194o']", offset : [5.02606201171875,6.3370361328125], desc: "Переход в workbook" },

        { click : "#root .dl-content-row[href='/wizard/x2urxfzzoeicm-charts-area-chart'] .dl-content-row__content-cell_controls .g-button__icon-inner", offset : [23.14312744140625,11.963165283203125] },

        { click : ".dl-collection-dropdown-action__text:textEquals(Доступ)", desc: "Назначение прав на чарт" },

        { click : ".g-table__row .g-table__cell_edge-padding:textEquals(Пользователь)~.g-table__cell_edge-padding:nth-of-type(2) .g-checkbox__control" },

        { click : ".g-table__row .g-table__cell_edge-padding:textEquals(Администратор)~.g-table__cell_edge-padding:nth-of-type(2) .g-checkbox__control" },

        { moveCursorTo : ".g-button__text:textEquals(Сохранить)", offset : [48,14] },

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

        { type : "admin[TAB][TAB]qwe-123", target : "#root .g-text-input:nth-of-type(1) .g-text-input__control" },

        { click : "#root .g-button__text"  },

        { click : "#root .dl-collection-content-table__content-row[href='/workbooks/z4wtz6tg5194o']", desc: "Переход в workbook" },

        { click : "#root .dl-content-row[href='/wizard/x2urxfzzoeicm-charts-area-chart']" },

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

        { click : "#root .g-button__text"  },

        { click : "#root .dl-collection-content-table__content-row[href='/workbooks/z4wtz6tg5194o']", desc: "Переход в workbook" },

        { click : "#root .dl-content-row[href='/preview/x2urxfzzoeicm']", desc: "Чарт доступен" },

        {
            action: function(next) {
                t.global.localStorage.clear();
                t.global.location.reload();
                next();
            },
            "desc": "Авторизация под master"
        },

        { type : "master[TAB][TAB]qwe-123", target : "#root .g-text-input:nth-of-type(1) .g-text-input__control" },

        { waitForPageLoad : [], trigger : { click : "#root .g-button__text" } },

        { click : "#root .dl-collection-content-table__content-row[href='/workbooks/z4wtz6tg5194o'] div:nth-of-type(5) button.g-button", offset : [5.02606201171875,6.3370361328125], desc: "Назначение прав" },

        { click : ".dl-collection-dropdown-action__text:textEquals(Доступ)" },

        { click : ".g-table__row .g-table__cell_edge-padding:textEquals(Пользователь)~.g-table__cell_edge-padding:nth-of-type(2) .g-checkbox__control" },

        { click : ".g-table__row .g-table__cell_edge-padding:textEquals(Администратор)~.g-table__cell_edge-padding:nth-of-type(2) .g-checkbox__control" },

        { moveCursorTo : ".g-button__text:textEquals(Сохранить)", offset : [33,10] },

        { click : ".g-dialog .g-button__text:textEquals(Сохранить)" },

        { click : "#root .dl-collection-content-table__content-row[href='/workbooks/z4wtz6tg5194o']", offset : [5.02606201171875,6.3370361328125], desc: "Переход в workbook" },

        { click : "#root .dl-content-row[href='/wizard/x2urxfzzoeicm-charts-area-chart'] .dl-content-row__content-cell_controls .g-button__icon-inner", offset : [23.14312744140625,11.963165283203125] },

        { click : ".dl-collection-dropdown-action__text:textEquals(Доступ)", desc: "Назначение прав на чарт" },

        { click : ".g-table__row .g-table__cell_edge-padding:textEquals(Пользователь)~.g-table__cell_edge-padding:nth-of-type(2) .g-checkbox__control" },

        { click : ".g-table__row .g-table__cell_edge-padding:textEquals(Администратор)~.g-table__cell_edge-padding:nth-of-type(2) .g-checkbox__control" },

        { moveCursorTo : ".g-button__text:textEquals(Сохранить)", offset : [48,14] },

        { click : ".g-dialog .g-button__text:textEquals(Сохранить)" },
    )
});