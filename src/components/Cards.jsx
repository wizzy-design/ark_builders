/* eslint-disable react/prop-types */
import styled from "styled-components";

const Cards = ({ title, body, image, color }) => {
  return (
    <Parentt color={color}>
      <div className="left">
        <h3 className="title">{title}</h3>
        <p className="body">{body}</p>
        <button className="try try2">Get Wecare ---</button>
      </div>

      <div className="right">
        <div className="img">
          <img src={image} alt="Img" />
        </div>
      </div>
    </Parentt>
  );
};

// Styled Components

const Parentt = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.color};
  margin-bottom: 4rem;
  border-radius: 0.3rem;

  .left {
    padding: 2rem;

    .title {
      padding-bottom: 1rem;
      color: #324054;
      font-family: "Montserrat Alternates", sans-serif;
      font-weight: 700;
    }

    .body {
      width: 85%;
      font-size: 0.8rem;
      font-family: "Montserrat", sans-serif;
      padding-bottom: 2rem;
    }

    button {
      padding: 1rem;
      color: #fff;
      font-family: "Montserrat", sans-serif;
      background: #30157a;
      border: none;
      border-radius: 0.3rem;
      cursor: pointer;
    }
  }

  .right {
    img {
      width: 18rem;
      object-fit: contain;
    }
  }
`;

export default Cards;
