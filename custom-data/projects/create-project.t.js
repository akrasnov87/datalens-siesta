describe({
    name : "New recording...",
    enablePageRedirect : true
}, function(t) {
    t.global.localStorage.clear();
    t.global.location.reload();

    var projectName = Date.now().toString();

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
                t.global.location.href = pageUrl + '/admin/projects';
                next();
            },
            desc: "Переход"
        },
        
        {
            type: ".g-text g-text_variant_header-1 base-admin__title:textEquals(Проекты)", desc: "Раздел доступен"
        },

        { click : "#root .g-button__text:textEquals(Создать)" },

        { type : projectName, target : ".base-admin__form span.g-text-input:nth-of-type(3) input.g-text-input__control" },

        { type : "Тестовый проект", target : ".base-admin__form span.g-text-input:nth-of-type(4) input.g-text-input__control" },

        { click : "#root .g-button__text:textEquals(Отмена)" },

        { click : "#root .g-button__text:textEquals(Создать)" },

        { type : projectName, target : ".base-admin__form span.g-text-input:nth-of-type(3) input.g-text-input__control" },

        { type : "Тестовый проект", target : ".base-admin__form span.g-text-input:nth-of-type(4) input.g-text-input__control" },

        { click : "#root .base-admin-form__buttons-wrapper .g-button__text:textEquals(Создать)" },

        { click : "#root .g-button__text:textEquals(Изменить)" },

        { type : "1", target : ".base-admin__form span.g-text-input:nth-of-type(3) input.g-text-input__control" },

        { click : "#root .base-admin__form .g-button_view_action :textEquals(Изменить)" },

        { type: "td.g-table__cell g-table__cell_edge-padding:textEquals('" + projectName + "1')" },

        { click : "#root .g-button__text:textEquals(Изменить)" },

        { type : "[BACKSPACE]", target : ".base-admin__form span.g-text-input:nth-of-type(3) input.g-text-input__control" },

        { click : "#root .base-admin__form .g-button__text:textEquals(Изменить)" },

        { type: "td.g-table__cell g-table__cell_edge-padding:textEquals('" + projectName + "')" },
    )
});
