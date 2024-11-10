export const getWeatherData = async (city: string): Promise<any> => {
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY || 'LVR245E4KHRCN84YP8L48JHZ6';
    const endpoint = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`;
  
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error('Error fetching weather data');
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Failed to fetch weather data:', error);
      return null;
    }
  };