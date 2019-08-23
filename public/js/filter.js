//FILTER FUNCTIONS

let User = require('../../models/user');

let Filter = {};

Filter.filterByDate = function(startDate, endDate){
    //User.find({ date: { $lt: 30 } } )
};

Filter.filterByPrice = function(startPrice, endPrice){
    User.find({
        price: { $lt: endPrice }, 
        price: { $gt: startPrice }    
    });
};

Filter.filterByCategory = function(category){
    User.find({ category: category });
}

Filter.linkTest = function() {
    console.log("Hit filter linked")
}


module.exports = Filter;