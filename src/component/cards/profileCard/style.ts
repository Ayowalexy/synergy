import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const Container = styled.div`
  // width: 245px;
  // height: 411px;
  // position: fixed;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;

  width: 18%;
  /* background: yellow; */
  height: 277px;
  padding-bottom: 9%;
  border: 1px solid ${colors.textGreen};
  border-radius: 16px;
  position: fixed;
  .mb-t {
    border-bottom: 1px solid ${colors.borderGrey};
    width: 90%;
    margin: -10px auto;
  }

  .pfp {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    border: 1px solid ${colors.orange};
    margin: auto;
    margin-top: 6%;
  }
  .text {
    // border-bottom: 1px solid ${colors.borderGrey};
    padding-bottom: 7%;
    h3 {
      font-weight: 600;
      font-size: 24px;
      color: ${colors.white};
      text-align: center;
      line-height: 13px;
    }
    h4 {
      color: ${colors.textGreen};
      text-align: center;
      line-height: 3px;
      font-weight: 500;
    }
    .loc {
      display: flex;
      align-items: center;
      color: ${colors.textGrey4};
      text-align: center;
      justify-content: center;
      /* background-color: rebeccapurple; */
      line-height: 1px;
      height: 1rem;
      margin-top: -1%;
      margin-bottom: 5%;
    }
  }
  .btm {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;

    align-items: center;
    text-align: center;
    h3 {
      font-weight: 700;
      font-size: 24px;
      color: ${colors.textGreen};
      line-height: 1px;
    }
    p {
      font-size: 14px;
      color: ${colors.textGrey4};
    }
  }
`;
