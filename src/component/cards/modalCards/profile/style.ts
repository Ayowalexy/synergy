import styled from "styled-components";
import { colors } from "../../../../styles/colors";

export const Container = styled.div`
  background-color: ${colors.darkGreen};
  /* width: 270px; */
  height: 500px;
  position: relative;
  border: 1px solid ${colors.darkGreen2};
  border-radius: 8px;
  padding: 0 8%;
  font-family: "Montserrat", sans-serif;
  .close {
    position: absolute;
    top: 5%;
    right: 10%;
    cursor: pointer;
  }
  .top {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
    padding-top: 7%;
    padding-bottom: 3%;

    border-bottom: 1px solid ${colors.darkGreen2};

    .pfp {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      border: 1px solid ${colors.orange};
    }
    h4 {
      font-weight: 600;
      font-size: 16px;
      line-height: 1px;
      color: ${colors.white};
    }
    .title {
      p {
        color: ${colors.textGreen};
        font-size: 14px;
        line-height: 1px;
      }
    }
    .fol {
      display: flex;
      align-items: center;
      gap: 15%;

      .border {
        width: 0.6px;
        height: 31px;
        opacity: 0.5;
        /* background-color: ${colors.darkGreen2}; */
        border: 1px solid ${colors.darkGreen2};
      }
      p {
        font-size: 14px;
        color: ${colors.textGrey4};
        line-height: 1px;
      }
    }
  }
  .rest {
    margin-top: 3%;
    .list {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 6%;
      padding: 6.5% 0;
      font-weight: 500;
      font-size: 16px;
      a {
        text-decoration: none;
        color: ${colors.white};
      }
      color: ${colors.white};
    }
    #border {
      border-bottom: 1px solid ${colors.darkGreen2};
    }
  }
  @media only screen and (max-width: 600px) {
    border-radius: 0px 0px 0px 40px;
  }
`;
