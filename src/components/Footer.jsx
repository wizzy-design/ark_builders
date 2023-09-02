import styled from "styled-components";
import logo from "../assets/icon/footer_logo.svg";
import arrow from "../assets/icon/footer-arrow.svg";
import socials from "../assets/icon/Social Links.svg";

const Footer = () => {
  return (
    <Parent>
      <Top>
        <div className="begin">
          <img src={logo} alt="Footer Logo" />
          <p>+234 - 806 - 8204 - 085</p>
          <small>support@wecare.com</small>
        </div>

        <div className="middle">
          <p className="title">Quick Links</p>
          <ul>
            <li>
              <a href="#">Solution</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Media</a>
            </li>
          </ul>
        </div>

        <div className="end">
          <div className="title">Subscribe</div>
          <label htmlFor="suscribe">
            <input
              type="text"
              id="suscribe"
              placeholder="Get product updates"
            />{" "}
            <button>
              <img src={arrow} alt="" />
            </button>
          </label>
        </div>
      </Top>

      <Bottom>
        <div className="left">
          <img src={socials} alt="SocialLinks" />
        </div>

        <div className="right">
          <p>&copy; 2023 WeCare. All rights reserved</p>
        </div>
      </Bottom>
    </Parent>
  );
};

// Styled Components

const Parent = styled.div`
  padding: 3rem 6rem 3rem;
  background: #30157a;
`;

const Top = styled.div`
  display: flex;
  align-items: start;
  gap: 8rem;
  padding-bottom: 2rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  .begin {
    color: #fff;
    font-family: "Montserrat", sans-serif;

    img {
      width: 8rem;
      padding-bottom: 0.8rem;
    }

    p {
      font-weight: 500;
      font-size: 0.9rem;
      line-height: 2rem;
    }

    small {
      font-weight: 400;
    }
  }

  .middle {
    .title {
      color: #fff;
      font-style: italic;
      font-family: "Montserrat", sans-serif;
      padding-bottom: 1rem;
      line-height: 2rem;
    }

    ul {
      display: grid;
      grid-template-columns: repeat(2, 12rem);
      grid-template-rows: repeat(2, 3rem);
      list-style: none;
      li a {
        font-family: "Montserrat", sans-serif;
        font-size: 0.9rem;
        opacity: 0.65;
        text-decoration: none;
        color: #fff;
      }
    }
  }

  .end {
    .title {
      line-height: 2rem;
      padding-bottom: 1rem;
      color: #fff;
      font-style: italic;
      font-family: "Montserrat", sans-serif;
    }
    label {
      position: relative;
      input {
        margin: 0;
        border: none;
        padding: 0.6rem 1rem 0.6rem 0.5rem;
        border-top-left-radius: 0.3rem;
        border-bottom-left-radius: 0.3rem;
      }

      input::placeholder {
        font-family: "Montserrat", sans-serif;
        font-size: 0.8rem;
        color: #0a142f;
      }

      button {
        background-color: #552bcc;
        border: none;
        position: absolute;
        left: 100%;
        margin: 0;
        border-top-right-radius: 0.3rem;
        border-bottom-right-radius: 0.3rem;
        padding: 0.6rem 0.5rem;
        cursor: pointer;
      }
    }
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    cursor: pointer;
  }

  .right {
    color: #fff;
    font-size: 0.8rem;
    font-family: "Montserrat", sans-serif;
  }
`;

export default Footer;
