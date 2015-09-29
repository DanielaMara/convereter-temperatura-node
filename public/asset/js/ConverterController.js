var ConverterController = 
{
    init: function()
    {
        ConverterController.setForm();
    },
    
    setForm: function() 
    {
		var form = document.querySelector('form');
		form.addEventListener('submit', function(event)
		{
			ConverterController.converteTemp(form);
			event.preventDefault();
		});
	},
	
	converteTemp: function(form)
	{
	    var
	        celsius = parseFloat(form.celsius.value),
	        result = 0;
	   
	   var callback = function(result) 
	   {
			ConverterController.showResult(result);			
	   };
		
		ConverterService.convertTemperature(celsius, callback);
	},
	
	showResult: function(result)
	{
		var spanResult = document.querySelector('.result');
		spanResult.innerHTML = result;
	}
};

//Inicializacao
ConverterController.init();