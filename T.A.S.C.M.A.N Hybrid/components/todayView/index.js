'use strict';

app.todayView = kendo.observable({
    onShow: function(e) {
       console.log(e.view.params);
    },
    afterShow: function() {}
});

// START_CUSTOM_CODE_todayView
   var wkdayid = e.view.params.wkdayid;
   console.log(wkdayid);
   var schema = {
                    data: "",
                    model: {}
                };
	//get the data for todays warm up
	var warmup = new kendo.data.DataSource({
                    schema: schema,
                    transport: {
                        read: { 
                            url: "http://unkkbeba62de.nanaarkorful12.koding.io/service/retrieve_worksets.php?wkdayid=" + wkdayid,
                            dataType: "json", 
                            type: "GET"
                        }
                    },
                    filter: { field: "IS_WARMUP", operator: "eq", value: "1" },
                    error: function() { console.log(arguments); }
                });

                warmup.fetch(); 
				function reloadWarmUps() {
       				$("#mywarmup").data("kendoMobileListView").dataSource.read();	
    		    }
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