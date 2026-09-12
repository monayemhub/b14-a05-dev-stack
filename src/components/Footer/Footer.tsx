import brandTheme from "../../styles/brand_theme.ts";
import Logo from "/logo.png";
import { LuDot } from "react-icons/lu";

const Footer = () => {
  return (
    <footer>
      <div className="border-y border-[#F1F5F9]">
        <div className="flex flex-col lg:flex-row justify-between items-center px-7 mt-8 lg:mt-16 mb-6 lg:mb-14 container mx-auto">
          <div className="space-y-3">
            <div className="flex justify-center lg:justify-start items-center gap-1 sm:gap-2 text-center lg:text-left">
              <div className="w-6 sm:w-8">
                <img src={Logo} alt="Dev Stack logo" className="align-bottom" />
              </div>

              <p className="font-bold text-xs sm:text-xl">
                Dev&nbsp;
                <span className={`${brandTheme} bg-clip-text text-transparent`}>
                  Stack
                </span>
              </p>
            </div>

            <p className="font-normal text-xs text-[#6B7280] text-center lg:text-left lg:max-w-94.5">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <ul className="flex justify-center lg:justify-start items-center">
              <li>
                <a className="font-semibold text-xs text-[#475569] cursor-pointer">
                  GitHub
                </a>
              </li>
              <LuDot className="text-[#475569]" />
              <li>
                <a className="font-semibold text-xs text-[#475569] cursor-pointer">
                  Twitter
                </a>
              </li>
              <LuDot className="text-[#475569]" />
              <li>
                <a className="font-semibold text-xs text-[#475569] cursor-pointer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden lg:flex gap-62.5">
            <ul className="space-y-2.5">
              <h3 className="font-bold text-xs">PRODUCT</h3>

              <li className="font-normal text-xs text-[#64748B] cursor-pointer">
                <a>Home</a>
              </li>
              <li className="font-normal text-xs text-[#64748B] cursor-pointer">
                <a>Technologies</a>
              </li>
              <li className="font-normal text-xs text-[#64748B] cursor-pointer">
                <a>Projects</a>
              </li>
            </ul>

            <ul className="space-y-2.5">
              <h3 className="font-bold text-xs">COMPANY</h3>

              <li className="font-normal text-xs text-[#64748B] cursor-pointer">
                <a>About</a>
              </li>
              <li className="font-normal text-xs text-[#64748B] cursor-pointer">
                <a>Contact</a>
              </li>
              <li className="font-normal text-xs text-[#64748B] cursor-pointer">
                <a>Careers</a>
              </li>
            </ul>

            <ul className="space-y-2.5">
              <h3 className="font-bold text-xs">LEGAL</h3>

              <li className="font-normal text-xs text-[#64748B] cursor-pointer">
                <a>Privacy Policy</a>
              </li>
              <li className="font-normal text-xs text-[#64748B] cursor-pointer">
                <a>Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center px-7 py-4 container mx-auto">
        <small className="font-normal text-[10px] text-[#9CA3AF]">
          © 2026 Dev Stack. All rights reserved.
        </small>

        <small>
          <ul className="flex gap-2 lg:gap-6 items-center">
            <li>
              <a className="font-normal text-[10px] text-[#9CA3AF] cursor-pointer">
                Privacy
              </a>
            </li>
            <li>
              <a className="font-normal text-[10px] text-[#9CA3AF] cursor-pointer">
                Terms
              </a>
            </li>
          </ul>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
