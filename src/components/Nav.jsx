import styled from "styled-components";
import icon from "../assets/logo/nav_icon.png";

const Nav = () => {
  return (
    <Parent>
      {/* Nav Logo */}
      <div className="logo">
        <img src={icon} alt="Nav Icon" />
      </div>

      {/* Nav Links */}
      <Links>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Solution</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </Links>

      {/* Nav Purple Button */}
      <Button>
        <button>Become a Client</button>
      </Button>
    </Parent>
  );
};

// Styled components

const Parent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 4rem;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;

  .logo {
    img {
      width: 90%;
      object-fit: contain;
    }
  }
`;

const Links = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 0 2rem;
    font-size: 0.8rem;
    font-family: "Montserrat", sans-serif;

    a {
      cursor: pointer;
      text-decoration: none;
      color: #324054;
    }
  }
`;

const Button = styled.div`
  button {
    font-family: "Montserrat Alternates", sans-serif;
    background: #30157a;
    padding: 0.6rem 2rem;
    font-size: 0.8rem;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
  }
`;

export default Nav;
