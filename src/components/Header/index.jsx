import "./style.css";

import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className="header-container">
      <p className="refer-text">refer a colleague</p>
      <p className="header-title">
        Your next fancy dinner is on us! We’re serious!
      </p>

      <div className="referral-card">
        <p>Earn upto</p>
        <p className="rate">
          <span className="dollar">$</span> 1000
        </p>
        <p>by referring fellow MSPs.</p>
      </div>

      <p className="header-sub">
        One click, two fields, and you could be on your way to win a $1000*
        voucher.
      </p>

      <button >
        REFER A FRIEND <RiArrowDropDownLine className="arrow-right" />
      </button>
    </div>
  );
};

export default Header;
