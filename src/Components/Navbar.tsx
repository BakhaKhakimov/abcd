import React from "react";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const navLinks = ["about us", "blog", "careers", "contact"];
  return (
    <>
      <nav className="fixed top-0 z-50 inset-x-0 bg-white font-mono px-2 py-4">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full flex justify-between lg:w-auto">
            <a
              className="font-bold leading-relaxed inline-block lg:py-2 lg:px-4 whitespace-nowrap text-black"
              href="brand"
            >
              Brand
            </a>
            <button
              className="px-3 py-2 border border-solid border-transparent rounded bg-black lg:hidden"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                className="w-6 h-6 text-gray-500"
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-row nav-items items-center text-center " +
              (navbarOpen ? "flex-wrap" : "hidden")
            }
          >
            {navLinks.map((linkName) => (
              <a
                key={linkName}
                className="py-2 px-4 flex nav-item text-gray-500 hover:text-black"
                href={linkName}
              >
                {linkName}
              </a>
            ))}

            <a
              className="py-3 px-4 flex nav-item font-semibold leading-relaxed lg:hover:bg-black lg:hover:text-white rounded-full transition duration-100"
              href="login"
            >
              Sign in
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
