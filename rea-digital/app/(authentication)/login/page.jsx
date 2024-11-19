

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
      <div className="relative bg-gray-900 bg-opacity-75 p-8 rounded-xl shadow-xl max-w-sm w-full">
        {/* Neon Glow Border */}
        <div className="absolute inset-0 border-2 border-indigo-500/50 rounded-xl blur-xl opacity-75"></div>

        <h1 className="text-3xl font-bold text-indigo-400 text-center mb-6">
          Welcome Back
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Enter your credentials to access your account.
        </p>

        <form className="space-y-6">
          {/* Username Input */}
          <div>
            <label htmlFor="username" className="block text-sm text-indigo-400 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-4 focus:ring-indigo-500 border border-gray-700 outline-none"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm text-indigo-400 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-4 focus:ring-indigo-500 border border-gray-700 outline-none"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-semibold py-3 rounded-lg transition-transform transform hover:scale-105 shadow-lg hover:shadow-indigo-500/50"
          >
            Log In
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            Forgot your password?{" "}
            <a
              href="#"
              className="text-indigo-400 hover:underline"
            >
              Reset it here
            </a>
          </p>
        </div>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 z-[-1]">
        <div className="w-[20rem] h-[20rem] bg-indigo-500 opacity-40 rounded-full absolute top-16 left-32 animate-pulse"></div>
        <div className="w-[25rem] h-[25rem] bg-pink-500 opacity-40 rounded-full absolute bottom-20 right-32 animate-pulse"></div>
        <div className="w-[15rem] h-[15rem] bg-blue-500 opacity-40 rounded-full absolute top-10 right-20 animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoginPage;
