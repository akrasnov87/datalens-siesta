describe({
    name : "New recording...",
    enablePageRedirect : true
}, function(t) {
    t.global.localStorage.clear();
    t.global.location.reload();

    var args = null;
    var pageUrl = null;

    var collectionName = 'project-collection-create_workbook_' + Date.now();
    
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

        { click : ".dl-collection-actions__dropdown-text:contains(Коллекцию)", desc: "Создание коллекции" },

        { type : collectionName, target : ".g-dialog-body .dl-collection-dialog__field:nth-of-type(1) input" },

        { click : ".g-dialog-body .dl-collection-dialog__field:nth-of-type(2) button" },

        { click : ".g-select-list__option-default-label" },

        { click : ".g-dialog-body .dl-collection-dialog__field:nth-of-type(3) textarea" },

        { type : "Simple collection", target : ".g-dialog-body .dl-collection-dialog__field:nth-of-type(3) textarea" },

        { click : ".g-dialog-footer__button-apply .g-button__text" },

        { click : "#root .dl-collection-breadcrumbs__item:textEquals(Коллекции и воркбуки)" },

        { click : "#root [title='" + collectionName + "']" },

        { click : "#root .g-button__text:contains(Подключить свои данные)", desc: "Создание first workbook" },

        { type : "First workbook", target : ".g-text-input_size_m .g-text-input__control" },

        { type : "Description first workbook", target : ".g-dialog-body .dl-workbook-dialog__field:nth-of-type(3) textarea" },

        { click : ".g-dialog-footer__button-apply .g-button__text:textEquals(Создать)" },

        {
            action: function(next) {
                t.global.location.href = pageUrl + '/collections';
                next();
            },
            desc: "Создание коллекции и воркбука"
        },

        { click : "#root .dl-collection-content-table__content .dl-collection-content-table__title-col-text:textEquals(" + collectionName + ")" },

        { click : "#root .g-button__icon_side_end path", offset : [5.38421630859375,3.5467987060546875] },

        { click : ".dl-collection-actions__dropdown-text:contains(Воркбук)" },

        { type : "Second workbook", target : ".g-text-input_size_m .g-text-input__control", desc: "Создание second workbook" },

        { click : ".g-dialog-body .dl-workbook-dialog__field:nth-of-type(2) button" },

        { click : ".g-popup .g-select-list__option-default-label" },

        { type : "Description second workbook", target : ".g-dialog-body .dl-workbook-dialog__field:nth-of-type(3) textarea" },

        { click : ".g-dialog-footer__button-apply .g-button__text:textEquals(Создать)" },

        {
            action: function(next) {
                t.global.location.href = pageUrl + '/collections';
                next();
            },
            desc: "Создание коллекции и воркбука"
        },

        { click : "#root .dl-collection-content-table__content .dl-collection-content-table__title-col-text:textEquals(" + collectionName + ")" },

        { click : "#root :textEquals(Second workbook)" },

        {
            action: function(next) {
                t.global.location.href = pageUrl + '/collections';
                next();
            },
            desc: "Создание коллекции и воркбука"
        },

        { click : "#root .dl-collection-content-table__content .dl-collection-content-table__title-col-text:textEquals(" + collectionName + ")" },

        { click : "#root :textEquals(First workbook)" },

        {
            action: function(next) {
                t.global.location.href = pageUrl + '/collections';
                next();
            },
            desc: "Создание коллекции и воркбука"
        },

        { click : "#root .dl-collection-content-table__content .dl-collection-content-table__title-col-text:textEquals(" + collectionName + ")" },

        { click : "#root .dl-collection-breadcrumbs__item:textEquals(Коллекции и воркбуки)", desc: "Удаление коллекции" },

        { click : "#root .dl-collection-content-table__content-row:nth-of-type(1) .g-button__icon-inner > svg:nth-of-type(1)", offset : [9.56768798828125,10.780029296875] },

        { click : ".dl-collection-dropdown-action__text:textEquals(Удалить)" },

        { click : ".g-button__text:textEquals(Удалить)" }
    );
});