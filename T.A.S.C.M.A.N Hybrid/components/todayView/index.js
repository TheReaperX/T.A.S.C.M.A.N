'use strict';

var wkdate;
app.todayView = kendo.observable({
    beforeShow:function(e){
        //check if sportID and phaseIDare set. if not navigate back so user can set them.
         if(localStorage.getItem('sportID') == 0){
            if(localStorage.getItem('phaseID')==0){
                app.mobileApp.navigate("#home");
            }
        }
        
      
        
    },
    onShow: function(e) {
        localStorage.setItem('wkDayID',e.view.params.wkdayid);
        wkdate = e.view.params.wkdate;
        var wkData = {WkDate:wkdate}; 
        app.todayView.set("Wk_info", wkData);
        console.log(app.todayView.get("Wk_info"));
    },
    afterShow: function() {
    },
   	Wk_info: []
});


            	
	// get the data for auxilary exercises
		var auxilary = new kendo.data.DataSource({ data: [ 1, 2, 3, 4, 5] });
	//get notes on exercises
		var notes = new kendo.data.DataSource({ data: [ 1, 2, 3, 4, 5] });
// END_CUSTOM_CODE_todayView