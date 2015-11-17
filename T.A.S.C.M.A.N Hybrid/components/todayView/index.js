'use strict';

var wkdayId;
var phaseId;
var wkdate;
var currentDate;
//get today's date 
app.todayView = kendo.observable({
    onShow: function(e) {
        wkdayId = e.view.params.wkdayid;
        wkdate = e.view.params.wkdate;
        currentDate= e.view.params.currentDate;
        var wkData = {WkdayID:wkdayId,WkDate:wkdate,currDate:currentDate};
        phaseId = 0;
        app.todayView.set("PhaseID", phaseId);
        app.todayView.set("Wk_info", wkData);
        console.log(app.todayView.get("Wk_info"));
        if(typeof wkdayId ==='undefined'){
            //set phase id
            //phaseId = e.params.phaseId;
            //get workdays from active cycle
            //match today's date to one of the days
            
        }
    },
    afterShow: function() {
    },
    PhaseID:null,
   	Wk_info: []
});

// START_CUSTOM_CODE_todayView
   var schema = {
                    data: "",
                    model: {}
                };
	//get the data for todays warm up
	var warmup = new kendo.data.DataSource({
                    schema: schema,
                    transport: {
                        read: { 
                            url: "http://unkkbeba62de.nanaarkorful12.koding.io/service/retrieve_worksets.php?wkdayid=21",//+ app.todayView.get("WkdayID"),
                            dataType: "json", 
                            type: "GET"
                        }
                    },
                    filter: { field: "IS_WARMUP", operator: "eq", value: "1" },
        			change:function(e) {
                               $("#mywarmup").data("kendoMobileListView").dataSource.read();
                          },
                    error: function() { console.log(arguments); }
                });

                warmup.fetch(); 
				//function reloadWarmUps() {
       				//$("#mywarmup").data("kendoMobileListView").dataSource.read();	
    		    //}
	
	//get the data for todays lifts
		var lifts = new kendo.data.DataSource({
                    autoSync: true,
                    schema: schema,
                    transport: {
                        read: { 
                            url: "http://unkkbeba62de.nanaarkorful12.koding.io/service/retrieve_worksets.php?wkdayid=21",
                            dataType: "json", 
                            type: "GET"
                        }
                    },
                    filter: { field: "IS_WARMUP", operator: "neq", value: "1" },
            		change:function(e) {
                               $("#mylifts").data("kendoMobileListView").dataSource.read();
                          },
                    sort: { field: "ORDER_NUMBER", dir: "asc" },
                    error: function() { console.log(arguments); }
                });

                lifts.fetch();
            	
             function reloadLifts() {
       				$("#mylifts").data("kendoMobileListView").dataSource.read();	
    		 }
	// get the data for auxilary exercises
		var auxilary = new kendo.data.DataSource({ data: [ 1, 2, 3, 4, 5] });
	//get notes on exercises
		var notes = new kendo.data.DataSource({ data: [ 1, 2, 3, 4, 5] });
// END_CUSTOM_CODE_todayView