import { useState } from 'react';
import StaffForm from '../components/StaffForm'; // Make sure the path is correct

function Staff() {
  // Initial static data for staff
  const [staffList, setStaffList] = useState([
    { id: 1, name: 'John Doe', position: 'Manager', contact: '123-456-7890' },
    { id: 2, name: 'Jane Smith', position: 'Sales Associate', contact: '987-654-3210' },
    { id: 3, name: 'Alex Johnson', position: 'Cashier', contact: '555-123-4567' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStaff, setEditingStaff] = useState(null); // To store the staff member being edited

  // Toggle the staff modal form
  const handleModalToggle = (staff = null) => {
    setEditingStaff(staff); // Set the staff data to be edited
    setIsModalOpen(!isModalOpen);
  };

  // Handle deleting a staff member
  const handleDelete = (id) => {
    setStaffList(staffList.filter((staff) => staff.id !== id)); // Remove staff by id
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Staff Management</h1>
        <button
          onClick={() => handleModalToggle()} // Open modal for adding new staff
          className="bg-blue-500 text-white p-2 rounded-lg"
        >
          Add New Staff
        </button>
      </div>

      {/* Modal for adding or editing staff */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">{editingStaff ? 'Edit Staff' : 'Add Staff'}</h2>
            <StaffForm
              closeModal={handleModalToggle}
              setStaffList={setStaffList}
              editingStaff={editingStaff}
            />
          </div>
        </div>
      )}

      {/* Staff list table */}
      <table className="min-w-full table-auto border-collapse mt-4">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Position</th>
            <th className="px-4 py-2 border">Contact</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {staffList.length > 0 ? (
            staffList.map((staff) => (
              <tr key={staff.id}>
                <td className="px-4 py-2 border">{staff.name}</td>
                <td className="px-4 py-2 border">{staff.position}</td>
                <td className="px-4 py-2 border">{staff.contact}</td>
                <td className="px-4 py-2 border">
                  <button
                    className="text-blue-500"
                    onClick={() => handleModalToggle(staff)} // Pass staff to the modal for editing
                  >
                    Edit
                  </button> |{' '}
                  <button
                    className="text-red-500"
                    onClick={() => handleDelete(staff.id)} // Delete the staff member
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="px-4 py-2 border text-center">
                No staff available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Staff;
