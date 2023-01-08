import styled from "styled-components/macro";
import { colors } from "../colors";

export const LandingPageContainer = styled.div`
  padding: 7% 8% 0% 8%;
  /* margin-top: 5%; */
  background-color: ${colors.shadeTeal};
  display: grid;
  /* overflow: hidden; */
  grid-template-columns: 44% 49%;
  grid-gap: 4%;
  font-family: "Montserrat", sans-serif;

  .main-section {
    overflow-y: auto;
    overflow-x: hidden;
    /* background-color: yellow; */

    height: calc(100vh - 100px);
    width: 100%;
    padding-top: 5%;
    padding-bottom: 3%;

    &::-webkit-scrollbar {
      width: 0.1em;
    }
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.3);
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${colors.darkGreen};
      border-radius: 2px;
      border: 1px solid ${colors.darkGreen};
    }
  }
  .right-section {
    /* margin-top: 3%; */
    /* background-color: yellow; */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;

    .fones {
      margin-left: 15%;
      img {
        width: 90%;

        /* background-color: blue; */
      }
    }
    .maintext {
      margin-top: -8%;
      text-align: center;
      width: 100%;
      h1:nth-child(1) {
        font-weight: 700;
        font-size: 48;
        line-height: 0px;
        color: ${colors.white};
      }

      .text_slide {
        /* background-color: yellow; */
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2%;
        /* column-gap: 3%; */
        color: ${colors.textGreen};
        /* text-shadow: 2px 2px 2px rgb(183, 247, 213); */
        font-weight: 700;
        font-size: 2.4rem;

        .container {
          background: transparent;
          border-radius: 10.6616px;
          display: flex;
          justify-content: center;

          /* background-color: red; */
          width: max-content;
          padding: 1% 1%;
        }

        .right {
          text-align: center;
          background-color: red;
          /* width: 40%;
          margin: auto; */
          /* background-color: red; */
          /* height: 20px; */
          /* background: rgba(74, 167, 122, 0.24);
          border-radius: 10.6616px; */
          /* margin: 2% 0; */
        }
      }

      p {
        font-size: 14px;
        color: ${colors.textGrey2};
      }
    }
    .smbtn {
      /* background-color: yellow; */
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 17% 4% 3% 4%;
    .smbtn {
      /* background-color: yellow; */
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .main-section {
      height: 100%;
    }

    .text_slide {
      /* background-color: yellow; */
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2%;
      /* column-gap: 3%; */
      color: ${colors.textGreen};
      font-weight: 700;
      font-size: 2.4rem;

      .container {
        background: transparent;
        border-radius: 10.6616px;
        display: flex;
        justify-content: center;

        /* background-color: red; */
        width: max-content;
        padding: 1% 1%;
      }

      .right {
        text-align: center;
        /* background: rgba(74, 167, 122, 0.24);
        border-radius: 10.6616px; */
        /* margin: 2% 0; */
        width: 40%;
        /* background-color: red; */
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 11.5vh;
      }
    }
    .right-section {
      padding-bottom: 7%;
      margin-bottom: 2%;

      border-bottom: 1px solid ${colors.darkGreen2};

      .fones {
        margin-left: 16%;
        img {
          width: 100%;
        }
      }
      .arr_up {
        display: none;
      }
    }
  }
`;
