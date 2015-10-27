'use strict';

var sportsDataSource = [];

app.homeView = kendo.observable({
    onShow: function() {},
    afterShow: function() {},
    /*selectedProduct: null,
    sports: new kendo.data.DataSource({
          transport: {
            read:  {
              url: "http://demos.telerik.com/kendo-ui/service/products",
              dataType: "jsonp" // "jsonp" is required for cross-domain requests; use "json" for same-domain requests
            },
          schema: {
            model: { id: "ProductID", name:"ProductName" }
          }
	});
    sports: [
        { id: 1, name: "Coffee" },
        { id: 2, name: "Tea" },
        { id: 3, name: "Juice" }
    ] */
    
    sportsDataSource : sportsDataSource,
    selectedSportId: null,
        onChange: function(e) {
            console.log(this.get("selectedSportId"));
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
            app.homeView.set("selectedSportId", 3);
        }
});
kendo.bind($("select"),app.homeView);
// START_CUSTOM_CODE_homeView

//kendo.bind($("select"), viewModel);
// END_CUSTOM_CODE_homeView