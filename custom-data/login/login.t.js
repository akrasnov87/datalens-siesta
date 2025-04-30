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

        { click : "#root .g-text-input:nth-of-type(1) .g-text-input__control" },

        { type : "master[TAB][TAB]qwe-123", target : "#root .g-text-input:nth-of-type(1) .g-text-input__control" },

        { waitForPageLoad : [], trigger : { click : "#root .g-button_view_outlined", offset : [75.11929321289062,24.288330078125] } },

        { click : "#root .dl-collection-content-table__title-col-text:textEquals(OpenSource Demo)" },

        { click : "#root .dl-main-tab-content:nth-of-type(2) .dl-content-row__content-cell_title", offset : [62.10223388671875,38.57928466796875] }
    );
});