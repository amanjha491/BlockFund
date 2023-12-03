import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navlinks } from "../constants/index.jsx";
import { logo, logout } from "../assets";
import { Avatar } from "@nextui-org/react";

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div
    className={`w-[48px] h-[48px] rounded-[10px] ${
      isActive === name ? "bg-[#ffffff]" : ""
    } flex justify-center items-center ${
      !disabled ? "cursor-pointer" : ""
    } ${styles}`}
    onClick={handleClick}
  >
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" />
    ) : (
      <img
        src={imgUrl}
        alt="fund_logo"
        className={`w-1/2 h-1/2 ${isActive !== name ? "grayscale" : ""}`}
      />
    )}
  </div>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      <Link href="/">
        <Avatar isBordered  src={ logo} />
      </Link>

      <div className="flex-1 flex flex-col justify-between items-center bg-[#ffffff] rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                navigate(link.link);
                if (!link.disabled) {
                  setIsActive(link.name);
                }
              }}
            />
          ))}
        </div>

        <img
          // styles="bg-[#0E7490] shadow-secondary"
          src={logout}
          className="cursor-pointer"
          // fallback="Profile"
        />
      </div>
    </div>
  );
};

export default Sidebar;
