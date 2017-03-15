//tesing git
var carService = require('./carService.js')
var swRegister = require('./swRegister.js')
window.pageEvents = {

	 loadCarPage : function(carId){
        carService.loadCarPage(carId);
    }, 
    loadMore: function(){
    	carService.loadMoreRequests();
    }
}

carService.loadMoreRequests();