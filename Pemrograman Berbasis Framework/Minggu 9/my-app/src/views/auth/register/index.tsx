const RegisterView = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Register
        </h1>

        <form className="flex flex-col gap-4">
          
          <input
            type="text"
            placeholder="Nama"
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>

        </form>
      </div>
    </div>
  );
};

export default RegisterView;