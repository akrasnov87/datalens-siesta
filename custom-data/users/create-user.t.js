describe({
    name : "New recording...",
    enablePageRedirect : true
}, function(t) {
    t.global.localStorage.clear();
    t.global.location.reload();

    var userName = 'test-' + Date.now();

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
                t.global.location.href = pageUrl + '/admin/users';
                next();
            },
            desc: "Переход"
        },

        { click : "#root .g-button__text:textEquals(Создать)" },

        { type : userName, target : ".base-admin__form span.g-text-input:nth-of-type(3) input.g-text-input__control" },

        { type : userName + '@mail.ru', target : ".base-admin__form span.g-text-input:nth-of-type(4) input.g-text-input__control" },

        { type : '12345', target : ".base-admin__form span.g-text-input:nth-of-type(5) input.g-text-input__control" },

        { click : ".base-admin__form .g-select:nth-of-type(2) button" },

        { click : ".g-popup__content .g-list__items .g-select-list__option-default-label:textEquals(Внешний пользователь)" },

        { click : "#root .base-admin__wrapper", offset : [467.31903076171875,493.8712463378906] },

        { click : "#root .base-admin__form .g-button__text:textEquals(Создать)" },

        {
            type: ".base-admin__form .alert alert-danger:textEquals(Не выбрана одна из обязательных ролей:)"
        },

        { click : ".base-admin__form .g-select:nth-of-type(3) button" },

        { click : ".g-popup__content .g-list__items .g-select-list__option-default-label:textEquals(Пользователь)" },

        { click : "#root .base-admin__wrapper", offset : [467.31903076171875,493.8712463378906] },

        { click : "#root .base-admin__form .g-button__text:textEquals(Создать)" },

        { type: ".g-table base-admin__table .g-table__row .g-table__cell g-table__cell_edge-padding:textEquals(" +userName + ")"},

        { click : ".base-admin__toolbar input.g-text-input__control" },

        { type : userName, target : ".base-admin__toolbar input.g-text-input__control" },

        { click : "#root .base-admin__toolbar .g-button__text:textEquals(Поиск)" },

        { type: ".g-table base-admin__table .g-table__row .g-table__cell g-table__cell_edge-padding:textEquals(" +userName + ")"},

        { click : ".base-admin__toolbar input.g-text-input__control" },

        { click : ".base-admin__toolbar button.g-clear-button" },

        { click : "#root .base-admin__toolbar .g-button__text:textEquals(Поиск)" },

        { type : userName, target : ".base-admin__toolbar input.g-text-input__control" },

        { click : "#root .base-admin__toolbar .g-button__text:textEquals(Поиск)" },

        { click : "#root .g-button__text:textEquals(Изменить)" },

        { click : "#root .g-radio-button__option:nth-of-type(2) .g-radio-button__option-control" },

        { click : ".base-admin__form .g-select:nth-of-type(3) button" },

        { click : ".g-popup__content .g-list__items .g-select-list__option-default-label:textEquals(Внешний пользователь)" },

        { click : "#root .base-admin__wrapper", offset : [467.31903076171875,493.8712463378906] },

        { type : '12345', target : ".base-admin__form span.g-text-input:nth-of-type(5) input.g-text-input__control" },

        { click : "#root .base-admin__form .g-button_view_action :textEquals(Изменить)" },

        { type: ".g-table base-admin__table .g-table__row base-admin__disabled .g-table__cell g-table__cell_edge-padding:textEquals(" +userName + ")"},

        {
            action: function(next) {
                t.global.localStorage.clear();
                t.global.location.reload();
                next();
            },
            "desc": "Авторизация под " + userName
        },

        { click : "#root .g-text-input:nth-of-type(1) .g-text-input__control" },

        { type : userName + "[TAB][TAB]12345", target : "#root .g-text-input:nth-of-type(1) .g-text-input__control" },

        { waitForPageLoad : [], trigger : { click : "#root .g-button__text" } },

        { type: ".g-toast__title:textEquals(Request failed with status code 401)" },

        {
            action: function(next) {
                t.global.localStorage.clear();
                t.global.location.reload();
                next();
            },
            "desc": "Авторизация под master"
        },

        { click : "#root .g-text-input:nth-of-type(1) .g-text-input__control" },

        { type : "master[TAB][TAB]qwe-123", target : "#root .g-text-input:nth-of-type(1) .g-text-input__control" },

        { waitForPageLoad : [], trigger : { click : "#root .g-button__text" } },

        {
            action: function(next) {
                t.global.location.href = pageUrl + '/admin/users';
                next();
            },
            desc: "Переход"
        },

        { type : userName, target : ".base-admin__toolbar input.g-text-input__control" },

        { click : "#root .base-admin__toolbar .g-button__text:textEquals(Поиск)" },

        { click : "#root .g-button__text:textEquals(Изменить)" },

        { click : "#root .g-radio-button__option:nth-of-type(1) .g-radio-button__option-control" },

        { click : "#root .base-admin__form .g-button_view_action :textEquals(Изменить)" },

        { type: ".g-table base-admin__table .g-table__row .g-table__cell g-table__cell_edge-padding:textEquals(" +userName + ")"},

        {
            action: function(next) {
                t.global.localStorage.clear();
                t.global.location.reload();
                next();
            },
            "desc": "Авторизация под " + userName
        },

        { click : "#root .g-text-input:nth-of-type(1) .g-text-input__control" },

        { type : userName + "[TAB][TAB]12345", target : "#root .g-text-input:nth-of-type(1) .g-text-input__control" },

        { waitForPageLoad : [], trigger : { click : "#root .g-button__text" } },

        { type: ".dl-collections-navigation-layout__header-title:textEquals(Коллекции и воркбуки)"}
    )
});
