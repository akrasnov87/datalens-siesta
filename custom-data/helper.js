var __NAMES__ = {
    MASTER: {
        login: 'master',
        password: 'qwe-123',
    },
    DEFAULT_WORKBOOK_NAME: 'OpenSource Demo',
    DEFAULT_DASHBOARD_NAME: 'DataLens Demo',

};
var __ARGUMENTS__ = {}; // настройки из conf.json
var __DEFAULT_WAIT_TIME__ = 250; // задержка по умолчанию для handler

var helperObj = {
    /**
     * Сброс настроек
     * @param {*} t 
     */
    resetPage: function(t) {
        t.global.localStorage.clear();
        t.global.location.reload();
    },
    /**
     * Авторизация
     * @param {*} t 
     * @param {String} login логин
     * @param {String} password пароль
     * @returns 
     */
    loginHandler: function(t, login, password) {
        return [
            { click : "#root .g-text-input:nth-of-type(1) .g-text-input__control", desc: "Нажатие на поле логин" },

            { type : login + "[TAB][TAB]" + password, target : "#root .g-text-input:nth-of-type(1) .g-text-input__control", desc: "Ввод логина (" +login + ") и пароля (" + password + ")"  },

            { waitForPageLoad : [], trigger : { click : "#root .g-button_view_outlined" }, desc: "Нажатие на кнопку ВОЙТИ" }
        ]
    },

    /**
     * Нажатие на workbook или collection
     * @param {*} t 
     * @param {String} name имя workbook или collection (пользовательское)
     * @returns 
     */
    workbookOrCollectionClickHandler: function(t, name) {
        return [
            { click : "#root .dl-collection-content-table__title-col-text:textEquals(" + name + ")", desc: "Переход на workbook или collection " + name },
            { waitFor: __DEFAULT_WAIT_TIME__ }
        ]
    },

    /**
     * Нажатие на элемент в workbook или collection
     * @param {*} t 
     * @param {*} name имя элемента (пользовательское)
     * @returns 
     */
    entryClickHandler: function(t, name) {
        return [
            { click : "#root .dl-main-tab-content .dl-content-row__title-col-text:textEquals(" + name + ")", desc: "Переход на entry " + name },
            { waitFor: __DEFAULT_WAIT_TIME__ }
        ]
    },

    /**
     * Проверка блока с выводом ошибки
     * @param {*} t 
     * @returns 
     */
    notErrorFoundHandler: function(t) {
        return {
            action: function(next) {
                t.selectorNotExists('.datalens-chartkit-error__title');
                next();
            },
            desc: "Поиск блока с выводом ошибки"
        };
    },

    /**
     * Проверка наличия блока
     * @param {*} t 
     * @param {*} name имя класс
     * @returns 
     */
    foundHandler: function(t, name) {
        return {
            action: function(next) {
                t.selectorExists(name);
                next();
            },
            desc: "Блок " + name + " найден"
        };
    },

    /**
     * Проверка на отсутствие блока
     * @param {*} t 
     * @param {*} name имя класс
     * @returns 
     */
    notFoundHandler: function(t, name) {
        return {
            action: function(next) {
                t.selectorNotExists(name);
                next();
            },
            desc: "Блок " + name + " не найден"
        };
    },

    /**
     * Выбор действий для Entry 
     * @param {*} t 
     * @returns 
     */
    entryActionsClickHandler: function(t) {
        return [
            { click : "#root .dl-entry-panel__action-btn .g-button__icon-inner > svg:nth-of-type(1)" }
        ]
    },

    /**
     * Выбор действия Поделиться
     * @param {*} t 
     * @param {*} name пользовательское имя действия
     * @returns 
     */
    entryActionClickHandler: function(t, name) {
        return [
            { click : ".g-menu__item-content:textEquals(" + name + ")", desc: "Выбор действия " + name }
        ]
    },

    /**
     * Переход на страницу
     * @param {*} t 
     * @param {*} url имя страницы
     * @returns 
     */
    goToPage: function(t, url) {
        return {
            action: function(next) {
                t.global.localStorage.clear();
                t.global.location.href = __ARGUMENTS__.pageUrl + url

                next();
            },
            desc: "Переход на страницу " + url
        }
    },

    /**
     * Перезагрузка страницы
     * @param {*} t 
     * @returns 
     */
    resetAuthHandler: function(t) {
        return {
            action: function(next) {
                t.global.localStorage.clear();
                t.global.location.reload();

                next();
            },
            desc: "Сброс данных и перезагрузка страницы"
        }
    },

    /**
     * Создание workbook или collection
     * @param {*} t 
     * @returns 
     */
    createWorkbookOrCollectionClickHandler: function(t) {
        return [
            { click : "#root .g-button__icon_side_end .g-button__icon-inner > svg:nth-of-type(1)" }
        ]
    }
}