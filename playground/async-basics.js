console.log('Starting app');

setTimeout(()=>{
	console.log('Inside of Callback');
}, 2000);

setTimeout(()=>{
	console.log('Second set timeout workin.')
},0);

console.log('finishing app');