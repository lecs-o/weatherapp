import { FaLocationArrow } from "react-icons/fa";

interface WindDirectionProps {
  windDirection: number;
}

const WindDirection: React.FC<WindDirectionProps> = ({ windDirection }) => {
  const arrowStyle = {
    transform: `rotate(${windDirection - 45}deg)`,
  };

  return (
    <span className="ml-2">
      <FaLocationArrow style={arrowStyle} />
    </span>
  );
};

export default WindDirection;