import { useState } from "react";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="container relative mx-auto p-6 ">
      <div className="flex items-center justify-between  my-6">
        <img
          src={
            isMobileMenuOpen
              ? "/images/logo-bookmark-footer.svg"
              : "/images/logo-bookmark.svg"
          }
          alt="logo"
          id="logo"
          className="z-30"
        />
        <div className="hidden items-center space-x-10 uppercase text-grayishBlue md:flex">
          <a href="#features" className="tracking-widest hover:text-softRed">
            {" "}
            Features
          </a>
          <a href="#download" className="tracking-widest hover:text-softRed">
            {" "}
            Download
          </a>
          <a href="#faq" className="tracking-widest hover:text-softRed">
            {" "}
            FAQ
          </a>
          <button
            type="button"
            className="px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md hover:text-softRed hover:bg-white"
          >
            Login
          </button>
        </div>
        {/*Hamburger Menu */}
        <div className="md:hidden" onClick={() => toggleMobileMenu()}>
          <button
            id="menu-btn"
            type="button"
            className={`z-40 mb-4 block hamburger lg:hidden focus:outline-none ${
              isMobileMenuOpen ? "open" : ""
            }`}
            onClick={() => toggleMobileMenu()}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </div>
      {/*Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`fixed inset-0 z-20 flex flex-col items-center self-end w-full h-full min-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue`}
        >
          <div className="w-full py-3 text-center ">
            <a href="#features" className="block hover:text-softRed">
              Features
            </a>
          </div>
          <div className="w-full py-3 text-center ">
            <a href="#download" className="block hover:text-softRed">
              Download
            </a>
          </div>
          <div className="w-full py-3 text-center ">
            <a href="#faq" className="block hover:text-softRed">
              Faq
            </a>
          </div>
          <div className="w-full py-3 text-center ">
            <a href="#" className="block hover:text-softRed">
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
