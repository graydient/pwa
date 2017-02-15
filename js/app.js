var carService = require('./carService.js')

window.pageEvents = {

	 loadCarPage : function(carId){
        carService.loadCarPage(carId);
    }, 
    loadMore: function(){
    	carService.loadMoreRequests();
    }
}

carService.loadMoreRequests();