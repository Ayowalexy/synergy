import styled from "styled-components/macro";
import { colors } from "../../styles/colors";

export const HeaderContainer = styled.div`
  font-family: "Montserrat", sans-serif;
  height: 72px;
  width: 96%  ;
  border-radius: 16px;
  background-color: ${colors.darkGreen};
  display: grid;
  grid-template-columns: 64% 36%;
  align-items: center;
  padding: 0 2%;
  .input-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3%;

    div:nth-child(1) {
      /* background-color: blue; */
      /* margin-top: 7%; */
      /* margin-left: 3%; */
    }
    div:nth-child(2) {
      /* background-color: pink; */
      flex-basis: 85%;
    }
    input {
      background-color: ${colors.darkGreen};
      width: 99%;
      outline: none;
      border: none;
      margin-top: 2%;
      padding: 2% 0;
      font-weight: 500;
      font-size: 16px;
      color: ${colors.white};

      /* margin-bottom: 1%;  */
    }
  }
  .action-icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
