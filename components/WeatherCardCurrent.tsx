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
        <div className="text-lg">{currentConditions.conditions}</div>
        <div className="text-xl font-semibold">{currentConditions.temp}°C</div>
        <img src={getIcon(currentConditions.icon)} alt={currentConditions.icon} className="mx-auto mb-2" />
        
        <div>Humidity: {currentConditions.humidity}%</div>
        <div>Wind Speed: {currentConditions.windspeed} m/s <WindDirection windDirection={currentConditions.winddir || 0} /></div>
      </div>
    );
  };
  
  export default WeatherCardCurrent;