import styled from "styled-components/macro";
import Bg from "../../assets/pngs/auth/bg.png";
import { colors } from "../colors";

export const AddFriendStyles = styled.div`
  font-family: "Montserrat", sans-serif;
  overflow: auto;
  background-color: ${colors.deepBlue};

  .top {
    margin-top: 2%;
    .ill {
      width: 50%;
      margin: auto;
      display: flex;
      justify-content: center;
      /* background-color: red; */
    }

    .arrow-back {
      position: absolute;
      top: 20px;
      left: 140px
    }
    .txt {
      text-align: center;
      width: 50%;
      margin: auto;
      color: ${colors.white};
      h1 {
        line-height: 8px;
        white-space: nowrap;
      }
      p {
        font-size: 16px;
        color: ${colors.textGrey};
        width: 70%;
        margin: auto;
      }
    }
  }
  .grid {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    grid-gap: 2.5%;
    padding: 2.5% 10%;

  }
  .btn {
    width: 30%;
    margin: auto;
    margin-bottom: 5%;
    /* position: fixed;
    bottom: 0;
    left: 38; */
    background-color: black
  }
  @media only screen and (max-width: 600px) {
    padding-bottom: 15%;
    padding-top: 7%;
    .grid {
      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 1%;

      padding: 0 3%;
      margin-top: 5%;

      div {
        /* margin-bottom: 5%; */
      }
    }
    .btn {
      margin-top: 0%;
      position: fixed;
      bottom: 0;
      left: 7%;
      width: 86%;
    }

    .top {
      .txt {
        width: 90%;

        h1 {
          line-height: 18px;
          font-size: 21px;
        }
        p {
          font-size: 12px;
          color: ${colors.textGrey};
          width: 96%;
          margin: auto;
        }
      }
      .arrow-back {
        padding: 20px;
        top: 5px;
        left: 10px
      }
    }
  }
`;
