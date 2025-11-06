describe({
    name : "New recording...",
    enablePageRedirect : true
}, function(t) {
    t.global.localStorage.clear();
    t.global.location.reload();

    var claimName = 'test-' + Date.now();
    
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

        {
            action: function(next) {
                t.global.location.href = pageUrl + '/admin/roles';
                next();
            },
            desc: "Переход"
        },

        { click : "#root .g-button__text:textEquals(Создать)" },

        { type : claimName, target : ".base-admin__form span.g-text-input:nth-of-type(3) input.g-text-input__control" },

        { type : "Тестовая роль", target : ".base-admin__form span.g-text-input:nth-of-type(4) input.g-text-input__control" },

        { click : "#root .g-button__text:textEquals(Отмена)" },

        { click : "#root .g-button__text:textEquals(Создать)" },

        { type : claimName, target : ".base-admin__form span.g-text-input:nth-of-type(3) input.g-text-input__control" },

        { type : "Тестовый роль", target : ".base-admin__form span.g-text-input:nth-of-type(4) input.g-text-input__control" },

        { click : "#root .base-admin-form__buttons-wrapper .g-button__text:textEquals(Создать)" },

        { click : "#root .g-table__row:nth-last-of-type(1) .g-button__text:textEquals(Изменить)" },

        { type : "1", target : ".base-admin__form span.g-text-input:nth-of-type(3) input.g-text-input__control" },

        { click : "#root .base-admin__form .g-button_view_action :textEquals(Изменить)" },

        { type: "td.g-table__cell g-table__cell_edge-padding:textEquals('" + claimName + "1')" },

        { click : "#root .g-table__row:nth-last-of-type(1) .g-button__text:textEquals(Изменить)" },

        { type : "[BACKSPACE]", target : ".base-admin__form span.g-text-input:nth-of-type(3) input.g-text-input__control" },

        { click : "#root .base-admin__form .g-button__text:textEquals(Изменить)" },

        { type: "td.g-table__cell g-table__cell_edge-padding:textEquals('" + claimName + "')" }
    )
});
