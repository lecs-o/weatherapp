import { createErrorString } from "@/helpers/createErrorString";

export const getWeatherData = async (city: string): Promise<any> => {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY || 'none';
  const endpoint = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`;
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      return { data: null, error: createErrorString(response.status) }
    }
    const data = await response.json();
    return { data: data, error: null };
  } catch (error) {
    console.error('Failed to fetch weather data:', error);
    return { data: null, error: createErrorString(0) };
  }
};