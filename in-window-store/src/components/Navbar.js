import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 bg-blue-600 text-white">
      {/* Logo Section */}
      <div className="text-2xl font-semibold">
        In-Window-Store
      </div>

      {/* Right side: Profile */}
      <div className="flex items-center space-x-6">
        {/* Profile Section */}
        <div className="relative">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">
            Profile
          </button>
          {/* Profile Dropdown */}
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 hidden">
            <ul>
              <li>
                <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  My Profile
                </Link>
              </li>
              <li>
                <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Settings
                </Link>
              </li>
              <li>
                <Link to="/logout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
