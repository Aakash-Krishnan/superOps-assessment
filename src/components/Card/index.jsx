import "./style.css";

const Card = ({ itemNo, title, desc, colorPallet }) => {
  return (
    <div className="card-container">
      <div className="inst-no">
        <p className="item-no">{itemNo}</p>
        <span
          className="color-pallet"
          style={{ backgroundColor: colorPallet }}
        ></span>
      </div>
      <p className="title">{title}</p>
      <p className="desc">{desc}</p>
    </div>
  );
};

export default Card;
