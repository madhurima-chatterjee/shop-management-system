function Contact() {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Contact Page</h1>
        <p className="mb-4">
          Thank you for using In-Window Store Management System. If you have any questions or issues, please feel free to reach out.
        </p>
  
        <h2 className="text-xl font-semibold mt-6">Contact Information:</h2>
        <ul className="space-y-4">
          <li>
            <strong>Organization:</strong> In-Window Store Solutions
          </li>
          <li>
            <strong>Support Email:</strong> support@inwindowstore.com
          </li>
          <li>
            <strong>Phone Number:</strong> +1 (123) 456-7890
          </li>
          <li>
            <strong>Website:</strong> <a href="http://www.inwindowstore.com" target="_blank" rel="noopener noreferrer" className="text-blue-500">www.inwindowstore.com</a>
          </li>
        </ul>
  
        <h2 className="text-xl font-semibold mt-6">IT Company:</h2>
        <p>
          This application was developed by <strong>Your IT Company Name</strong>. You can contact them for technical support or inquiries.
        </p>
        <ul className="space-y-4 mt-4">
          <li>
            <strong>Company Name:</strong> Tech Solutions Co.
          </li>
          <li>
            <strong>Email:</strong> techsupport@techsolutions.com
          </li>
          <li>
            <strong>Phone Number:</strong> +1 (987) 654-3210
          </li>
        </ul>
      </div>
    );
  }
  
  export default Contact;
  