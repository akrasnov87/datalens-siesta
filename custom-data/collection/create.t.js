describe({
    name : "New recording...",
    enablePageRedirect : true
}, function(t) {
    t.global.localStorage.clear();
    t.global.location.reload();

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

        { click : ".dl-collection-actions__dropdown-text:textEquals(Создать коллекцию)", desc: "Отмена коллекции" },

        { click : ".g-button__text:textEquals(Отменить)" },

        { click : "#root .g-button__icon_side_end .g-button__icon-inner > svg:nth-of-type(1)" },

        { click : ".dl-collection-actions__dropdown-text:textEquals(Создать коллекцию)", desc: "Создание коллекции" },

        { type : "Test collection", target : ".g-dialog-body .dl-collection-dialog__field:nth-of-type(1) input" },

        { click : ".g-dialog-body .dl-collection-dialog__field:nth-of-type(2) button" },

        { click : ".g-select-list__option-default-label" },

        { click : ".g-dialog-body .dl-collection-dialog__field:nth-of-type(3) textarea" },

        { type : "Simple collection", target : ".g-dialog-body .dl-collection-dialog__field:nth-of-type(3) textarea" },

        { click : ".g-dialog-footer__button-apply .g-button__text" },

        { click : "#root .dl-collection-breadcrumbs__item:textEquals(Коллекции и воркбуки)" },

        { click : "#root [title='Test collection']" },

        { click : "#root .dl-collection-breadcrumbs__item:textEquals(Коллекции и воркбуки)" },

        { click : "#root .dl-collection-content-table__content-row:nth-of-type(1) .g-button__icon-inner > svg:nth-of-type(1)", offset : [11.86334228515625,4.03643798828125] },

        { click : ".dl-collection-dropdown-action__text:textEquals(Редактировать)", desc: "Редактирование коллекции" },

        { type : " ", target : ".g-text-input_size_m .g-text-input__control" },

        { type : "()", target : ".g-text-input_size_m .g-text-input__control", options : { shiftKey : true } },

        { type : "[ARROWLEFT]rename", target : ".g-text-input_size_m .g-text-input__control" },

        { type : " description", target : ".g-dialog-body .dl-collection-dialog__field:nth-of-type(3) textarea" },

        { click : ".g-button__text:textEquals(Сохранить)" },

        { click : "#root [title='Test collection \(rename\)']" },

        { click : "#root .dl-collection-breadcrumbs__item:textEquals(Коллекции и воркбуки)" },

        { click : "#root .dl-collection-content-table__content-row:nth-of-type(1) .g-button__icon-inner", offset : [0.70166015625,22.03192138671875] },

        { click : ".dl-collection-dropdown-action__text:textEquals(Редактировать)" },

        { click : ".g-button_size_l .g-button__icon-inner", offset : [18.765380859375,28.879287719726562] },

        { click : "#root .dl-collection-content-table__content-row:nth-of-type(1) .g-button__icon-inner", offset : [12.364501953125,1.03875732421875] },

        { click : ".dl-collection-dropdown-action__text:textEquals(Переместить)" },

        { click : ".dl-collections-structure-collection-select-item__title:textEquals(Test collection \(rename\))" },

        { click : ".g-button_size_l .g-button__icon-inner > svg:nth-of-type(1)", offset : [13.22552490234375,10.927108764648438] },

        { click : "#root .dl-collection-content-table__content-row:nth-of-type(1) .g-button__icon-inner > svg:nth-of-type(1)", offset : [12.06634521484375,5.6795654296875] },

        { click : ".dl-collection-dropdown-action__text:textEquals(Удалить)", desc: "Удаление коллекции" },

        { click : ".g-button__text:textEquals(Удалить)", offset : [-1.0220947265625,25.232025146484375] }
    );
});