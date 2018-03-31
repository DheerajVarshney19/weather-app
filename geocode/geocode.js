const request = require('request');
// console.log('started geocode.js');


var geocodeAddress=(address, callback)=>{
	var encodedAddress = encodeURIComponent(address);

  request({
  	url:`http://maps.google.com/maps/api/geocode/json?address=${encodedAddress}`,
    // proxy:'http://192.168.1.107:3128',
    json: true
  },(error,response,body)=>{
	if(error){
		callback('Google servers error')
	}
	else if (body.status === 'ZERO_RESULTS'){
		callback('Unable to find that address');
	}
	else if(body.status === 'OK'){
		callback(undefined, {
			address: body.results[0].formatted_address,
			Latitude: body.results[0].geometry.location.lat,
			Longitude: body.results[0].geometry.location.lng,
		})
	}
})
}




module.exports = {
	geocodeAddress,
}

//
//  29bddbdfe731c52458b30c1de9d51003
