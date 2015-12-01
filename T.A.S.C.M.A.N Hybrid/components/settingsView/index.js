'use strict';

app.settingsView = kendo.observable({
    beforeShow: function(){
         if(localStorage.getItem('sportID') == 0){
            if(localStorage.getItem('phaseID')==0){
                app.mobileApp.navigate("#home");
            }
        }
    },
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_settingsView

// END_CUSTOM_CODE_settingsView