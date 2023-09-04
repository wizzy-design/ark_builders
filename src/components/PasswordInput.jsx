import styled from "styled-components";
import { useState } from "react";
import eyeoff from "../assets/icon/eye-off.svg";
import eyeon from "../assets/icon/eye-on.svg";

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <PasswordInputContainer showPassword={showPassword}>
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <UnmaskIcon onClick={togglePasswordVisibility}>
        {showPassword ? <img src={eyeon} /> : <img src={eyeoff} />}
      </UnmaskIcon>
      <span id="forgot"> Forgot password?</span>
    </PasswordInputContainer>
  );
};

// Styled Components

const PasswordInputContainer = styled.div`
  position: relative;

  #forgot {
    position: absolute;
    left: 20.5rem;
    top: 3rem;
    color: #552bcc;
    font-family: "Montserrat Alternates", sans-serif;
    font-size: 0.7rem;
    cursor: pointer;
  }
`;

const UnmaskIcon = styled.span`
  position: absolute;
  top: 0.5rem;
  right: 13.5rem;
  cursor: pointer;
`;

export default PasswordInput;
