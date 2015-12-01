'use strict';

var url;
app.weekView = kendo.observable({
    beforeShow: function(){
         if(localStorage.getItem('sportID') == 0){
            if(localStorage.getItem('phaseID')==0){
                app.mobileApp.navigate("#home");
            }
        }
    },
    onShow: function() {
 		url = "http://unkkbeba62de.nanaarkorful12.koding.io/service/retrieve_work_days.php?phaseid=21"; //localStorage.getItem("phaseID");
        console.log(url);
    },
    afterShow: function() {}
});

// START_CUSTOM_CODE_weekView

                var wkdays = new kendo.data.DataSource({
                    schema: {model:{id:"RECORD_ID"}},
                    transport: {
                        read: { 
                            url: "http://unkkbeba62de.nanaarkorful12.koding.io/service/retrieve_work_days.php?phaseid=21",
                            dataType: 'jsonp',
                        }
                    },
                    sucess: function(){console.log("sucess")},
                    error: function() { console.log(arguments);}
                });
                wkdays.fetch();
				
// END_CUSTOM_CODE_weekView
