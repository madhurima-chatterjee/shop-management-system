import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-1/5 bg-gray-800 text-white h-full flex flex-col">
      {/* Sidebar Logo */}
      <div className="flex-shrink-0">
        {/* Set image to span the full width of the sidebar */}
        <img 
          src="/images/logo.png"  // Correct path relative to the public folder
          alt="In-Window Store Logo" 
          className="w-full h-32 object-cover" // Image takes full width, with a fixed height
        />
      </div>

      {/* Sidebar Navigation Links */}
      <ul className="space-y-4 mt-4 px-4 flex-grow">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/shops">Shops</Link></li>
        <li><Link to="/staff">Staff Management</Link></li>
        <li><Link to="/help">Help</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Logout</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
