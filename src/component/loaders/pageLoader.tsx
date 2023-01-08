import React from "react";
import styled from "styled-components";
import Logo from "../../assets/svgs/home/logo.svg";
import Bg from "../../assets/pngs/auth/bg.png";
import { colors } from "../../styles/colors";

export default function PageLoader() {
  const Container = styled.div`
    height: 100vh;
    background-color: ${colors.deepBlue};
    background-image: url(${Bg});
    background-size: cover;
    background-repeat: no-repeat;
    font-family: "Montserrat", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      /* background-color: red; */
      /* width: ; */
    }
  `;
  return (
    <Container>
      <div>
        <img src={Logo} alt="logo" />
      </div>
    </Container>
  );
}
