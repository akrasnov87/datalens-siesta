describe({
    name : "New recording...",
    enablePageRedirect : true
}, function(t) {
    t.global.localStorage.clear();
    t.global.location.reload();

    var collectionName = 'project-collection-permission_collection-'+ Date.now();

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

        { click : "#root .g-button__icon_side_end .g-button__icon-inner > svg:nth-of-type(1)" },

        { click : ".dl-collection-actions__dropdown-text:textEquals(Создать коллекцию)", desc: "Создание коллекции" },

        { type : collectionName, target : ".g-dialog-body .dl-collection-dialog__field:nth-of-type(1) input" },

        { click : ".g-dialog-footer__button-apply .g-button__text" },

        {
            action: function(next) {
                t.global.location.href = pageUrl + '/collections';
                next();
            },
            desc: "Создание коллекции и воркбука"
        },

        { click : "#root [title='" + collectionName + "']", desc: "test_1" },

        {
            action: function(next) {
                t.global.location.href = pageUrl + '/collections';
                next();
            },
            desc: "Создание коллекции и воркбука"
        },

        { click : "#root .dl-collection-content-table__content-row:nth-of-type(1) .g-button__icon-inner > svg:nth-of-type(1)", desc: "Назначение прав" },

        { click : ".dl-collection-dropdown-action__text:textEquals(Доступ)" },

        { click : ".g-table__row .g-table__cell_edge-padding:textEquals(Администратор)~.g-table__cell_edge-padding:nth-of-type(2) .g-checkbox__control" },

        { click : ".g-button__text:textEquals(Сохранить)" },

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

        { click : "#root [title='" + collectionName + "']", desc: "test_1" },

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

        { click : "#root .dl-collection-content-table__content-row:nth-of-type(1) .g-button__icon-inner > svg:nth-of-type(1)" },

        { click : ".dl-collection-dropdown-action__text:textEquals(Удалить)" },

        { click : ".g-button__text:textEquals(Удалить)" }
    )
});