import { useState, useEffect } from 'react';

function StaffForm({ closeModal, setStaffList, editingStaff }) {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [contact, setContact] = useState('');

  // Pre-fill the form if editing staff
  useEffect(() => {
    if (editingStaff) {
      setName(editingStaff.name);
      setPosition(editingStaff.position);
      setContact(editingStaff.contact);
    }
  }, [editingStaff]);

  // Handle form submission (either adding or editing)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingStaff) {
      // Edit existing staff
      const updatedStaff = {
        ...editingStaff, // Use existing staff data
        name,
        position,
        contact,
      };

      setStaffList((prevList) =>
        prevList.map((staff) =>
          staff.id === editingStaff.id ? updatedStaff : staff
        )
      );
    } else {
      // Add new staff
      const newStaff = {
        id: Date.now(), // Unique id for new staff
        name,
        position,
        contact,
      };

      setStaffList((prevList) => [...prevList, newStaff]);
    }

    closeModal(); // Close the modal after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Position</label>
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Contact</label>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={closeModal}
          className="bg-gray-400 text-white py-2 px-4 rounded"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          {editingStaff ? 'Update Staff' : 'Add Staff'}
        </button>
      </div>
    </form>
  );
}

export default StaffForm;
