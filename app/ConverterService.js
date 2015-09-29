var ConverterService = 
{

	convertTemperature: function(celsius) 
    {
		if(typeof(celsius) === 'number') 
        {
			return (celsius * 1.8) + 32;;
        }
        return null;
	}
};

module.exports = ConverterService;