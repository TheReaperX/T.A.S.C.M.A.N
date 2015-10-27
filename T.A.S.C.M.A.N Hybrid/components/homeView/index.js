'use strict';

var sportsDataSource = [];
var phaseDataSource = [];

app.homeView = kendo.observable({
    onShow: function() {},
    afterShow: function() {},
    sportsDataSource : sportsDataSource,
    phaseDataSource: phaseDataSource,
    selectedSportId: null,
        onChange: function(e) {
            //console.log(this.get("selectedSportId"));
            //console.log(this.get("selectedPhaseId"));
            console.log($("#dropdown").val());
    }
});

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


$.ajax({
        type: 'GET',               
        url: "http://unkkbeba62de.nanaarkorful12.koding.io/service/retrieve_phases.php?sportid=4",
        dataType : "json",
        context: this,
        success: function(data) {
            console.log(data);
            app.homeView.set("phaseDataSource", data);
        }
});
kendo.bind($("select"),app.homeView);
// START_CUSTOM_CODE_homeView

// END_CUSTOM_CODE_homeView