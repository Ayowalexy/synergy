import styled from "styled-components/macro";
import { colors } from "../colors";

export const SmCard = styled.div`
  width: 73%;

  height: 105px;
  background-color: ${colors.primaryGreen};
  border-radius: 16px;
  padding-bottom: 4%;

  .flex {
    display: flex;
    width: 70%;
    align-items: center;
    margin: auto;
    justify-content: space-evenly;
    div {
      margin-top: 8%;
      cursor: pointer;
    }
  }
  .flex-b {
    width: 90%;
    display: flex;
    margin: auto;
    justify-content: space-evenly;
    font-weight: 400;
    font-size: 16px;
    color: ${colors.textBlue};
    div {
      cursor: pointer;
    }
  }
  .more {
    display: flex;
    align-items: center;
    gap: 5%;
    img {
      width: 90%;
    }
  }
  p {
    color: ${colors.textGrey3};
    text-align: center;
    /* line-height: 0px; */
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

interface Props {
  bg?: string;
}
export const SmCardTransparent = styled(SmCard)<Props>`
  margin-top: 5%;
  margin-bottom: 2%;
  background-color: ${(props) => (props.bg ? props.bg : "transparent")};
  border-radius: 16px;
  padding-bottom: 4%;
  a {
    text-decoration: none;
    color: ${colors.otherGrey};
  }

  border: 0.1px solid ${colors.textGreen};
  .flex-b {
    color: ${colors.otherGrey};
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    
  }
  .more {
    display: flex;
    align-items: center;
    gap: 5%;
    img {
      width: 90%;
    }
  }
  p {
    color: ${colors.textGrey3};
    text-align: center;
    /* line-height: 0px; */
  }
  .flex {
    width: 44%;
    div #fb  {
      width: 14px;
    }

    div #tw  {
      width: 25px;
    }

    div #lin  {
      width: 24px;
    }

    div #ins  {
      width: 28px;
    }
   
  }
  @media only screen and (max-width: 600px) {
    display: block;
    width: 100%;
    margin-bottom: 5%;
    border-radius: 18px;
    border: 1px solid ${colors.textGreen};
    .flex {
      width: 44%;
      div #fb  {
        width: 14px;
      }
  
      div #tw  {
        width: 24px;
      }
  
      div #lin  {
        width: 22px;
      }
  
      div #ins  {
        width: 29px;
      }
    }
    .flex-b {
      width: 90%;
      margin-top: 3%;

      font-size: 16px;
    }
    p {
      color: ${colors.textGrey3};
      text-align: center;
      line-height: 0px;
      font-size: 12px;
    }
    .more {
      gap: 10%;
    }
  }
`;
