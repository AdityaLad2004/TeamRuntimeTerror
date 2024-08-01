// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     role: 'maker', // Default role is 'maker'
//     username: ''   // Add username field
//   });

//   const { name, email, password, role, username } = formData;
//   const navigate = useNavigate(); // useNavigate hook

//   const onChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post('http://localhost:5002/api/users/register', formData);
//       console.log(res.data);
//       // Redirect to login page
//       navigate('/login');
//     } catch (err) {
//       console.error(err.response.data);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-900">
//       <form
//         onSubmit={onSubmit}
//         className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg"
//       >
//         <h1 className="text-3xl font-bold text-white mb-6 text-center">Register</h1>
        
//         <input
//           type="text"
//           name="name"
//           value={name}
//           onChange={onChange}
//           placeholder="Name"
//           className="w-full p-3 mb-4 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           value={email}
//           onChange={onChange}
//           placeholder="Email"
//           className="w-full p-3 mb-4 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           value={password}
//           onChange={onChange}
//           placeholder="Password"
//           className="w-full p-3 mb-4 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//         <input
//           type="text"
//           name="username"
//           value={username}
//           onChange={onChange}
//           placeholder="Username"
//           className="w-full p-3 mb-4 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//         <select
//           name="role"
//           value={role}
//           onChange={onChange}
//           className="w-full p-3 mb-4 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           <option value="maker">Maker</option>
//           <option value="investor">Investor</option>
//         </select>
//         <button
//           type="submit"
//           className="w-full p-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'maker', // Default role is 'maker'
    username: ''   // Add username field
  });

  const [loading, setLoading] = useState(false); // Add loading state
  const [error, setError] = useState(null); // Add error state

  const { name, email, password, role, username } = formData;
  const navigate = useNavigate(); // useNavigate hook

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true

    try {
      const res = await axios.post('http://localhost:5002/api/users/register', formData);
      console.log(res.data);
      navigate('/login'); // Redirect to login page
    } catch (err) {
      setError(err.response ? err.response.data : 'An error occurred'); // Set error message
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-700">
      <form
        onSubmit={onSubmit}
        className="bg-gray-800 p-10 rounded-lg shadow-xl w-full max-w-md"
      >
        <h1 className="text-4xl font-extrabold text-white mb-8 text-center">Register</h1>
        
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {loading && <p className="text-blue-400 text-center mb-4">Loading...</p>}
        
        <div className="mb-6">
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            placeholder="Name"
            className="w-full p-4 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Email"
            className="w-full p-4 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Password"
            className="w-full p-4 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            name="username"
            value={username}
            onChange={onChange}
            placeholder="Username"
            className="w-full p-4 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <select
            name="role"
            value={role}
            onChange={onChange}
            className="w-full p-4 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="maker">Maker</option>
            <option value="investor">Investor</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
