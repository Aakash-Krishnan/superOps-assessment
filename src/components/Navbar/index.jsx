import "./style.css";

import { RiArrowDropDownLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Modal from "../modal";

// const sidebarStyles = {
//   position: "fixed",
//   top: "0",
//   right: "0",
//   height: "100vh",
//   width: "250px",
//   zIndex: "999",
//   backgroundColor: "#ffffff",
//   boxShadow: "-10px 0 10px rgba(0, 0, 0, 0.1)",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "flex-start",
// };

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
  const [sidebar, setSidebar] = useState(false);
  const [modal, setModal] = useState(false);

  const handleModal = (value) => {
    setModal(value);
  };

  return (
    <div style={{ margin: "0px", padding: "0px" }}>
      <div className="nav-container">
        <nav>
          <div className="nav-left">
            <img src="SuperOps-logo.svg" alt="logo" className="logo-lr" />
            {!sidebar && (
              <img src="logo-sm.svg" alt="logo" className="logo-sm" />
            )}
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
            <div>
              <button className="sign-in-btn">SIGN IN</button>
            </div>
            <div className="btn-wrapper">
              <button className="started-btn" onClick={handleModal}>
                GET STARTED FOR FREE
              </button>
            </div>
          </div>

          <GiHamburgerMenu
            className="burger-icon"
            onClick={() => setSidebar(true)}
          />
        </nav>

        {sidebar && (
          <div className="sidebar">
            <div className="sidebar-header">
              <img src="logo-sm.svg" alt="logo" className="logo-sm" />
              <p className="cancel" onClick={() => setSidebar(false)}>
                X
              </p>
            </div>

            <ul className="sidebar-list">
              {navList.map((item) => {
                return (
                  <li key={item.title}>
                    {item.title} {item.dropDown && <RiArrowDropDownLine />}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      {modal && <Modal onClose={handleModal} modal={modal} />}
    </div>
  );
};

export default Navbar;
