import FrequentQuestions from "../../components/FrequentQuestions";
import Header from "../../components/Header";
import Instructions from "../../components/Instructions";
import Navbar from "../../components/Navbar";
import "./style.css";

const Home = () => {
  return (
    <div className="container">
      <Navbar />

      <div className="body">
        <Header />
        <Instructions />
        <FrequentQuestions />
      </div>
    </div>
  );
};

export default Home;
