import "./style.css";

import { RiArrowDropDownLine } from "react-icons/ri";

const navList = [
  {
    title: "MSP Platform",
    dropDown: true,
  },
  {
    title: "Features",
    dropDown: true,
  },
  {
    title: "Library",
    dropDown: true,
  },
  {
    title: "About us",
    dropDown: false,
  },
  {
    title: "Pricing",
    dropDown: false,
  },
];

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav>
        <div className="nav-left">
          <img src="../assets/SuperOps-logo.svg" alt="logo" />
          <ul>
            {navList.map((item) => {
              return (
                <li className="list" key={item.title}>
                  {item.title} {item.dropDown && <RiArrowDropDownLine />}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="nav-right">
          <button className="sign-in-btn">SIGN IN</button>
          <button className="started-btn">
            GET STARTED FOR FREE <RiArrowDropDownLine className="arrow-right" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
