describe({
    name : "New recording...",
    enablePageRedirect : true
}, function(t) {
    t.global.localStorage.clear();
    t.global.location.reload();

    var collectionName = 'project-collection-permission_collection-'+ Date.now();

    var args = null;
    
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

        { click : "#root .g-button__icon_side_end .g-button__icon-inner > svg:nth-of-type(1)" },

        { click : ".dl-collection-actions__dropdown-text:textEquals(Создать коллекцию)", desc: "Создание коллекции" },

        { type : collectionName, target : ".g-dialog-body .dl-collection-dialog__field:nth-of-type(1) input" },

        { click : ".g-dialog-footer__button-apply .g-button__text" },

        { click : "#root .dl-collection-breadcrumbs__item:textEquals(Коллекции и воркбуки)" },

        { click : "#root [title='" + collectionName + "']" },

        { click : "#root .dl-collection-breadcrumbs__item:textEquals(Коллекции и воркбуки)" },

        { click : "#root .dl-collection-content-table__content-row:nth-of-type(1) .g-button__icon-inner > svg:nth-of-type(1)", desc: "Назначение прав" },

        { click : ".dl-collection-dropdown-action__text:textEquals(Доступ)" },

        { click : ".g-table__row .g-table__cell_edge-padding:textEquals(Администратор)~.g-table__cell_edge-padding:nth-of-type(2) .g-checkbox__control" },

        { click : ".g-button__text:textEquals(Сохранить)" },

        { moveCursorTo : "#root .dl-collection-page__content", offset : [269,330] },

        {
            action: function(next) {
                t.global.localStorage.clear();
                t.global.location.reload();
                next();
            },
            "desc": "Авторизация под другим пользователем"
        },

        { click : "#root .g-text-input:nth-of-type(1) .g-text-input__control", desc: "Авторизация" },

        { type : "admin[TAB][TAB]qwe-123", target : "#root .g-text-input:nth-of-type(1) .g-text-input__control" },

        { waitForPageLoad : [], trigger : { click : "#root .g-button__text" } },

        { click : "#root [title='" + collectionName + "']" },

        {
            action: function(next) {
                t.global.localStorage.clear();
                t.global.location.reload();
                next();
            },
            "desc": "Авторизация под другим пользователем"
        },

        { click : "#root .g-text-input:nth-of-type(1) .g-text-input__control", desc: "Авторизация" },

        { type : "user[TAB][TAB]qwe-123", target : "#root .g-text-input:nth-of-type(1) .g-text-input__control" },

        { waitForPageLoad : [], trigger : { click : "#root .g-button__text" } },

        { type : "#root .gc-placeholder-container__title:textEquals(Нет коллекций и воркбуков)" },

        {
            action: function(next) {
                t.global.localStorage.clear();
                t.global.location.reload();
                next();
            },
            "desc": "Авторизация под другим пользователем"
        },

        { click : "#root .g-text-input:nth-of-type(1) .g-text-input__control", desc: "Авторизация" },

        { type : "master[TAB][TAB]qwe-123", target : "#root .g-text-input:nth-of-type(1) .g-text-input__control" },

        { waitForPageLoad : [], trigger : { click : "#root .g-button__text" } },

        { click : "#root .dl-collection-content-table__content-row:nth-of-type(1) .g-button__icon-inner > svg:nth-of-type(1)", offset : [7.29852294921875,3.757171630859375] },

        { click : ".dl-collection-dropdown-action__text:textEquals(Удалить)" },

        { click : ".g-button__text:textEquals(Удалить)" }
    )
});