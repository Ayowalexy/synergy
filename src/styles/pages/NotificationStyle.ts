import styled from "styled-components";
import { colors } from "../colors";

export const Container = styled.div`
  padding: 5% 10%;
  background-color: #00212d;
  display: grid;
  grid-template-columns: 63% 42%;
  grid-gap: 3%;
  font-family: "Montserrat", sans-serif;

  /* height: 100vh; */
  .main-section {
    margin-top: 5%;
    margin-bottom: 3%;
    border-radius: 12px;

    background-color: ${colors.darkGreen};
    .flex-card {
      border-radius: 12px;
      /* background-color: red; */
    }
    .flex {
      display: flex;
      justify-content: space-between;
      padding: 1% 0%;
      width: 95%;
      margin: auto;
      align-items: center;
      border-bottom: 1px solid ${colors.darkGreen2};

      .left {
        .img-cont {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid ${colors.orange};
          background-color: ${colors.orange};
        }
        display: flex;
        align-items: center;
        width: 44%;
        gap: 2%;
        color: ${colors.white};
      }
      .right {
        color: ${colors.orange};
        font-weight: 600;
        cursor: pointer;
      }
    }
  }
  .right-section {
    margin-top: 3%;

    .arr_up {
      width: 42px;
      height: 40px;
      border-radius: 8px;
      background-color: ${colors.lightGradient};
      margin-top: 4%;

      margin-left: 63%;
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
    padding: 0% 4%;
    /* padding-top: 5%; */
    .main-section {
      margin-bottom: 15%;
      .flex {
        .left {
          font-size: 14px;
          width: 84%;
        }
        .right {
          font-weight: 500;
        }
      }
    }
    .right-section {
      .arr_up {
        display: none;
      }
    }
  }
`;
