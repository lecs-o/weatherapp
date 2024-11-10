interface WindDirectionProps {
    windDirection: number;
  }
  
  const WindDirection: React.FC<WindDirectionProps> = ({ windDirection }) => {
    const arrowStyle = {
      transform: `rotate(${windDirection}deg)`,
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      borderBottom: '20px solid blue',
      width: 0,
      height: 0,
      margin: '0 auto',
    };
  
    return (
          <span className="flex justify-center items-center">
            <div style={arrowStyle}></div>
          </span>
    );
  };
  
  export default WindDirection;