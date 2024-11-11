import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">Weather Application</h1>
      <Link href="/about">
        <button className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-200">
          Info
        </button>
      </Link>
    </header>
  );
};

export default Header;