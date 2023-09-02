// First section of Landing Page
import styled from "styled-components";
import image from "../assets/img/lady.svg";
import tick from "../assets/icon/tick.svg";
import James from "../assets/icon/james.svg";
import Kuda from "../assets/icon/kuda.svg";
import Attach from "../assets/icon/attachment.svg";
import BlackArrow from "../assets/icon/Arrow 2.svg";
import GreenArrow from "../assets/icon/Arrow 1.svg";

const FirstSection = () => {
  return (
    <Parent>
      {/* Section with Write-ups */}
      <Write_Up>
        <h1>
          Simplify your <span className="purple">customer care</span>
          <br /> & <span className="purple">communication</span> for your
          business
        </h1>
        <p>
          WeCare is your friendly customer support for your business. Call
          centers are constantly under pressure to clear backlogs while offering
          assistance simultaneously. Chatbots, virtual assistants, and other
          AI-powered interfaces take off the burden by addressing typical user
          queries and issues. This enables the customer support representatives
          to have more time to resolve complicated issues.
        </p>
      </Write_Up>

      {/* Section with woman and chat demonstrations */}
      <Graphic>
        <div className="image">
          <img src={image} id="woman" alt="Woman" />
        </div>

        <div className="boxes">
          {/* First Box */}
          <FirstBox>
            <div className="img">
              <img src={James} alt="profileImg" />
            </div>

            <div className="write">
              <h4 className="title">James Anderson</h4>
              <p className="body">
                Good morning, I would like to obtain all the statements of my
                transaction with your bank for the last 3 years, as it is needed
                to process my Visa at the American Embassy. Please I would
                appreciate if it is done speedily, Thank you.{" "}
                <img src={tick} alt="Tic" />
              </p>
            </div>
          </FirstBox>

          {/* Second Box */}
          <SecondBox>
            <div className="img">
              <img src={Kuda} alt="Bank" />
            </div>

            <div className="write">
              <h4 className="title">Kuda</h4>
              <p className="body">
                Good Afternoon James, Please find attached your transaction
                statement from 2020 till 2022. I believe that this would be
                useful in your visa application. We wish you all the best. Have
                a blessed day. <img src={tick} alt="Tic" />
              </p>

              <div className="buttons">
                <button>
                  <img src={Attach} alt="Pin" /> Brief 2020
                </button>
                <button>
                  <img src={Attach} alt="Pin" /> Brief 2021
                </button>
                <button>
                  <img src={Attach} alt="Pin" /> Brief 2022
                </button>
                <a href="#">Download All</a>
              </div>
            </div>
          </SecondBox>
        </div>

        <img id="black" src={BlackArrow} alt="Blac" />
        <img id="green" src={GreenArrow} alt="Green" />
      </Graphic>
    </Parent>
  );
};

// Styled Components

const Parent = styled.div`
  padding: 6rem 6rem 4rem;
`;

const Write_Up = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 0rem 0 1rem;
    font-size: 1.8rem;
    font-family: "Montserrat Alternates", sans-serif;

    span.purple {
      color: #552bcc;
    }
  }

  p {
    margin: 0.5rem 0;
    font-size: 0.8rem;
    text-align: center;
    padding: 0rem 4rem;
    font-family: "Montserrat", sans-serif;
  }
`;

const Graphic = styled.div`
  display: flex;
  gap: 3rem;
  padding: 3rem 1rem;

  .image {
    position: relative;
    padding: 0 0 0 0.5rem;
    z-index: 90;
    img {
      width: 18rem;
      object-fit: contain;
    }
  }

  .boxes {
    z-index: 80;
  }

  #black {
    z-index: 20;
    position: absolute;
    left: 18rem;
    top: 20rem;
  }

  #green {
    position: absolute;
    left: 13.4rem;
    top: 28rem;
  }
`;

const Box = styled.div`
  display: flex;
  gap: 1rem;

  .write {
    .title {
      padding: 0 0 0.5rem;
      font-size: 0.7rem;
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
    }

    .body {
      font-family: "Montserrat", sans-serif;
      font-size: 0.7rem;
      width: 90%;
    }
  }
`;

const FirstBox = styled(Box)`
  padding: 0.8rem 1rem;
  margin-bottom: 3rem;
  border-radius: 0.3rem;
  border: 0.5px solid #e5dcff;
  background: #fff;
`;

const SecondBox = styled(Box)`
  border: 0.5px solid #552bcc;
  border-radius: 0.3rem;
  background-color: #fff;
  padding: 1.2rem 1rem 1.2rem 1rem;

  .buttons {
    padding-bottom: 0.5rem;
    button {
      margin: 1rem 1.2rem 0 0;
      padding: 0.5rem 2rem;
      border: none;
      border-radius: 0.3rem;
      background: #f5f1ff;
      color: #1d0e4a;
      font-size: 0.7rem;
      cursor: pointer;
      font-family: "Montserrat Alternates", sans-serif;
    }
    a {
      font-family: "Montserrat Alternates", sans-serif;
      color: #1d0e4a;
      font-weight: 400;
      font-size: 0.7rem;
    }
  }
`;

export default FirstSection;
