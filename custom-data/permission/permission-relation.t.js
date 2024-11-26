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

        { click : "#root .dl-collection-content-table__content-row[href='/workbooks/z4wtz6tg5194o'] div:nth-of-type(5) button.g-button", desc: "Назначение прав" },

        { click : ".dl-collection-dropdown-action__text:textEquals(Доступ)" },

        { click : ".g-table__row .g-table__cell_edge-padding:textEquals(Пользователь)~.g-table__cell_edge-padding:nth-of-type(2) .g-checkbox__control" },

        { click : ".g-table__row .g-table__cell_edge-padding:textEquals(Администратор)~.g-table__cell_edge-padding:nth-of-type(2) .g-checkbox__control" },

        { moveCursorTo : ".g-button__text:textEquals(Сохранить)", offset : [33,10] },

        { click : ".g-dialog .g-button__text:textEquals(Сохранить)" },

        { click : "#root .dl-collection-content-table__content-row[href='/workbooks/z4wtz6tg5194o']", desc: "Переход в workbook" },

        { click : "#root .dl-content-row[href='/qvnkqzm0wstyf-datalens-demo'] div:nth-of-type(4) button.g-button" },

        { click : ".dl-collection-dropdown-action__text:textEquals(Доступ)" },

        { click : ".g-table__row .g-table__cell_edge-padding:textEquals(Пользователь)~.g-table__cell_edge-padding:nth-of-type(2) .g-checkbox__control" },

        { click : ".g-table__row .g-table__cell_edge-padding:textEquals(Администратор)~.g-table__cell_edge-padding:nth-of-type(2) .g-checkbox__control" },

        { click : ".g-button__text:textEquals(Сохранить)" },

        { click : "#root .dl-content-row[href='/qvnkqzm0wstyf-datalens-demo'] div:nth-of-type(4) button.g-button" },

        { click : ".dl-collection-dropdown-action__text:textEquals(Связанные объекты)", desc: "Назначение прав через связанные объекты" },

        { moveCursorTo : ".related-entities-list:nth-of-type(2) .related-entities-list__title-wrapper .g-control-label__indicator", offset : [21,12] },

        { click : ".related-entities-list:nth-of-type(2) .related-entities-list__title-wrapper .g-control-label__indicator", offset : [21.02862548828125,12.498977661132812] },

        { click : ".g-button__text:textEquals(Применить)" },

        { moveCursorTo : [675,405] },

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

        { click : "#root .dl-collection-content-table__content-row[href='/workbooks/z4wtz6tg5194o'] div:nth-of-type(5) button.g-button", desc: "Назначение прав" },

        { click : ".dl-collection-dropdown-action__text:textEquals(Доступ)" },

        { click : ".g-table__row .g-table__cell_edge-padding:textEquals(Пользователь)~.g-table__cell_edge-padding:nth-of-type(2) .g-checkbox__control" },

        { click : ".g-table__row .g-table__cell_edge-padding:textEquals(Администратор)~.g-table__cell_edge-padding:nth-of-type(2) .g-checkbox__control" },

        { moveCursorTo : ".g-button__text:textEquals(Сохранить)", offset : [33,10] },

        { click : ".g-dialog .g-button__text:textEquals(Сохранить)" },

        { click : "#root .dl-collection-content-table__content-row[href='/workbooks/z4wtz6tg5194o']", desc: "Переход в workbook" },

        { click : "#root .dl-content-row[href='/qvnkqzm0wstyf-datalens-demo'] div:nth-of-type(4) button.g-button" },

        { click : ".dl-collection-dropdown-action__text:textEquals(Доступ)" },

        { click : ".g-table__row .g-table__cell_edge-padding:textEquals(Пользователь)~.g-table__cell_edge-padding:nth-of-type(2) .g-checkbox__control" },

        { click : ".g-table__row .g-table__cell_edge-padding:textEquals(Администратор)~.g-table__cell_edge-padding:nth-of-type(2) .g-checkbox__control" },

        { click : ".g-button__text:textEquals(Сохранить)" },

        { click : "#root .dl-content-row[href='/qvnkqzm0wstyf-datalens-demo'] div:nth-of-type(4) button.g-button" },

        { click : ".dl-collection-dropdown-action__text:textEquals(Связанные объекты)", desc: "Назначение прав через связанные объекты" },

        { moveCursorTo : ".related-entities-list:nth-of-type(2) .related-entities-list__title-wrapper .g-control-label__indicator", offset : [21,12] },

        { click : ".related-entities-list:nth-of-type(2) .related-entities-list__title-wrapper .g-control-label__indicator", offset : [21.02862548828125,12.498977661132812] },

        { click : ".g-button__text:textEquals(Применить)" },

        { moveCursorTo : [675,405] }
    )
});