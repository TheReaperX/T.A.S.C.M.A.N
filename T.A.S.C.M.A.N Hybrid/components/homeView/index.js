'use strict';

var sportsDataSource = [];
var phaseDataSource = [];
var url;

app.homeView = kendo.observable({
    onShow: function() {},
    afterShow: function() {},
    sportsDataSource : sportsDataSource,
    phaseDataSource: phaseDataSource,
    selectedSportId: null,
        onChange: function(e) {
            url= "http://unkkbeba62de.nanaarkorful12.koding.io/service/retrieve_phases.php?sportid=" + $("#dropdown").val();
            console.log(url);
    },
    selectedPhaseId: null
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
        url:url,
        dataType : "json",
        context: this,
        success: function(data) {
            console.log(data);
            console.log(url);
            app.homeView.set("phaseDataSource", data);
            app.homeView.set("selectedPhaseId", 0);
        }
});
kendo.bind($("select"),app.homeView);
// START_CUSTOM_CODE_homeView

// END_CUSTOM_CODE_homeView