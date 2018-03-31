const yargs = require('yargs');
const geocode = require('./geocode/geocode.js')
const weather = require('./weather/weather.js')

const argv= yargs
	.options({
		a:{
			demand: true,
			alias: 'address',
			describe: 'Address to fetch for weather for',
			string: true,
		}
	})
	.help()
	.alias('help','h')
	.argv;
// console.log(argv.address);
 geocode.geocodeAddress(argv.address, (errorMessage, results)=>{
	if(errorMessage){
		console.log(errorMessage);
		return errorMessage;
	} else {
		console.log(JSON.stringify(results,undefined,2));
		weather.getweather(results,(errorMessage, answer)=>{
			if(errorMessage){
				console.log(errorMessage);
			} else {
				 console.log(`Its currently ${answer.temperature}. It feels like ${answer.apparentTemp}`);
			}
		})
		 // return results;
	}
})
// console.log(result);



// 29bddbdfe731c52458b30c1de9d51003

// const request = require('request');
//
// request({
// 	url:'https://api.darksky.net/forecast/29bddbdfe731c52458b30c1de9d51003/40.5377063,-74.8507131',
// 	proxy: 'http://192.168.1.107:3128',
// 	json: true
// },(error,response,body)=>{
// 	if(error){
// 		console.log('Unable to connect to forecast.io servers');
// 	}
// 	else if( response.statusCode === 400){
// 		console.log('Unable to fetch weather');
// 	}
// 	else  if( response.statusCode === 200){
// 		console.log(body.currently.temperature);
// 	}
// })
