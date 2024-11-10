import '../styles/globals.css';
import { useState } from 'react';
import { getWeatherData } from '@/services/weatherService';
import WeatherCardCurrent from '@/components/WeatherCardCurrent';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HourlyForecast from '@/components/HourlyForecast';
import DailyForecast from '@/components/DailyForecast';

const Home: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<any | null>(null);

  const handleSearch = async () => {
    const data = await getWeatherData(city);
    if (!data) {
      alert('City not found or there was an error fetching data');
    } else {
      setWeatherData(data);
    }
  };

  return (
    
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Weather Card App</h1>
        <div className="flex justify-center mb-4">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="border p-2 rounded-lg w-1/2"
          />
          <button
            onClick={handleSearch}
            className="ml-2 bg-blue-500 text-white p-2 rounded-lg"
          >
            Search
          </button>
        </div>
        {weatherData?.currentConditions && <WeatherCardCurrent weatherData={weatherData} />}
        {weatherData?.days && <HourlyForecast hourlyData={weatherData.days[0]?.hours} />}
        {weatherData?.days && <DailyForecast dailyData={weatherData.days} />}
      </main>
      <Footer />
    </div>
  );
};

export default Home;