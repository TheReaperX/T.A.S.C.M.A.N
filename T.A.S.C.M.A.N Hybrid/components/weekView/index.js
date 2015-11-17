'use strict';

app.weekView = kendo.observable({
    onShow: function() {
        
    },
    afterShow: function() {}
});

// START_CUSTOM_CODE_weekView
 var schema = {
                    data: "",
                    model: {}
                };

                var wkdays = new kendo.data.DataSource({
                    schema: schema,
                    transport: {
                        read: { 
                            url: "http://unkkbeba62de.nanaarkorful12.koding.io/service/retrieve_work_days.php?phaseid=21",
                            dataType: "json", 
                            type: "GET"
                        }
                    },
                    change:function(e) {
                                if(this.wkdays.data().length == 0){
                                    //custom logic
                                    $("#work_days").append("<h1>No Workout Days</h1>");
                                }
                          },
                    error: function() { console.log(arguments); }
                });
                wkdays.fetch();
				
// END_CUSTOM_CODE_weekView




/*var vm = kendo.observable({
   wkdayID: null, 
   dataSource: new kendo.DataSource( { 
   transport: {
    read: {
       url: 'http://unkkbeba62de.nanaarkorful12.koding.io/service/retrieve_work_days.php?phaseid=21',
       dataType: "json",
       type:"GET"
    }
    parameterMap: function(options,type) {
        if (type === 'read') {
            return {
               wkdayID: vm.wkdayID
            };
        }
    }
  })
});

function viewShow(e) {
    vm.set("wkdayID", e.view.params.wkdayID);
    // at this point it is usually a good idea to invoke the datasource read() method.
    vm.dataSource.read();
}*/