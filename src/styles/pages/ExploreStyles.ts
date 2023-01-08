import styled from "styled-components/macro";
import { colors } from "../colors";
import { AddFriendStyles } from "./AddFriendStyles";

export const ExploreStyle = styled(AddFriendStyles)`
  padding: 5% 15%;
  .flex {
    display: flex;
    /* padding: 0 10%; */
    justify-content: space-between;
    align-items: center;
    margin-top: 4%;
    div:nth-child(1) {
      p {
        color: ${colors.otherGrey2};
        font-size: 24px;
        font-weight: 700;
        line-height: 0px;
      }
    }
    div:nth-child(2) {
      display: flex;
      align-items: center;
      p {
        color: ${colors.lightOrange};
      }
    }
  }
  .grid {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    grid-column-gap: 2%;
    grid-row-gap: 4.5%;
    padding: 2.5% 0%;
    
  }

  @media only screen and (max-width: 600px) {
    padding: 3% 3%;

    .flex {
      div:nth-child(1) {
        p {
          color: ${colors.otherGrey2};
          font-size: 14px;
          font-weight: 600;
          line-height: 0px;
        }
      }
      div:nth-child(2) {
        img {
          width: 17px;
        }
      }
    }
    .grid {
      grid-template-columns: auto auto auto;
      grid-column-gap: 5%;
      grid-row-gap: 2%;
      margin-bottom: 19%;
      .fc {
        /* background-color: black; */
        margin-bottom: 3%;

        div {
          /* .left {
            width: 57%;
          } */

          .btns {
            width: 31%;
            .sqr {
              width: 33px;
              height: 33px;
              svg {
                font-size: 25px;
                margin-left: 14%;
              }
            }
          }
        }
      }
    }
  }
`;
