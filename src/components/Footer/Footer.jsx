import { Link } from "react-router-dom";
import logo from "../../assets/images/home/logo.png";
import { footerLinks, footerSocials } from "./footerData";

const Footer = () => {
  return (
    <footer className="px-20 h-[26rem] md:h-[12rem] py-6 bg-primary text-gray-300 text-sm lg:text-base">
      {/* Footer Top */}
      <div className="flex flex-col md:flex-row gap-8 items-center md:justify-between py-4">
        {/* Footer Logo */}
        <div className="">
          <img src={logo} className="w-[4rem] md:w-[5rem]" alt="Logo" />
        </div>
        {/* Footer Links */}
        <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8 lg:gap-12 ">
          {footerLinks.map((item) => (
            <li key={item.title}>
              <Link
                to={item.href}
                className="cursor-pointer uppercase duration-200 hover:text-gray-100 text-[14px]"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col gap-8 items-center md:flex-row justify-center md:justify-between">
        {/* privacy statement */}
        <p className="text-center md:text-start text-[12px]">
          PRINCE VISUALS © 2023 ALL RIGHTS RESERVED
        </p>
        {/* Footer Icons */}
        <div className="flex gap-4 text-xl">
          {footerSocials.map((item) => (
            <item.icon
              key={item.name}
              className="cursor-pointer hover:text-gray-100 duration-200 text-[16px]"
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
