import React from "react";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative font-mono flex flex-wrap items-center justify-between px-2 py-4 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="font-bold leading-relaxed inline-block py-2 px-4 whitespace-nowrap text-black"
              href="brand"
            >
              Brand
            </a>
            <button
              className="px-3 py-1 border border-solid border-transparent rounded bg-black lg:hidden"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                className="w-6 h-6 text-gray-500"
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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
            <a
              className="py-2 px-4 flex nav-item text-gray-500 hover:text-black"
              href="about-us"
            >
              about us
            </a>
            <a
              className="py-2 px-4 flex nav-item text-gray-500 hover:text-black"
              href="news"
            >
              blog
            </a>
            <a
              className="py-2 px-4 flex nav-item text-gray-500 hover:text-black"
              href="careers"
            >
              careers
            </a>
            <a
              className="py-2 px-4 flex nav-item text-gray-500 hover:text-black"
              href="careers"
            >
              contact
            </a>

            <a
              className="py-3 px-4 flex nav-item inline-block font-semibold leading-relaxed hover:bg-black hover:text-white rounded-full transition duration-100"
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
