/* eslint-disable react/prop-types */
import "./style.css";

import { RiArrowDropDownLine } from "react-icons/ri";

const Dropdown = ({ title, subTitle, points, visibility, isVisible }) => {
  return (
    <div
      onClick={visibility}
      className="dropdown-container"
      style={{
        border: !isVisible ? `1px solid black` : "none",
        borderRadius: "5px",
      }}
    >
      <div className="dropdown-header">
        <p className="head">{title}</p>
        {isVisible ? <p>X</p> : <RiArrowDropDownLine className="down-arrow" />}
      </div>

      {isVisible ? (
        <>
          <p className="sub-title">{subTitle}</p>

          <ul className="points">
            {points?.map((item) => {
              return (
                <li className="point-li" key={title}>
                  {item}
                </li>
              );
            })}
          </ul>
        </>
      ) : null}
    </div>
  );
};

export default Dropdown;
