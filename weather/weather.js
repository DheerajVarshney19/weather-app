const request = require('request');
// console.log('started weather.js');
// const geocode = require('./geocode/geocode.js')


var getweather=(results,callback)=>{
  	var latitude = results.Latitude
    var longitute = results.Longitude
    request({
    	url:`https://api.darksky.net/forecast/29bddbdfe731c52458b30c1de9d51003/${latitude},${longitute}`,
      // proxy:'http://192.168.1.107:3128',
      json: true
    },(error,response,body)=>{
      if(error){
    		callback('Unable to connect to forecast.io servers');
    	}
    	else if( response.statusCode === 400){
    		callback('Unable to fetch weather');
    	}
    	else  if( response.statusCode === 200){
    		callback(undefined,{
          temperature: body.currently.temperature,
          apparentTemp: body.currently.apparentTemperature,
        });
      }
})
}

module.exports={
  getweather,
}
