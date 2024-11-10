import getIcon from "@/services/getIcon";
import WindDirection from "./WindDirection";

interface WeatherCardProps {
    weatherData: any;
  }
  
  const WeatherCardCurrent: React.FC<WeatherCardProps> = ({ weatherData }) => {
    if (!weatherData) return null;
  
    const { name, main, currentConditions, wind } = weatherData;
  
    return (
      <div className="border p-4 rounded-lg shadow-md text-center bg-white">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-lg">{currentConditions.conditions}</p>
        <p className="text-xl font-semibold">{currentConditions.temp}°C</p>
        <img src={getIcon(currentConditions.icon)} alt={currentConditions.icon} className="mx-auto mb-2" />
        
        <p>Humidity: {currentConditions.humidity}%</p>
        <p>Wind Speed: {currentConditions.windspeed} m/s <WindDirection windDirection={currentConditions.winddir || 0} /></p>
      </div>
    );
  };
  
  export default WeatherCardCurrent;