import React from "react";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="w-full fixed z-10 top-0 bg-indigo-100 font-mono flex flex-wrap items-center px-2 py-2">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
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
              className="lg:py-2 py-1 lg:px-2 flex nav-item text-gray-500 hover:text-black"
              href="about-us"
            >
              about us
            </a>
            <a
              className="lg:py-2 py-1 lg:px-2 flex nav-item text-gray-500 hover:text-black"
              href="blog"
            >
              blog
            </a>
            <a
              className="lg:py-2 py-1 lg:px-2 flex nav-item text-gray-500 hover:text-black"
              href="careers"
            >
              careers
            </a>
            <a
              className="lg:py-2 py-1 lg:px-2 flex nav-item text-gray-500 hover:text-black"
              href="contact"
            >
              contact
            </a>

            <a
              className=" py-2 lg:px-4 flex nav-item inline-block font-semibold leading-none lg:hover:bg-yellow-500 lg:hover:text-white rounded-full transition duration-100"
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
