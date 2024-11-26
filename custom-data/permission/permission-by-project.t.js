describe({
    name : "New recording...",
    enablePageRedirect : true
}, function(t) {
    t.global.localStorage.clear();
    t.global.location.reload();

    var collectionName = 'collection-by-project-' + Date.now().toString(); 

    var projectName = 'permission-by-project-' + Date.now().toString();
    var projectUfName = 'Тестовый проект-' + Date.now().toString();
    var userName = 'user-by-project' + Date.now();

    var workbookName = 'permission-by-workbook-' + Date.now().toString();

    var workbookMainName = 'permission-by-workbook-main-' + Date.now().toString();

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
            desc: "Создание проекта"
        },
        
        {
            type: ".g-text g-text_variant_header-1 base-admin__title:textEquals(Проекты)"
        },

        { click : "#root .base-admin__toolbar .g-button__text:textEquals(Создать)" },

        { type : projectName, target : ".base-admin__form span.g-text-input:nth-of-type(3) input.g-text-input__control" },

        { type : projectUfName, target : ".base-admin__form span.g-text-input:nth-of-type(4) input.g-text-input__control" },

        { click : "#root .base-admin__form .g-button__text:textEquals(Создать)" },

        {
            action: function(next) {
                t.global.location.href = pageUrl + '/admin/users';
                next();
            },
            desc: "Создание пользователя"
        },

        {
            type: ".g-text g-text_variant_header-1 base-admin__title:textEquals(Пользователи)"
        },

        { click : "#root .base-admin__toolbar .g-button__text:textEquals(Создать)" },

        { type : userName, target : ".base-admin__form span.g-text-input:nth-of-type(3) input.g-text-input__control" },

        { type : userName + '@mail.ru', target : ".base-admin__form span.g-text-input:nth-of-type(4) input.g-text-input__control" },

        { type : 'qwe-123', target : ".base-admin__form span.g-text-input:nth-of-type(5) input.g-text-input__control" },

        { click : ".base-admin__form .g-select:nth-of-type(1) button" },

        { click : ".g-popup__content .g-list__items .g-select-list__option-default-label:textEquals(" + projectUfName + ")" },

        { click : ".base-admin__form .g-select:nth-of-type(2) button" },

        { click : ".g-popup__content .g-list__items .g-select-list__option-default-label:textEquals(Пользователь)" },

        { click : "#root .base-admin__wrapper", offset : [467.31903076171875,493.8712463378906] },

        { click : "#root .base-admin__form .g-button__text:textEquals(Создать)" },

        { type: ".g-table base-admin__table .g-table__row .g-table__cell g-table__cell_edge-padding:textEquals(" +userName + ")"},

        {
            action: function(next) {
                t.global.location.href = pageUrl + '/collections';
                next();
            },
            desc: "Создание коллекции и воркбука"
        },

        {
            type: ".g-text g-text_variant_header-1 base-admin__title:textEquals(Коллекции и воркбуки)"
        },

        { click : "#root .g-button__icon_side_end .g-button__icon-inner > svg:nth-of-type(1)" },

        { click : ".dl-collection-actions__dropdown-text:contains(Коллекцию)", desc: "Создание коллекции" },

        { type : collectionName, target : ".g-dialog-body .dl-collection-dialog__field:nth-of-type(1) input" },

        { click : ".g-dialog-body .dl-collection-dialog__field:nth-of-type(2) button" },

        { click : ".g-popup__content .g-list__items .g-select-list__option-default-label:textEquals(" + projectName + ")" },

        { click : ".g-dialog-footer__button-apply .g-button__text" },

        {
            type: ".gc-placeholder-container__title:textEquals(Нет коллекций и воркбуков)"
        },

        { click : "#root .g-button__text:contains(Воркбук)", desc: "Создание воркбука" },

        { type : workbookName, target : ".g-text-input_size_m .g-text-input__control" },

        { click : ".g-dialog-body .dl-workbook-dialog__field:nth-of-type(2) button" },

        { click : ".g-popup__content .g-list__items .g-select-list__option-default-label:textEquals(datalens-demo)" },

        { click : ".g-dialog-footer__button-apply", offset : [104.18182373046875,18.5771484375] },

        {
            action: function(next) {
                t.global.location.href = pageUrl + '/collections';
                next();
            },
            desc: "Создание коллекции и воркбука"
        },

        {
            type: ".g-text g-text_variant_header-1 base-admin__title:textEquals(Коллекции и воркбуки)"
        },

        { click : "#root .g-button__icon_side_end .g-button__icon-inner > svg:nth-of-type(1)" },

        { click : ".dl-collection-actions__dropdown-text:contains(Воркбук)", desc: "Создание воркбука" },

        { type : workbookMainName, target : ".g-text-input_size_m .g-text-input__control" },

        { click : ".g-dialog-body .dl-workbook-dialog__field:nth-of-type(2) button" },

        { click : ".g-popup__content .g-list__items .g-select-list__option-default-label:textEquals(" + projectName + ")" },

        { click : ".g-dialog-footer__button-apply .g-button__text" },

        {
            action: function(next) {
                t.global.location.href = pageUrl + '/collections';
                next();
            },
            desc: "Создание коллекции и воркбука"
        },

        {
            type: ".g-text g-text_variant_header-1 base-admin__title:textEquals(Коллекции и воркбуки)"
        },

        { click : "#root .dl-collection-filters__filter-string .g-text-input__control" },

        { type : collectionName, target : "#root .dl-collection-filters__filter-string .g-text-input__control" },

        { waitFor: 500 },

        { click : "#root .dl-collection-content-table__content-row:nth-of-type(1) .g-button__icon-inner > svg:nth-of-type(1)", offset : [13.00213623046875,11.23126220703125] },

        { click : ".dl-collection-dropdown-action__text:textEquals(Доступ)" },

        { click : ".g-table__row .g-table__cell_edge-padding:textEquals(Пользователь)~.g-table__cell_edge-padding:nth-of-type(2) .g-checkbox__control" },

        { click : ".g-button__text:textEquals(Сохранить)" },

        { click : "#root .g-button_view_normal .g-button__icon-inner > svg:nth-of-type(1)", offset : [12.832977294921875,10.608123779296875] },

        { type : workbookMainName, target : "#root .dl-collection-filters__filter-string .g-text-input__control" },

        { waitFor: 500 },

        { click : "#root .dl-collection-content-table__content-row:nth-of-type(1) .g-button__icon-inner > svg:nth-of-type(1)", offset : [13.00213623046875,11.23126220703125] },

        { click : ".dl-collection-dropdown-action__text:textEquals(Доступ)" },

        { click : ".g-table__row .g-table__cell_edge-padding:textEquals(Пользователь)~.g-table__cell_edge-padding:nth-of-type(2) .g-checkbox__control" },

        { click : ".g-button__text:textEquals(Сохранить)" },

        { click : "#root .g-button_view_normal .g-button__icon-inner > svg:nth-of-type(1)", offset : [12.832977294921875,10.608123779296875] },

        { type : collectionName, target : "#root .dl-collection-filters__filter-string .g-text-input__control" },

        { waitFor: 3000 },

        { click : "#root .dl-collection-content-table__title-col", offset : [185.6695556640625,26.91766357421875] },

        { type: ".dl-collections-navigation-layout__header-title:textEquals(" + collectionName + ")" },

        { click : "#root .g-button_view_flat .g-button__icon-inner > svg:nth-of-type(1)" },

        { click : ".dl-collection-dropdown-action__text:textEquals(Доступ)" },

        { click : ".g-table__row .g-table__cell_edge-padding:textEquals(Пользователь)~.g-table__cell_edge-padding:nth-of-type(2) .g-checkbox__control" },

        { click : ".g-dialog-footer__button-apply", offset : [105.53411865234375,8.17657470703125] },

        {
            action: function(next) {
                t.global.localStorage.clear();
                t.global.location.reload();
                next();
            },
            "desc": "Авторизация под user"
        },

        { click : "#root .g-text-input:nth-of-type(1) .g-text-input__control", desc: "Авторизация" },

        { type : userName + "[TAB][TAB]qwe-123", target : "#root .g-text-input:nth-of-type(1) .g-text-input__control" },

        { waitForPageLoad : [], trigger : { click : "#root .g-button__text" } },

        { click : "#root .dl-collection-content-table__content a:nth-of-type(1)" },

        { type : "#root .gc-placeholder-container__title:textEquals(Нет коллекций и воркбуков)" },

        {
            action: function(next) {
                t.global.location.href = pageUrl + '/collections';
                next();
            },
            desc: "Создание коллекции и воркбука"
        },

        { click : "#root .dl-collection-content-table__content .dl-collection-content-table__title-col-text:textEquals(" + workbookMainName + ")" }
    )
});