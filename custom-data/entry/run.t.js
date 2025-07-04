describe({
    name : "New recording...",
    enablePageRedirect : true
}, function(t) {
    t.harness.helperObj.resetPage(t);

    var chartName = 'Charts: Area chart';

    t.chain(
        t.harness.helperObj.loginHandler(
            t, 
            t.harness.helperObj.__NAMES__.MASTER.login, 
            t.harness.helperObj.__NAMES__.MASTER.password
        ),
        t.harness.helperObj.workbookOrCollectionClickHandler(
            t, 
            t.harness.helperObj.__NAMES__.DEFAULT_WORKBOOK_NAME
        ),
        t.harness.helperObj.entryClickHandler(
            t, 
            chartName
        ),
        {
            waitFor: 3000
        },
        t.harness.helperObj.notErrorFoundHandler(t)
    )
});