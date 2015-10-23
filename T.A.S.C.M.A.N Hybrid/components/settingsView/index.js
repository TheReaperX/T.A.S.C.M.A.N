'use strict';

app.settingsView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_settingsView
(function (global) {
    var SportViewModel,
        app = global.app = global.app || {};

   	SportViewModel = kendo.data.ObservableObject.extend({
        sportDataSource: null,

        init: function () {
            var that = this,
                dataSource,
                jsonUrlToLoad;

            kendo.data.ObservableObject.fn.init.apply(that, []);

            //When you build for Apache Cordova 3.0.0, apply this code instead of using relative URLs. In Apache Cordova 3.0.0, relative URLs might not work properly.
            //jsonUrlToLoad = app.makeUrlAbsolute("data/weather.json");
            jsonUrlToLoad = "http://unkkbeba62de.nanaarkorful12.koding.io/service/retrieve_sport.php";

            dataSource = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: jsonUrlToLoad,
                        dataType: "json"
                    }
                }
            });

            that.set("sportDataSource", dataSource);
        }
    });
    
    app.settingsView = {
        viewModel: new SportViewModel()
    };
})(window);
// END_CUSTOM_CODE_settingsView