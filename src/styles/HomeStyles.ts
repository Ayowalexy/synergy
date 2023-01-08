import styled from "styled-components/macro";
import { colors } from "./colors";

export const HomeContainer = styled.div`
  padding: 0 10%;
  background-color: ${colors.shadeTeal};
  display: grid;
  grid-template-columns: 23% 44% 40%;
  grid-gap: 2%;
  font-family: "Montserrat", sans-serif;
  padding-top: 5%;
  padding-bottom: 3%;

  /* height: 100vh; */
  .left-section {
    margin-top: 15%;
  }

  .main-section {
    margin-top: 5%;
    margin-bottom: 3%;
  }
  .right-section {
    margin-top: 3%;

    .arr_up {
      width: 42px;
      height: 40px;
      border-radius: 8px;
      background-color: ${colors.lightGradient};
      margin-top: 4%;

      margin-left: 64%;
      cursor: pointer;
      &:hover {
        background-color: ${colors.primaryGreen};
      }

      img {
        margin-left: 26%;
        margin-top: 19%;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 0 4%;
    padding-bottom: 10%;
    .left-section {
      display: none;
    }
    .right-section {
      .arr_up {
        display: none;
      }
    }
  }
`;
