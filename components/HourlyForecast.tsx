import getIcon from "@/services/getIcon";

interface HourlyForecastProps {
    hourlyData: any[];
  }

  const HourlyForecast: React.FC<HourlyForecastProps> = ({ hourlyData }) => {
    if (!hourlyData) return null;
  
    return (
      <div className="my-4">
        <h3 className="text-xl font-bold mb-2">Hourly Forecast</h3>
        <div className="flex overflow-x-auto space-x-4 p-2 bg-gray-100 rounded-lg">
          {hourlyData.slice(0, 24).map((hour, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md border text-center">
              <h4 className="font-bold">{hour.datetime?.slice(0,5)}</h4>
              <p className="text-lg">{hour.temp}°C</p>
              <img src={getIcon(hour.icon)} alt={hour.icon} className="mx-auto mb-2" />
              <p className="text-sm">{hour.conditions}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default HourlyForecast;