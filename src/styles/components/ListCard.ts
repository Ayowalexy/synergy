import styled from "styled-components/macro";
import { colors } from "../colors";

export const ListCard = styled.div`
  font-family: "Montserrat", sans-serif;
  width: 72%;

  min-height: 480px;
  background-color: ${colors.darkGreen2};
  border-radius: 16px;

  .last {
    text-align: center;
    color: ${colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    p {
      margin-right: 3%;
      font-weight: 600;
    }
  }
  h2 {
    text-align: center;
    color: ${colors.white};
    font-weight: 700;
    font-size: 24px;
    padding-top: 7%;
    margin-bottom: 7%;
  }

  h3 {
    color: ${colors.primaryGreen};
    font-size: 18px;
    font-weight: 600;
  }
  #first {
    // border-top: 2px solid ${colors.borderGrey};
  }
  #hot {
    display: inline;
    padding-top: 4%;
    padding-bottom: 2%;
  }
  /* #none {
    border-bottom: none;
  } */
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // border-bottom: 2px solid ${colors.borderGrey};
    padding-left: 5%;
    padding-right: 5%;

    /* width: 90%;
    margin: auto; */
    padding-bottom: 3%;
    &:hover {
      background-color: ${colors.darkGreen};
      cursor: pointer;
    }
    /* margin-bottom: 3%; */
    h4 {
      color: ${colors.otherGrey2};
      white-space: nowrap;
    }
    p {
      color: ${colors.primaryGreen};
    }
    .user {
      display: flex;
      flex-basis: 85%;
      line-height: 1px;
      margin-top: 5px;
      justify-content: space-around;
      align-items: center;
    }
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
