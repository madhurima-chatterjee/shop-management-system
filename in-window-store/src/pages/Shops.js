import { useState } from 'react';
import ShopForm from '../components/ShopForm';

function Shops() {
  // Static shops data
  const [shops, setShops] = useState([
    { id: 1, name: 'Shop 1', location: 'Location A', manager: 'Manager A', contact: '1234567890' },
    { id: 2, name: 'Shop 2', location: 'Location B', manager: 'Manager B', contact: '0987654321' },
    { id: 3, name: 'Shop 3', location: 'Location C', manager: 'Manager C', contact: '1122334455' },
    { id: 4, name: 'Shop 4', location: 'Location D', manager: 'Manager D', contact: '2233445566' },
    { id: 5, name: 'Shop 5', location: 'Location E', manager: 'Manager E', contact: '3344556677' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle the modal
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Function to add new shop to the list
  const handleAddShop = (newShop) => {
    setShops((prevShops) => [...prevShops, { id: prevShops.length + 1, ...newShop }]);
  };

  // Function to delete a shop from the list
  const handleDeleteShop = (id) => {
    setShops((prevShops) => prevShops.filter(shop => shop.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Shops Management</h1>
        <button
          onClick={handleModalToggle}
          className="bg-blue-500 text-white p-2 rounded-lg"
        >
          Add New Shop
        </button>
      </div>

      {/* Show modal if it is open */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Add Shop</h2>
            <ShopForm closeModal={handleModalToggle} addShop={handleAddShop} />
          </div>
        </div>
      )}

      {/* Table to display the list of shops */}
      <table className="min-w-full table-auto border-collapse mt-4">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Shop Name</th>
            <th className="px-4 py-2 border">Location</th>
            <th className="px-4 py-2 border">Manager</th>
            <th className="px-4 py-2 border">Contact</th>
            <th className="px-4 py-2 border">Actions</th> {/* New column for Delete */}
          </tr>
        </thead>
        <tbody>
          {shops.length > 0 ? (
            shops.map((shop) => (
              <tr key={shop.id}>
                <td className="px-4 py-2 border">{shop.name}</td>
                <td className="px-4 py-2 border">{shop.location}</td>
                <td className="px-4 py-2 border">{shop.manager}</td>
                <td className="px-4 py-2 border">{shop.contact}</td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => handleDeleteShop(shop.id)} // Delete button functionality
                    className="bg-red-500 text-white px-4 py-1 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="px-4 py-2 border text-center">
                No shops available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Shops;
