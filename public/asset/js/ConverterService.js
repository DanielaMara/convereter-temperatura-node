var ConverterService = 
{

convertTemperature: function(celsius, callback)
	{
		$.ajax({
		  url: '/api/convert', //end-point to back-end
		  data: {'celsius': celsius},
		  success: function(result) 
		  {
		  	callback(parseFloat(result));
		  },
		  error: function()
		  {
		  	callback(null);
		  }
		});
	}
};