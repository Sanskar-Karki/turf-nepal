import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b bg-background">
      <div className="flex h-16 items-center px-4 container max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <svg
            className="h-8 w-8 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707.707m12.728 0l.707.707M6.343 17.657l.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <Link to="/">
            <span className="text-xl font-bold">TurfNepal</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between flex-1 pl-8">
          <nav className="flex space-x-4">
            <Link
              to="/"
              className="group inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Home
            </Link>
            <Link
              to="/turfs"
              className="group inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Turfs
            </Link>

            <Link
              to="/contact"
              className="group inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Contact
            </Link>
          </nav>

          <Link
            to="/auth"
            className="group inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <button className="px-6 py-2 bg-primary text-white rounded-md">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden ml-auto z-10000">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            <Menu className="h-6 w-6" />
          </button>

          {isOpen && (
            <div className="absolute top-16 right-0 bg-white w-full sm:w-[300px] shadow-lg rounded-md p-4">
              <nav className="flex flex-col gap-4">
                <Link
                  to="/"
                  className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                >
                  Home
                </Link>
                <Link
                  to="/turfs"
                  className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                >
                  Turfs
                </Link>

                <Link
                  to="#"
                  className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                >
                  Contact
                </Link>
                <Link
                  to="/auth"
                  className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                >
                  <button className="w-full px-4 py-2 bg-primary text-white rounded-md">
                    Get Started
                  </button>
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
