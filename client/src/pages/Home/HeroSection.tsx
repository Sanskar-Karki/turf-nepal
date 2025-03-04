import { Link } from "react-router";
const Home = () => {
  return (
    <section className="relative w-full h-screen text-white">
      {/* Background Image with Modern Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1630420598913-44208d36f9af?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"></div>
      </div>

      {/* Hero Content - Positioned Higher */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ paddingBottom: "15vh" }}
      >
        <div className="text-center px-6 sm:px-12 max-w-4xl mx-auto">
          {/* Decorative Badge */}
          <div className="inline-block mb-6">
            <span className="bg-green-500/20 text-green-400 text-sm font-medium px-4 py-2 rounded-full border border-green-500/20 backdrop-blur-sm">
              #1 Futsal Booking Platform in Nepal
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              Turf Nepal
            </span>
          </h1>

          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 text-gray-300">
            Book the best futsal courts near you and enjoy a seamless sports
            experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/turfs"
              className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25"
            >
              Find a Turf
            </Link>
            <Link
              to="/turf-registration"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white py-3 px-8 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              List Your Turf
            </Link>
          </div>

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { number: "50+", label: "Active Turfs" },
              { number: "10K+", label: "Happy Players" },
              { number: "4.8/5", label: "User Rating" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-400">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
