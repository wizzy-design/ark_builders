import styled from "styled-components";
import shake from "../assets/icon/handshake.svg";
import Puzzle from "../assets/img/puzzle.svg";
import Man from "../assets/img/man.svg";
import Woman from "../assets/img/lady2.svg";
import Cards from "../components/Cards";

const SecondSection = () => {
  return (
    <Parent>
      {/* Header of section */}
      <div className="title">
        <h2 className="word">
          Attend to your <br /> customers enquiry with ease.
        </h2>
        <img src={shake} alt="Handshake" />
      </div>

      {/* Cards */}
      <div className="cards">
        <Cards
          title="Streamlines workflow"
          body="Wecare can handle routine questions for you. Chatbots keep track of client behavior and can respond to commonly asked queries, aid with recovering abandoned carts, provide support with the checkout process, and more.
             A chatbot may simply transfer a consumer to a human agent even if it is unable to resolve the issue."
          image={Puzzle}
          color="#FFF7F1"
        />
        <Cards
          title="Stellar Customer Service"
          body="Customer support bots are learning incredibly quickly because of advances in artificial intelligence. 

          Better customer service may be provided as a consequence of an AI bot that can gather pertinent information about clients and increase their pleasure. Fast response times, availability around-the-clock."
          image={Woman}
          color="#F1F5FF"
        />
        <Cards
          title="Prevent Employee Burnout"
          body="Account managers must occasionally leave their desks. It is expensive to cover each hour with too many employees working in shifts. 

          On the other side, a team that is understaffed may experience weariness, burnout, and other issues. So what is the best course of action? Wecare can continually help human employees and take their place as needed."
          image={Man}
          color="#FBF1FF"
        />
      </div>
    </Parent>
  );
};

// Styled Components

const Parent = styled.div`
  padding: 0 6rem 2rem;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      color: #552bcc;
      font-family: "Montserrat Alternates", sans-serif;
      font-weight: 700;
    }

    img {
      width: 4rem;
      padding: 1rem;
      border-radius: 50%;
      background-color: #e5dcff;
    }
  }

  .cards {
    padding: 6rem 0;
  }
`;

export default SecondSection;
