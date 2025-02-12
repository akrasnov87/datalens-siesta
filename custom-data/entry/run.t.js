describe({
    name : "New recording...",
    enablePageRedirect : true
}, function(t) {
    t.global.localStorage.clear();
    t.global.location.reload();

    var args = null;
    var pageUrl = null;

    var workbookName = 'OpensourceDemo';
    var chartName = 'Charts: Area chart';
    
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

        { click : "#root .dl-collection-content-table__content .dl-collection-content-table__title-col-text:textEquals(" + workbookName + ")" },

        { click : "#root .dl-content-row__title-col-text:textEquals(" + chartName + ")" },

        {
            waitFor: 5000
        },

        function(next) {
            t.selectorNotExists('.datalens-chartkit-error__title', 'Ошибок нет');
            next();
        }
    )
});