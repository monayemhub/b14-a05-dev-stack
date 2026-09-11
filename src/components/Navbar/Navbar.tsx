import Logo from "/logo.png";
import Hamburger from "../../assets/hamburger.png";
import brandTheme from "../../styles/brand_theme.ts";

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex justify-between items-center bg-white px-7 py-1 sm:py-5 container mx-auto">
      <div className="lg:hidden dropdown">
        <div tabIndex={0} className="w-3 sm:w-4.5">
          <img src={Hamburger} alt="Hamburger menu icon" />
        </div>
        <ul
          tabIndex={-1}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Technologies</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-1 sm:gap-2 w-20 sm:w-34">
        <div className="w-6 sm:w-8">
          <img src={Logo} alt="Dev Stack logo" className="align-bottom" />
        </div>

        <p className="font-bold text-xs sm:text-xl">
          Dev
          <span className={`${brandTheme} bg-clip-text text-transparent`}>
            Stack
          </span>
        </p>
      </div>

      <ul className="hidden lg:flex justify-between items-center gap-7">
        <li>
          <a className="font-semibold text-sm text-[#D91B7E] cursor-pointer">
            Home
          </a>
        </li>
        <li>
          <a className="font-semibold text-sm text-[#4B5563] cursor-pointer">
            Technologies
          </a>
        </li>
        <li>
          <a className="font-semibold text-sm text-[#4B5563] cursor-pointer">
            Projects
          </a>
        </li>
        <li>
          <a className="font-semibold text-sm text-[#4B5563] cursor-pointer">
            About
          </a>
        </li>
        <li>
          <a className="font-semibold text-sm text-[#4B5563] cursor-pointer">
            Contact
          </a>
        </li>
      </ul>

      <div className="flex gap-4 sm:gap-5 items-center">
        <button className="font-semibold text-[0.5rem] sm:text-sm text-[#4B5563] cursor-pointer">
          Sign In
        </button>

        <button
          className={`font-semibold text-[0.5rem] sm:text-sm text-white ${brandTheme} px-2.5 sm:px-5 py-1 sm:py-2.5 rounded-full cursor-pointer`}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
