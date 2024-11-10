import getIcon from "@/services/getIcon";

interface DailyForecastProps {
    dailyData: any[];
  }
  
  const DailyForecast: React.FC<DailyForecastProps> = ({ dailyData }) => {
    if (!dailyData) return null;
  
    return (
      <div className="my-4">
        <h3 className="text-xl font-bold mb-2">15-Day Forecast</h3>
        <div className="flex overflow-x-auto space-x-4 p-2 bg-gray-100 rounded-lg">
          {dailyData.slice(0, 15).map((day, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md border text-center min-w-[120px]">
              <h4 className="font-bold whitespace-nowrap">{day.datetime}</h4>
              <p className="text-lg">{day.tempmax}°C</p>
              <p className="text-lg">{day.tempmin}°C</p>
              <img src={getIcon(day.icon)} alt={day.icon} className="mx-auto mb-2" />
              <p className="text-sm">{day.conditions}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default DailyForecast;