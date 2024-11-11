import getIcon from "@/services/getIcon";
import WindDirection from "./WindDirection";

interface WeatherCardProps {
  weatherData: any;
}

const WeatherCardCurrent: React.FC<WeatherCardProps> = ({ weatherData }) => {
  if (!weatherData) return null;

  const { resolvedAddress, currentConditions } = weatherData;

  return (
    <div className="border p-4 rounded-lg shadow-md text-center bg-white">
      <h2 className="text-2xl font-bold">{resolvedAddress}</h2>
      <div className="text-lg">{currentConditions.conditions}</div>
      <div className="text-xl font-semibold">{currentConditions.temp}°C</div>
      <img src={getIcon(currentConditions.icon)} alt={currentConditions.icon} className="mx-auto mb-2" />

      <div>Humidity: {currentConditions.humidity}%</div>
      <div className="flex items-center justify-center mt-2">
        <span className="mr-2">Wind Speed: {currentConditions.windspeed} m/s</span>
        <WindDirection windDirection={currentConditions.winddir} />
      </div>
    </div>
  );
};

export default WeatherCardCurrent;