import styled from "styled-components";
import bgImage from "../assets/img/loginImage.svg";
import logo from "../assets/icon/loginLogo.svg";
import PasswordInput from "../components/PasswordInput";
import google from "../assets/icon/google.svg";

const AuthPage = () => {
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
          <h2>Good afternoon 🌅 </h2>
          <small>Enter your login credentials</small>
        </div>

        <form>
          <div className="inputs">
            <label htmlFor="email">Email/User ID</label>
            <input id="inputs" type="text" placeholder="A00125789B" />
            <label htmlFor="password">Password</label>
            <PasswordInput />

            <input id="submit" type="submit" value="Login" />
            <div id="signup">
              Dont have an account? <span id="purp">Signup</span>
            </div>
          </div>
        </form>
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
  }

  .inputs {
    label {
      display: block;
      font-weight: 600;
      font-size: 0.8rem;
      font-family: "Montserrat Alternates", sans-serif;
      padding-bottom: 0.4rem;
      color: #324054;
    }

    input {
      width: 70%;
      padding: 0.8em;
      text-indent: 20px;
      margin-bottom: 3rem;
      border-radius: 0.3rem;
    }

    input::placeholder {
      padding-left: 0.1rem;
      color: #324054;
      font-family: "Montserrat", sans-serif;
    }

    #submit {
      margin: 2rem 0 0 0;
      font-family: "Montserrat Alternates", sans-serif;
      font-weight: 600;
      color: #fff;
      background: #552bcc;
      border: none;
      cursor: pointer;
      border-radius: 0.3rem;
    }

    #signup {
      padding-top: 1rem;
      width: 70%;
      text-align: center;
      font-family: "Montserrat Alternates", sans-serif;
      font-size: 0.7rem;

      #purp {
        color: #552bcc;
        cursor: pointer;
      }
    }
  }
`;

export default AuthPage;
