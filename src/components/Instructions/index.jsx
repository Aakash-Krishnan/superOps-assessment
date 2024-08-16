import Card from "../Card";
import "./style.css";

const instructionsDetails = [
  {
    id: "01",
    title: "You Refer a Friend",
    desc: "Refer a friend by clicking  the button above.",
    colorPallet: "#FFEEFA",
  },
  {
    id: "02",
    title: "We do the heavy lifting",
    desc: "Our sales experts will reach out and weave some magic to ensure they become our customers.",
    colorPallet: "#EAF7FF",
  },
  {
    id: "03",
    title: "You Earn",
    desc: "You earn $1000 when the MSP you have referred becomes our customer. Yes you get $100 for every valid sign-up",
    colorPallet: "#FAFFDB",
  },
];

const Instructions = () => {
  return (
    <div className="inst-container">
      <div className="inst-title-div">
        <p className="inst-title">How does it work?</p>
      </div>
      <img className="arrow-img" src="arrow.svg" alt="arrow-img" />

      {instructionsDetails.map((item) => {
        return (
          <Card
            key={item.id}
            itemNo={item.id}
            title={item.title}
            desc={item.desc}
            colorPallet={item.colorPallet}
          />
        );
      })}
    </div>
  );
};

export default Instructions;
