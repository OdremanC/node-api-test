 function getBootstrap(){
	return new Promise(function(resolve, reject) {
		request(config, function (error, response, body) {
      		if(response.statusCode == 201){
        		resolve(body);
      		} else {
        		reject('error: '+ response.statusCode);
      		}
    	}
  		)
	});
}



getBootstrap()
.then(function(response){
	res.send(response);
})
.catch(function(error){
	console.log(error);
})