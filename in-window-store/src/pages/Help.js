function Help() {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Help Page</h1>
        <p className="mb-4">
          Welcome to the In-Window Store Management System! Here you will find instructions on how to use the platform.
        </p>
        
        <h2 className="text-xl font-semibold mt-6">How to Add a Shop:</h2>
        <ul className="list-disc ml-6">
          <li>Click on the "Add New Shop" button on the Shops page.</li>
          <li>Fill in the required fields like Shop Name, Location, Manager, and Contact Information.</li>
          <li>Click the "Add Shop" button to submit the form.</li>
        </ul>
  
        <h2 className="text-xl font-semibold mt-6">How to Add Products:</h2>
        <ul className="list-disc ml-6">
          <li>Go to the "Products" page.</li>
          <li>Click on the "Add New Product" button.</li>
          <li>Fill in the Product Name, Quantity, Price, and MRP fields.</li>
          <li>Click the "Add Product" button to save your product.</li>
        </ul>
  
        <h2 className="text-xl font-semibold mt-6">Managing Staff:</h2>
        <ul className="list-disc ml-6">
          <li>Navigate to the "Staff Management" page.</li>
          <li>Click the "Add Staff" button to create a new staff member.</li>
          <li>Provide their name, position, contact information, and other details.</li>
        </ul>
  
        <h2 className="text-xl font-semibold mt-6">Need More Help?</h2>
        <p>If you require more assistance, please contact us via the Contact page.</p>
      </div>
    );
  }
  
  export default Help;
  