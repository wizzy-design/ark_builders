import styled from "styled-components";
import bgImage from "../assets/img/loginImage.svg";
import logo from "../assets/icon/loginLogo.svg";
import gmail from "../assets/icon/gmail.svg";
import email from "../assets/icon/email.svg";
import outlook from "../assets/icon/outlook.svg";
import google from "../assets/icon/google.svg";
import { Link } from "react-router-dom";

const Login3 = () => {
  return (
    <Parent>
      <div className="left">
        <img src={bgImage} alt="Background Image Of Login Page" />

        <div id="google">
          <p>
            If you want to deliver positively outrageous service, keeping your{" "}
            <br />
            customers connected to you is critical. Your ability to engage,{" "}
            <br />
            guide and satisfy your customers is integral to your success as a{" "}
            <br />
            leader. Great service starts with how you build relationships and{" "}
            <br />
            earn trust - that’s the basis of gaining and maintaining successful{" "}
            <br />
            connections with your customers.
          </p>
          <img src={google} alt="Google" />
        </div>
      </div>

      <Right>
        <img id="logo" src={logo} alt="Logo Icon" />

        <div className="title">
          <h2>Check your email</h2>
          <small>
            <br />
            We sent an email to james@ubagroup.com with instructions <br /> on
            how to reset password.
          </small>
          <div className="apurp">
            <small id="purp">Change email address</small>
          </div>
        </div>

        <div className="buttons">
          <button>
            <img id="Gmail" src={gmail} alt="Gmail" /> Open Gmail
          </button>
          <button>
            <img id="Email" src={email} alt="Email" /> Open Email app
          </button>
          <button>
            <img src={outlook} alt="Gmail" /> Open Outlook
          </button>
        </div>

        <div id="signup">
          <Link to="/login"> &lt;&lt;&lt; Back to Login</Link>
        </div>
      </Right>
    </Parent>
  );
};

// Styled Component

const Parent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  overflow: hidden;
  max-height: 100vh;

  .left {
    img {
      position: relative;
      height: 100vh;
    }

    #google {
      position: absolute;
      top: 25rem;
      left: 2rem;
      padding: 1rem 2rem 3rem;
      background-color: #552bcc40;
      border-radius: 0.3rem;

      p {
        color: #fff;
        line-height: normal;
        font-size: 0.7rem;
        font-family: "Montserrat", sans-serif;
      }

      img {
        position: absolute;
        top: 5.5rem;
        width: 3.5rem;
        height: 4rem;
      }
    }
  }
`;

const Right = styled.div`
  padding-top: 3rem;

  #logo {
    width: 3rem;
    padding-bottom: 2rem;
  }

  .title {
    padding-bottom: 2.5rem;
    h2 {
      color: #324054;
      font-weight: 700;
      font-family: "Montserrat Alternates", sans-serif;
    }
    small {
      color: #324054;
      font-family: "Montserrat", sans-serif;
    }

    .apurp {
      margin-top: 1rem;

      #purp {
        color: #552bcc;
        font-size: 0.75rem;
        cursor: pointer;
      }
    }
  }

  .buttons {
    button {
      display: flex;
      color: #324054;
      font-weight: 600;
      width: 70%;
      justify-content: center;
      align-items: center;
      height: 3rem;
      background: none;
      border-radius: 0.3rem;
      margin-bottom: 1.5rem;
      border: 0.5px solid #c2c2c2;
      cursor: pointer;

      img {
        width: 2.5rem;
        padding-right: 0.5rem;
      }

      #Email,
      #Gmail {
        width: 2rem;
      }
    }
  }

  #signup {
    padding-top: 1rem;
    width: 70%;
    text-align: center;
    font-family: "Montserrat Alternates", sans-serif;
    font-size: 0.7rem;

    a {
      text-decoration: none;
      color: #324054;
    }
  }
`;

export default Login3;
