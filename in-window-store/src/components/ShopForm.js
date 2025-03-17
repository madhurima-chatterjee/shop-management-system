import { useState } from 'react';

function ShopForm({ closeModal, addShop }) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [manager, setManager] = useState('');
  const [contact, setContact] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !location || !manager || !contact) {
      alert('Please fill out all fields');
      return;
    }

    const newShop = { name, location, manager, contact };
    addShop(newShop);  // Pass the new shop to the parent component
    closeModal();      // Close the modal
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Shop Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
          placeholder="Shop Name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
          placeholder="Location"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Manager</label>
        <input
          type="text"
          value={manager}
          onChange={(e) => setManager(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
          placeholder="Manager"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Contact</label>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
          placeholder="Contact"
        />
      </div>

      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={closeModal}
          className="bg-gray-300 px-4 py-2 rounded-lg"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Add Shop
        </button>
      </div>
    </form>
  );
}

export default ShopForm;
