import DailyForecast, { OneDayForecast } from "@/components/DailyForecast";
import HourlyForecast, { HourlyData } from "@/components/HourlyForecast";
import WeatherCardCurrent from "@/components/WeatherCardCurrent";
import { getWeatherData } from "@/services/weatherService";
import React, { useState } from "react";


interface CurrentConditions {
  conditions: string,
  temp: string,
  icon: string,
  humidity: string,
  windspeed: string,
  winddir: number
}

interface WeatherData {
  days: OneDayForecast[],
  name: string,
  currentConditions: CurrentConditions,
  resolvedAddress: string
}


const Home: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    const data = await getWeatherData(city);
    if (data.error) {
      setError(data.error);
      setWeatherData(null);
    } else {
      setError(null);
      setWeatherData(data.data);
    }
  };

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch()
    }
  }

  return (

    <div className="flex flex-col flex-grow">
      <main className="flex-grow container mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Weather Card App</h1>
        <div className="flex justify-center mb-4">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="border p-2 rounded-lg w-1/2"
            onKeyDown={handleEnter}
          />
          <button
            onClick={handleSearch}
            className="ml-2 bg-blue-500 text-white p-2 rounded-lg"
          >
            Search
          </button>
        </div>
        {!error && !weatherData && <h1 className="text-3xl font-bold mt-4">Please select a city!</h1>}
        {error && <h1 className="text-3xl font-bold mt-4">{error}</h1>}
        <>
          {weatherData?.currentConditions && <WeatherCardCurrent weatherData={weatherData} />}
          {weatherData?.days && <HourlyForecast hourlyData={weatherData.days[0]?.hours} />}
          {weatherData?.days && <DailyForecast dailyData={weatherData.days} />}
        </>
      </main>
    </div>
  );
};

export default Home;