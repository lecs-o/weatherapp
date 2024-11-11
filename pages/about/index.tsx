import { FaArrowLeft } from "react-icons/fa";
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <div className="flex flex-col flex-grow">
      <main className="flex-grow container mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">About This Application</h1>
        <h3 className="text-2xl font-bold mb-4">Version: 1.0.0 Beta</h3>
        <p className="text-lg mb-4">
          This weather application was created to demonstrate the use of Next.js with TypeScript.
          It provides weather information by utilizing the Visual Crossing Weather API. The application
          includes features such as hourly and daily forecasts, as well as wind direction indicators.
        </p>
        <p className="text-lg">
          Built with love by a weather enthusiast using modern web development technologies.
        </p>
        <Link href="/">
          <button className="bg-blue-500 text-white px-6 py-3 mt-4 rounded-md text-lg hover:bg-blue-600 flex items-center justify-center mx-auto">
            <FaArrowLeft className="mr-2" /> Back to app
          </button>
        </Link>
      </main>
    </div>
  );
};

export default About;