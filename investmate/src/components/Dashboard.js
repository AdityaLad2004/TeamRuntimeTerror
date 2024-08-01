// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from './Navbar';

// const Dashboard = ({ role }) => {
//   const [userRole, setUserRole] = useState(role || localStorage.getItem('role'));

//   useEffect(() => {
//     if (!userRole) {
//       const savedRole = localStorage.getItem('role');
//       if (savedRole) {
//         setUserRole(savedRole);
//       }
//     }
//   }, [userRole]);

//   return (
//     <div className="bg-gray-900 text-white min-h-screen flex flex-col">
//       <Navbar />
//       <div className="flex-1 flex flex-col items-center justify-center p-8">
//         <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
//         {userRole === 'maker' ? (
//           <div className="space-y-4">
//             <Link
//               to="/add-project"
//               className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               Add Project
//             </Link>
//             <Link
//               to="/view-projects"
//               className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
//             >
//               View Projects
//             </Link>
//           </div>
//         ) : userRole === 'investor' ? (
//           <div className="space-y-4">
//             <Link
//               to="/view-projects"
//               className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
//             >
//               View All Projects
//             </Link>
//           </div>
//         ) : (
//           <div className="text-center">
//             <p className="text-lg">Please log in to see your dashboard.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Dashboard = ({ role }) => {
  const [userRole, setUserRole] = useState(role || localStorage.getItem('role'));

  useEffect(() => {
    if (!userRole) {
      const savedRole = localStorage.getItem('role');
      if (savedRole) {
        setUserRole(savedRole);
      }
    }
  }, [userRole]);

  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <h1 className="text-5xl font-extrabold mb-12">Dashboard</h1>
        {userRole === 'maker' ? (
          <div className="space-y-8"> {/* Increased spacing here */}
            <Link
              to="/add-project"
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-10 py-5 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105"
            >
              Add Project
            </Link>
            <Link
              to="/view-projects"
              className="bg-gradient-to-r from-green-500 to-green-700 text-white px-10 py-5 rounded-lg shadow-lg hover:from-green-600 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 transform hover:scale-105"
            >
              View Projects
            </Link>
          </div>
        ) : userRole === 'investor' ? (
          <div className="space-y-8"> {/* Increased spacing here */}
            <Link
              to="/view-projects"
              className="bg-gradient-to-r from-teal-500 to-teal-700 text-white px-10 py-5 rounded-lg shadow-lg hover:from-teal-600 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 transform hover:scale-105"
            >
              View All Projects
            </Link>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-lg">Please log in to see your dashboard.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
