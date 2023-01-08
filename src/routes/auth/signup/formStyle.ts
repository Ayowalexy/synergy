import styled from "styled-components/macro";
import { colors, formColors } from "../../../styles/colors";

export const FormContainer = styled.div`
  /* width: 480px; */
  font-family: "Montserrat", sans-serif;

  width: 31.5%;
  /* height: 723px; */
  margin: auto;
  background: ${colors.white};
  border: 5px solid ${colors.orange};
  border-radius: 16px;
  /* margin-top: 3%; */
  h1 {
    text-align: center;
    margin-bottom: -2px;
  }
  p {
    color: ${colors.textBlack2};
    font-size: 14px;
    line-height: 24px;
    width: 80%;
    margin: auto;
    text-align: center;
    margin-bottom: 2%;
  }
  hr {
    opacity: 0.5;
    width: 80%;
    margin: auto;
    background: ${colors.otherGrey2};
  }
  /* label {
    color: pink;
    background-color: aliceblue;
    margin-bottom: 5%;
  } */
  .alt {
    display: flex;
    width: 80%;
    margin: auto;
    justify-content: center;
    align-items: center;
    margin-top: 4%;
    margin-bottom: 4%;
    div:nth-child(1),
    div:nth-child(3) {
      width: 7rem;
      border-bottom: 1px solid #d9d9d9;
    }
    p {
      width: 100%;
      /* margin-top: 5%; */
    }
  }
  .box {
    /* width: 60%;
    margin: auto; */
    .fb {
      width: 169px;
      height: 44px;
      background-color: #fff;
      border: 1px solid ${formColors.lightPink};
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5%;
      img {
        margin-top: 14%;
      }
      h4 {
        /* color: ${colors.textBlue}; */
        font-weight: 500;
        font-size: 16px;
        /* line-height: 24px; */
      }
    }

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4%;
    margin-bottom: 4%;
  }

  form {
    /* margin-top: 1%; */
    width: 90%;
    margin: auto;
    /* background-color: gray; */

    div {
      margin-top: 3%;
      p {
        color: red;
        text-align: left;
        margin-right: 19%;
      }
    }
    ul {
      font-size: 0.9rem;
      /* background-color: aliceblue; */
      width: 40%;
      display: flex;
      width: 100%;
      padding: 0 2%;
      justify-content: space-evenly;
      gap: 4%;
      li {
        white-space: nowrap;
        font-size: 12px;
        /* margin-left: -14%; */
      }
    }
    label {
      color: ${colors.textBlack2};
    }

    /* span {
      background-color: pink;
      display: flex;
      justify-content: right;
      font-size: 14px;
      color: ${colors.orange};
      padding: 2% 0;
      font-weight: 600;
    } */

    .flex {
      width: 102%;
      /* background-color: lightblue; */
      div:nth-child(1) {
        /* flex-basis: 90%; */
        width: 100%;

        margin-right: 4%;
      }
      div:nth-child(2) {
        /* flex-basis: 90%; */
        width: 100%;
      }
      display: flex;
      justify-content: space-evenly;
    }
    .btn {
      margin: auto;
      margin-top: 7%;
    }
  }
  .foot {
    font-size: 12px;
    margin-top: 2%;
    p {
      line-height: 16px;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    padding-bottom: 5%;
    border-top: 5px solid ${colors.orange};
    border-bottom: none;
    border-left: none;
    border-right: none;

    border-radius: 24px 24px 0 0;
    .alt {
      div:nth-child(1),
      div:nth-child(3) {
        width: 6rem;
        border-bottom: 1px solid #d9d9d9;
      }
      p {
        width: 100%;
      }
    }
    form {
      ul {
        font-size: 10px;
        justify-content: left;
        /* background-color: aliceblue; */
        width: 100%;
        margin-left: 2%;
        gap: 14px;
        li {
          font-size: 10px;
        }
      }
      .flex {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;
