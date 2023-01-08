import styled from "styled-components/macro";
import { colors } from "../../styles/colors";

export const FooterStyle = styled.div`
  display: none;
  @media only screen and (max-width: 600px) {
    position: fixed;
    bottom: 0%;
    left: 0%;
    right: 0%;
    display: flex;
    padding: 19px 2%;
    /* margin-top: 5%; */
    justify-content: space-evenly;
    align-items: center;
    background-color: #012b37;
    border-top: 2px solid #033945;
    border-radius: 8px 8px 0px 0px;
    /* height: 82px; */
    z-index: 9;

    img {
      width: 20px;
    }
    .active-link {
      color: ${colors.orange};
    }
    .inactive-link {
      color: ${colors.inactive};
    }
    #active {
      /* border-top: 2px solid #fe9730; */
    }
    div {
      /* background-color: yellow; */
      /* height: 45px; */
      /* padding-top: 3%;
      margin-bottom: 5px; */

    
    }
    .add {
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(91.32deg, #fe9730 46.45%, #fb5046 99.37%);
      width: 24px;
      height: 24px;
      border-radius: 4px;
      font-size: 1.5rem;
      p {
        margin-top: 1rem;
      }
    }
  }
`;
