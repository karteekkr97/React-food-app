import { Navigate, useNavigate } from "react-router-dom";

const Profile = () => {
    const username = localStorage.getItem("loggedInUser") || "Guest";
    const navigate=useNavigate();
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md md:max-w-lg lg:max-w-xl">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Profile Page</h1>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded-full text-2xl font-bold uppercase">
              {username.charAt(0)}
            </div>
            <p className="mt-4 text-xl font-semibold text-gray-700">Welcome, {username}!</p>
            <p className="text-gray-500">This is your personal profile page.</p>
          </div>
  
          <div className="mt-6 border-t pt-4 text-center">
            <p className="text-gray-600">Member since: <span className="font-medium">January 2024</span></p>
            <p className="text-gray-600">Email: <span className="font-medium">user@example.com</span></p>
          </div>
  
          <div className="mt-6 text-center">
            <button 
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
              onClick={() => {
                localStorage.removeItem("loggedInUser");
                navigate('/');
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Profile;
