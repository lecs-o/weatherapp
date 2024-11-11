import getIcon from "@/services/getIcon";
import { HourlyData } from "./HourlyForecast";
import Image from 'next/image';
export interface OneDayForecast {
  datetime: string,
  tempmax: string,
  tempmin: string,
  icon: string,
  conditions: string,
  hours: HourlyData[]
}

export interface DailyForecastProps {
  dailyData: OneDayForecast[];
}

const DailyForecast: React.FC<DailyForecastProps> = ({ dailyData }) => {
  if (!dailyData) return null;

  return (
    <div className="my-4">
      <h3 className="text-xl font-bold mb-2">15-Day Forecast</h3>
      <div className="flex overflow-x-auto space-x-4 p-2 bg-gray-100 rounded-lg">
        {dailyData.slice(0, 15).map((day) => (
          <div key={day.datetime} className="p-4 bg-white rounded-lg shadow-md border text-center min-w-[120px]">
            <h4 className="font-bold whitespace-nowrap">{day.datetime}</h4>
            <div className="text-lg text-red-400">{day.tempmax}°C</div>
            <div className="text-lg text-blue-400">{day.tempmin}°C</div>
            <Image
              src={getIcon(day.icon)}
              alt={day.icon}
              className="mx-auto mb-2"
              width={50} 
              height={50}
            />
            <div className="text-sm">{day.conditions}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;