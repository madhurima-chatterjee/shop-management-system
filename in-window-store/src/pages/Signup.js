import { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [formData, setFormData] = useState({
    orgName: '',
    email: '',
    username: '',
    businessCategory: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    logo: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission and validation
    try {
      const response = await axios.post('/api/signup', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error signing up', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Form fields */}
      <input type="text" name="orgName" placeholder="Organization Name" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      {/* Other inputs for username, phone number, password, etc. */}
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;
