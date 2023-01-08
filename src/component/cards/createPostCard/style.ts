import styled from "styled-components/macro";
import { colors } from "../../../styles/colors";

export const SmContainer = styled.div`
  /* width: 100vw; */
  /* height: calc(100vh - 67px); */
  /* background-color: yellow; */
  margin-bottom: 4%;
  height: 100vh;
  background-color: ${colors.borderGrey};

  .top {
    background-color: ${colors.darkGreen};

    display: flex;
    justify-content: space-between;
    padding: 3% 2%;
    align-items: center;
  }

  .rest {
    margin-top: 0.1%;
    .title {
      padding: 3% 2%;
      display: flex;
      justify-content: space-between;
      background-color: ${colors.darkGreen};
      align-items: center;
      .inp {
        flex-basis: 90%;
      }
      input {
        width: 96.1%;
        outline: none;
        border: none;
        background-color: ${colors.darkGreen};

        padding: 2% 0;
        font-weight: 500;
        font-size: 16px;
        color: ${colors.white};
        padding: 2%;
      }
    }
    .content {
      height: 77.5vh;
      background-color: ${colors.shadeTeal};

      textarea {
        background-color: ${colors.shadeTeal};
        /* visibility: hidden; */
        height: 100%;
        width: 96%;
        color: ${colors.white};
        padding: 2%;
        border: none;
        background-color: #00212D;
        height: 88%;
        width: 96%;
        resize: none;
        padding: 2%;
        border: none;
        font-size: 1rem;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
      }
      textarea::placeholder {
        color: #fff
      }
    }

    .foot {
      display: flex;
      justify-content: flex-start;
      padding: 4% 2%;
      background-color: yellow;
      align-items: center;
      background-color: ${colors.darkGreen};
      div {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        background-color: ${colors.darkGreen2};
        margin-right: 4%;
        margin-left: 2%;
        margin-top: 3%;
      }
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Montserrat", sans-serif;
  .text__ {
    display: flex;
    width: 98%;
    background-color: #012B37;

    justify-content: space-between;
    align-items: center;
    .title__ {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #878787;
    }
  }
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07),
    0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0531481),
    0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0425185),
    0px 20px 13px rgba(0, 0, 0, 0.035),
    0px 8.14815px 6.51852px rgba(0, 0, 0, 0.0274815),
    0px 1.85185px 3.14815px rgba(0, 0, 0, 0.0168519);
  /* background-color: yellow; */
  .nav {
    background-color: ${colors.darkGreen};
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    display: flex;
    justify-content: space-between;
    padding: 1% 2%;
    align-items: center;
    .left {
      display: flex;
      width: 40%;
      justify-content: space-between;
      align-items: center;
      font-weight: 700;
      color: ${colors.white};
      font-size: 20px;
    }
    .cancel {
      cursor: pointer;
    }
  }
  .rest {
    margin-top: -1.7%;
  }
  .title {
    input {
      background-color: ${colors.darkGreen};
      width: 96.1%;
      outline: none;
      border: none;
      margin-top: 2%;
      padding: 2% 0;
      font-weight: 500;
      font-size: 16px;
      color: ${colors.white};
      padding: 2%;

      /* margin-bottom: 1%;  */
    }
  }
  .content {
    height: 187px;
    width: 100%;

    /* background-color: yellow; */
    textarea {
      background-color: ${colors.shadeTeal};
      /* visibility: hidden; */
      height: 88%;
      width: 96%;
      color: ${colors.white};
      resize: none;
      padding: 2%;
      border: none;
      padding: 2%;
        border: none;
        background-color: #00212D;
        height: 88%;
        width: 96%;
        resize: none;
        padding: 2%;
        border: none;
        font-size: 1rem;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
    textarea::placeholder {
      color: #fff
    }
  }
  .foot {
    background-color: ${colors.darkGreen};
    /* background-color: yellow; */

    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    display: flex;
    justify-content: space-between;
    padding: 2% 2%;
    /* width: 100%; */
    align-items: center;
    .icons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 13%;
    }
    .btns {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 40%;
      gap: 10%;
      div {
        width: 100%;
      }
    }
  }
`;
