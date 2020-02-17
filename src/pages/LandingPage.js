import React from "react";
import styled from "@emotion/styled";
import { fadeIn } from "../Animations";
import { Link, useHistory } from "react-router-dom";

const LandingContainer = styled(Link)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(45deg, #1d1d1d, #222222);
`;

const Logo = styled.img`
  animation: ${fadeIn} 3.5s 1;
`;

export default function LandingPage() {
  const history = useHistory();

  React.useEffect(() => {
    const timeoutId = setTimeout(() => history.push("/home"), 2700);
    return () => {
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <LandingContainer to="/home">
      <Logo src="./logo192.png" alt="Sneaker Planet Shop Logo" />
    </LandingContainer>
  );
}
