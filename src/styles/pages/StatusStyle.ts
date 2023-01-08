import styled from "styled-components";
import { colors } from "../colors";

export const StatusContainer = styled.div`
  overflow: auto;
  height: 100vh;
  background-color: ${colors.deepBlue};
  font-family: "Montserrat", sans-serif;

  .top {
    margin-top: 7%;
    margin-bottom: 3%;
    h3 {
      font-weight: 700;
      color: ${colors.white};
      text-align: center;
      font-size: 28px;
      line-height: 0px;
    }
    p {
      font-size: 14px;
      text-align: center;
      color: ${colors.otherGrey2};
    }
  }
  .card_flex {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;
    #bord {
      border: 1px solid ${colors.textGreen};
    }
    .card {
      height: 406px;
      width: 20%;
      cursor: pointer;
      transition: all ease 500ms;
      border-radius: 12px 12px 0px 72px;
      background-color: ${colors.darkGreen};
      &:hover {
        border: 1px solid ${colors.textGreen};
      }
      .top {
        border-bottom: 1px solid ${colors.darkGreen2};
        height: 12rem;
        .img_card {
          width: 206px;
          margin: auto;
          margin-top: 5%;
        }
        #cen {
          img {
            width: 206px;
          }
        }
      }
      .rest {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        div {
          padding: 5% 0;
        }
        p {
          text-align: center;
          color: ${colors.white};
          font-size: 18px;
          font-weight: 700;
        }
      }
    }
  }
  .btn {
    width: 23%;
    margin: auto;
    margin-top: 3%;
  }
  @media only screen and (max-width: 600px) {
    .top {
      margin-top: 19%;
      margin-bottom: 8%;
      h3 {
        font-weight: 700;
        color: ${colors.white};
        text-align: center;
        font-size: 24px;
        line-height: 0px;
      }
      p {
        font-size: 12px;
        text-align: center;
        color: ${colors.otherGrey2};
      }
    }

    .card_flex {
      /* background-color: red; */
      flex-direction: column;
      justify-content: space-around;
      width: 87%;
      margin: auto;

      .card {
        width: 96%;
        height: 121px;
        margin-bottom: 5%;

        display: flex;
        justify-content: left;
        align-items: flex-end;
        padding: 0 5%;
        border-radius: 8px 8px 40px 0px;
        gap: 6%;
        &:hover {
          border: none;
        }

        .top {
          height: unset;
          border-bottom: none;

          padding-right: 3%;
          border-right: 1px solid ${colors.darkGreen2};
          #cen {
            img {
              width: 80px;
            }
          }
          .img_card {
            width: 100%;
            img {
              width: 80px;
            }
          }
        }
        .rest {
          display: flex;
          flex-direction: row;
          align-self: center;
          /* background-color: red; */
          justify-content: space-between;
          width: 60%;
          gap: 6%;
          img {
            width: 28px;
          }
          p {
            font-size: 12px;
            white-space: nowrap;
          }
        }
      }
    }
    .btn {
      width: 88%;
      margin: auto;
      margin-top: 12rem;
    }
  }
`;
