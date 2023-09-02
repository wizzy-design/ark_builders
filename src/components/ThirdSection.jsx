import styled from "styled-components";
import free from "../assets/img/freemium.svg";
import education from "../assets/img/education.svg";
import govt from "../assets/img/govt.svg";
import business from "../assets/img/business.svg";

const ThirdSection = () => {
  return (
    <Parent>
      <div className="title">
        <h2>
          Pricing <br /> System
        </h2>
      </div>

      <Cards>
        <div className="card" id="free">
          <img src={free} alt="Freemium" />
          <h3>Freemium</h3>
        </div>
        <div className="card" id="business">
          <img src={business} alt="Business" />
          <h3>Business</h3>
        </div>
        <div className="card" id="education">
          <img src={education} alt="Education" />
          <h3>Education</h3>
        </div>
        <div className="card" id="govt">
          <img src={govt} alt="Government" />
          <h3>Govt</h3>
        </div>
      </Cards>
    </Parent>
  );
};

// Styled Components

const Parent = styled.div`
  display: flex;
  gap: 3rem;
  padding: 0 6rem 6rem;

  .title {
    h2 {
      color: #552bcc;
      font-family: "Montserrat Alternates", sans-serif;
      font-weight: 900;
    }
  }
`;

const Cards = styled.div`
  display: flex;
  gap: 1.5rem;

  .card {
    position: relative;
    cursor: pointer;

    img {
      width: 13.2rem;
    }

    h3 {
      position: absolute;
      font-size: 1.4rem;
      font-family: "Montserrat", sans-serif;
      color: #fff;
      left: 1.5rem;
      bottom: 2rem;
      font-weight: 800;
    }
  }
`;

export default ThirdSection;
