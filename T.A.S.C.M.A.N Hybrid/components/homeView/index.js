'use strict';


app.homeView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});


// START_CUSTOM_CODE_homeView
$.ajax({
        type: 'GET',               
        url: "http://unkkbeba62de.nanaarkorful12.koding.io/service/retrieve_sport.php",
        dataType : "json",
        context: this,
        success: function(data) {
            console.log(data);
            sportModel.set("sportsDataSource", data);
            console.log("success setting the sportsDataSource");
        }
});

var sportModel = kendo.observable({
    sportsDataSource:[],
   	selectedSportId:null,
    	onChange: function(){
            var index = $('#dropdown').val();
            console.log(index);
        }
});

kendo.bind($("#sport"), sportModel);





/*

$.ajax({
        type: 'GET',               
        url: "http://unkkbeba62de.nanaarkorful12.koding.io/service/retrieve_sport.php",
        dataType : "json",
        context: this,
        success: function(data) {
            console.log(data);
            app.homeView.set("sportsDataSource", data);
            app.homeView.set("selectedSportId", 0);
        }
});

app.homeView = kendo.observable({
    onShow: function() {},
    afterShow: function() {
    },
    sportsDataSource : [],
    phaseDataSource: phaseDataSource,
    selectedSportId: null,
        onChange: function(e) {
            var index = $('#dropdown').val();
            app.homeView.set("selectedSportId", data[index].RECORD_ID);
            url= "http://unkkbeba62de.nanaarkorful12.koding.io/service/retrieve_phases.php?sportid=" + $("#dropdown").val();
            useSportID(url);
    },
    selectedPhaseId: null
});

function useSportID(url){
    $.ajax({
            type: 'GET',               
            url:url,
            dataType : "json",
            context: this,
            success: function(data) {
				// data[0].DATA_NAME
                // data[0].DATA_ID
               console.log(data);
                app.homeView.set("phaseDataSource", data);
                app.homeView.set("selectedPhaseId", data[index].RECORD_ID);
                $("#dropdown2").val(data[index].PHASE_NAME)
            }
    });
}
kendo.bind($("select"),app.homeView);
*/
// END_CUSTOM_CODE_homeView