const bluebird = require('bluebird');
const _ = require('lodash');
const request = require('./request-wrapper');


console.log("hei");
var arr = [1,2,3,4,5,6,7,8,9];

bluebird.map(arr, function(data){
    return request({
      method: 'GET',
      uri: 'http://www.google.com'
    }, 500)
    .then(function(){
    	data = data + 10;
    	console.log(data);
    	if(data == 13){
    		return bluebird.reject(data);
    	}
    	else {
			return bluebird.resolve(data);
    	}
    })
},{concurrency:1})
.then(function(data){
	console.log('final data ->',data);
}, function(e){
	console.log("FAILURE");
})
