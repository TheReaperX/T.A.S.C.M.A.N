'use strict';


app.homeView = kendo.observable({
    onShow: function() {
        if(localStorage.getItem('sportID') == 0){
            if(localStorage.getItem('phaseID')==0){
                app.mobileApp.navigate('components/homeView/view.html');
            }
        }
    },
    afterShow: function() {}
});


// START_CUSTOM_CODE_homeView

 var vmCA = kendo.observable({
      sportData: new kendo.data.DataSource({
        transport: {
          read: {
            url: 'http://unkkbeba62de.nanaarkorful12.koding.io/service/retrieve_sport.php',
            dataType:'jsonp'
          }
        }
      }),

      phaseData: new kendo.data.DataSource({
        transport: {
          read: {
            url: 'http://unkkbeba62de.nanaarkorful12.koding.io/service/retrieve_phases.php',
            dataType:'jsonp'
          }
        }
      }),
      
      sport: '',
      phase: '',
      
      onChange: function (e) {
          	var sportID = vmCA.get("sport");
            vmCA.set("phaseData",new kendo.data.DataSource({
                transport: {
                  read: {
                    url: 'http://unkkbeba62de.nanaarkorful12.koding.io/service/retrieve_phases.php',
                    dataType:'jsonp'
                  }
                },
                filter: { field: "SPORT_ID", operator: "eq", value: sportID }
          	}));
          	vmCA.set("phase",$('#phase').val());
          	localStorage.setItem('sportID',vmCA.get('sport'));
        	localStorage.setItem('phaseID',vmCA.get('phase'));
            console.log('onChange', vmCA);
          	vmCA.set("phase","");
      	}
    });  	
    
    kendo.bind($('#myform'), vmCA);


// END_CUSTOM_CODE_homeView