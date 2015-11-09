'use strict';

app.weekView = kendo.observable({
    onShow: function() {},
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
                    error: function() { console.log(arguments); }
                });
                wkdays.fetch();
// END_CUSTOM_CODE_weekView