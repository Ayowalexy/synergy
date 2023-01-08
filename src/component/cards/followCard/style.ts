import styled from "styled-components/macro";
import { colors } from "../../../styles/colors";

export const FollowCardContainer = styled.div`
  font-family: "Montserrat", sans-serif;

  width: 100%;
  height: 263px;
  background: ${colors.darkGreen};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4%;
  .content {
  }
  .circle {
    width: 158px;
    height: 158px;
    border-radius: 50%;
    background: linear-gradient(91.32deg, #fe9730 46.45%, #fb5046 99.37%);
    border: 2px solid #fe9730;
    margin: auto;
  }
  .text {
    text-align: center;
    white-space: nowrap;
    h4 {
      color: ${colors.white};
      line-height: 1px;
      font-size: 16px;
    }
    p {
      line-height: 1px;
      font-size: 14px;
      color: ${colors.textGreen};
    }
  }
  .btns {
    margin-top: 4%;
    margin: auto;
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0% 2%;
    /* background-color: yellow; */
    height: 200px;
    width: 90%;
    gap: 0%;
    margin: auto;
    justify-content: space-between;
    .circle {
      width: 82px;
      height: 82px;
      border-radius: 50%;
      background: linear-gradient(91.32deg, #fe9730 46.45%, #fb5046 99.37%);
      border: 2px solid #fe9730;
      margin: auto;
      img {
        width: 82px;
        height: 82px;
        border-radius: 50%;
      }
    }
    .left {
      align-items: center;
      margin-top: 5%;
      /* background-color: yellow; */

      h4 {
        color: ${colors.white};
        line-height: 1px;
        font-size: 12px;
        text-indent: 1%;
      }
      p {
        line-height: 1px;
        font-size: 10px;
        color: ${colors.textGreen};
        /* text-indent: 1%; */
      }
    }
    .btns {
    }
  }
`;
