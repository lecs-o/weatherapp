const About: React.FC = () => {
  return (
    <div className="flex flex-col flex-grow">
      <main className="flex-grow container mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">About This Application</h1>
        <p className="text-lg mb-4">
          This weather application was created to demonstrate the use of Next.js with TypeScript.
          It provides weather information by utilizing the Visual Crossing Weather API. The application
          includes features such as hourly and daily forecasts, as well as wind direction indicators.
        </p>
        <p className="text-lg">
          Built with love by a weather enthusiast using modern web development technologies.
        </p>
      </main> 
    </div>
  );
};

export default About;