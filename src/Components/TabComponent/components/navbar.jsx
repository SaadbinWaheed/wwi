import headerLogo from "../../../Assets/headerLogo.png";
import "../../../Styles/navbar.css";

export default function Navbar() {
  return (
    <div className="max-w-12 p-2 mx-auto h-16 navColor">
      <nav className="border-gray-200">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <a href="#" className="flex">
            <img style={{ width: "220px", height: "47px", margin: "0 0 0 -20px" }} src={headerLogo} />
            <span className="self-center text-lg font-semibold whitespace-nowrap"></span>
          </a>

          <div
            className="hidden md:block w-full md:w-auto mr-5"
            id="mobile-menu"
          >
            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="C:\Users\hanna\Desktop\wwi\src\Components\AllTabs\AboutUs.js"
                  className="md:bg-transparent border-user rounded-none block pl-3 pr-4 py-2 md:p-0 rounded focus:outline-none"
                  aria-current="page"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="md:bg-transparent block pl-3 border-color border-white rounded-none pr-4 py-2 md:p-0 rounded focus:outline-none"
                  aria-current="page"
                >
                  Join Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:bg-gray-50 border-b border-color border-white rounded-none border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:p-0"
                >
                  Methodology
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:bg-gray-50 border-b border-gray-100 border-color border-white rounded-none md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:p-0"
                >
                  Volunteer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:bg-gray-50 border-b border-gray-100 border-color border-white rounded-none md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:p-0"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
