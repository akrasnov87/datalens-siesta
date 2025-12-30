describe({
    name : "New recording...",
    enablePageRedirect : true
}, function(t) {
    t.global.localStorage.clear();
    t.global.location.reload();

    var args = null;
    var pageUrl = null;

    var workbookName = 'copy-move-create_workbook_' + Date.now();

    var collectionName = 'copy-move-create_collection_' + Date.now();

    t.chain(
        function(next) {
            t.harness.configLoad((data)=>{
                args = data;
                pageUrl = data.pageUrl;
                next();
            })
        },
        { click : "#root .g-text-input:nth-of-type(1) .g-text-input__control", desc: "Авторизация" },

        { type : "master[TAB]qwe-123", target : "#root .g-text-input:nth-of-type(1) .g-text-input__control" },

        { waitForPageLoad : [], trigger : { click : "#root .g-button__text" } },

        { click : "#root .g-button__icon_side_end .g-button__icon-inner > svg:nth-of-type(1)" },

        { click : ".dl-collection-actions__dropdown-text:contains(Воркбук)", desc: "Создать Воркбук" },

        { type : workbookName, target : ".g-text-input_size_m .g-text-input__control" },

        { click : ".g-dialog-body .dl-workbook-dialog__field:nth-of-type(2) button" },

        { click : ".g-select-popup .g-list__items .g-select-list__option-default-label:textEquals('datalens-demo')" },

        { click : ".g-dialog-footer__button-apply .g-button__text:textEquals(Создать)" },


        { click : "#root .g-button__text:textEquals(Создать подключение)" },

        { click : "#root .conn-list__item:nth-of-type(2) .conn-list__item-link" },

        { click : "#root .conn-form-row:nth-of-type(1) .g-text-input__control" },

        { type : "localhost", target : "#root .conn-form-row:nth-of-type(1) .g-text-input__control" },

        { click : "#root .conn-form-row:nth-of-type(3) .g-text-input__control" },

        { type : "db", target : "#root .conn-form-row:nth-of-type(3) .g-text-input__control" },

        { click : "#root :nth-of-type(4) .g-text-input__control" },

        { type : "user[TAB][TAB]user", target : "#root :nth-of-type(4) .g-text-input__control" },

        { click : "#root .g-button__text:textEquals(Создать подключение)" },

        { click : ".dl-dialog-create-workbook-entry__row .g-text-input__control" },

        { type : " 1", target : ".dl-dialog-create-workbook-entry__row .g-text-input__control" },

        { click : ".g-button__text:textEquals(Создать)" },

        {
            action: function(next) {
                t.global.location.href = pageUrl + '/collections';
                next();
            },
            desc: "Создание коллекции и воркбука"
        },


        // Создание коллекции
        { click : "#root .g-button__icon_side_end .g-button__icon-inner > svg:nth-of-type(1)" },

        { click : ".dl-collection-actions__dropdown-text:contains(Коллекцию)", desc: "Создать Коллекцию" },

        { type : collectionName, target : ".g-text-input_size_m .g-text-input__control" },

        { click : ".g-dialog-body .dl-collection-dialog__field:nth-of-type(2) button" },

        { click : ".g-select-popup .g-list__items .g-select-list__option-default-label:textEquals('datalens-demo')" },

        { click : ".g-dialog-footer__button-apply .g-button__text:textEquals(Создать)" },

        {
            action: function(next) {
                t.global.location.href = pageUrl + '/collections';
                next();
            },
            desc: "Создание коллекции и воркбука"
        },

        // Копирование
        { click : "#root .dl-collection-filters__filter-string .g-text-input__control" },

        { type : workbookName, target : "#root .dl-collection-filters__filter-string .g-text-input__control" },

        { waitFor: 500 },

        { click : "#root .dl-collection-content-table__content-row:nth-of-type(1) .g-button__icon-inner > svg:nth-of-type(1)" },

        { waitFor: 500 },

        { click : ".dl-collection-dropdown-action__text:textEquals(Копировать)" },

        // окно копирования
        { click : ".g-text-input_size_m .g-text-input__control" },

        { moveCursorTo : ".g-text-input_size_m .g-text-input__control" },

        { type : collectionName, target : ".g-text-input_size_m .g-text-input__control" },

        { click : ".dl-collections-structure-collection-select-item__title:contains('" + collectionName + "')" },

        
        { moveCursorTo : ".g-button__text:textEquals(Копировать)" },

        { click : ".g-button__text:textEquals(Копировать)" },

        { waitFor: 500 },

        { click : ".g-dialog_size_s .g-text-input__control" },

        { type : "_", target : ".g-dialog_size_s .g-text-input__control", options : { shiftKey : true } },

        { click : ".g-dialog_size_s .g-button__text:textEquals(Копировать)" },

        {
            action: function(next) {
                t.global.location.href = pageUrl + '/collections';
                next();
            },
            desc: "Проверка переноса воркбука"
        },

        { click : "#root .dl-collection-filters__filter-string .g-text-input__control" },

        { type : collectionName, target : "#root .dl-collection-filters__filter-string .g-text-input__control" },

        { waitFor: 2000 },

        { click : "#root .dl-collection-content-table__content .dl-collection-content-table__title-col-text:textEquals(" + collectionName + ")" },

        { waitFor: 500 },

        { click : "#root .dl-collection-content-table__content .dl-collection-content-table__title-col-text:textEquals(" + workbookName + "_)" },

        { waitFor: 500 },

        { click : "#root .dl-workbook-filters__filter-string .g-text-input__control" },

        { type : 'Новое подключение 1', target : "#root .dl-workbook-filters__filter-string .g-text-input__control" },
        
        { waitFor: 500 },

        { click : "#root .dl-content-row .dl-content-row__title-col-text:textEquals(Новое подключение 1)" },
        
        {
            waitFor: 500
        },

        function(next) {
            t.selectorExists('.conn-form-title__title', 'Подключение найдено');
            next();
        }
    )
});