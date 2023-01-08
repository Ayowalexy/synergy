import styled from "styled-components/macro";
import { colors } from "../colors";

export const MidCardRegular = styled.div`
  font-family: "Montserrat", sans-serif;
  width: 100%;

  .mb-t {
    border-bottom: 1px solid ${colors.borderGrey};
    width: 95%;
    margin: 18px auto;
  }

  background-color: ${colors.darkGreen};
  border-radius: 16px;
  /* margin-top: 5%; */

  padding-bottom: 1.1%;
  .head {
    display: flex;
    justify-content: space-between;
    padding: 0.5% 1%;
    align-items: center;
    .identity {
      /* flex-basis: 45%; */

      align-items: center;
      display: flex;
      padding: 1%;
      flex-basis: 34%;

      justify-content: space-around;
      /* background-color: pink; */
      #synergy img {
        width: 28px;
        height: 28px;
      }
      div:nth-child(1) {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        border: 2px solid ${colors.orange};
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 38px;
          height: 38px;
          border-radius: 50%;
        }
      }
      .name {
        line-height: 0px;
        /* margin-top: -5%; */
        color: ${colors.primaryGrey};
        margin-right: -5%;

        h4 {
          font-weight: 600;
          font-size: 16px;
          display: flex;
          align-items: center;
          color: ${colors.white};
          white-space: nowrap;
          margin-bottom: 15%;
          margin-left: 0;
          margin-top: 5%;
          /* background-color: red; */
          margin-right: 3px;
        }
        p {
          font-weight: 400;
          font-size: 14px;
          color: ${colors.primaryGreen};
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 4px;
          /* background-color: yellow; */
          margin-top: -0.6rem;
        }
      }
    }
    .more_popup {
      position: relative;
      width: 30%;
      display: flex;
      justify-content: flex-end;
      justify-self: flex-end;
      cursor: pointer;
      .overlay {
        z-index: 3;
        background-color: black;
        opacity: 0.1;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        position: fixed;
      }
      .flag {
        position: absolute;
        bottom: -3.5rem;
        cursor: pointer;
        z-index: 4;

        gap: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 6% 0%;
        width: 100%;
        background-color: ${colors.darkGreen};
        color: ${colors.white};
        transition: all ease 500ms;

        border: 1px solid ${colors.darkGreen2};
        box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        img {
          margin-top: 4px;
        }
      }
    }
  }

  /* #tities {
    flex-basis: 29%;
  } */

  .text {
    width: 95%;
    padding-left: 3%;
    /* margin-top: -5%; */
    margin-top: -2%;

    h3 {
      font-weight: 600;
      color: ${colors.otherGrey2};
      font-size: 16px;
    }
    p {
      color: ${colors.otherGrey};

      /* margin-bottom: 5%; */
      margin-top: -1%;
      line-height: 25px;
    }
  }
  .imgcont {
    margin: auto;
    /* background-color: green; */
    width: 95%;
    margin: auto;
    margin-bottom: 5%;
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
  }

  .foot {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0% 2.5%;
    font-size: 16px;
    margin-top: 4%;

    .liker {
      display: flex;
      align-items: center;
      color: ${colors.otherGrey2};
      justify-content: center;
      gap: 5px;
      cursor: pointer;
      div:nth-child(2) {
        margin-top: -0.9rem;
      }
    }
    .send {
      justify-content: center;
      display: flex;
      cursor: pointer;
    }
    .comment {
      display: flex;
      align-items: center;
      color: ${colors.otherGrey2};
      gap: 5px;
      justify-content: center;
      cursor: pointer;
      div:nth-child(2) {
        margin-top: -0.2rem;
      }
    }
    .right {
      display: flex;
      align-items: center;

      justify-content: flex-end;

      div {
        cursor: pointer;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    border-radius: 12px;
    width: 100%;
    .head {
      .more_popup {
        font-size: 12px;
        width: 39%;
        .flag {
          bottom: -2.5rem;
        }
        img {
          /* width: 14px;
          height: 14px; */
        }
      }
      .identity {
        flex-basis: 42%;
        .name {
          h4 {
            font-size: 12px;
          }
          p {
            font-size: 11px;
            margin-left: 0%;
            white-space: nowrap;
          }
        }
      }
    }
    /* #tities {
      flex-basis: 41%;
    } */

    .text {
      p {
        line-height: 19px;
        font-size: 0.8rem;
      }
      h3 {
        font-size: 16px;
      }
    }
    .imgcont {
      width: 92%;
      margin: auto;
      margin-bottom: 4%;
      /* background-color: green; */
      img {
        width: 100%;
        height: 408px;
        object-fit: cover;
      }
    }
    .foot {
      .left {
        width: 50%;
        .likes {
          font-size: 12px;
          img {
            width: 16px;
          }
        }
        .comment {
          flex-basis: 25%;
          font-size: 14px;

          img {
            width: 16px;
          }
        }
      }
      .right {
        flex-basis: 15%;
      }
    }
  }
`;

//for landing page
export const MidCardRegularLP = styled(MidCardRegular)`
  .text {
    margin-top: -7%;

    h3 {
      line-height: 10px;
      margin-top: 8%;
    }
  }

  .imgcont {
    margin-bottom: 2%;
  }
  .imgcont img {
    width: 100%;
    height: 408px;
    object-fit: cover;
  }

  .head {
    .identity {
      flex-basis: unset;
      column-gap: 0.2rem;
      .name {
        // background-color: red;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: flex-start;
        // height: 2.5rem;
        h4 {
          font-size: 12px;
          line-height: 0px;
          // height: 1px;
          margin-bottom: 5px;
          margin-left: unset;
          margin-top: unset;
          display: flex;
          align-items: center;
        }
        .small {
          font-size: 12px;
          margin-right: 3px;
        }
        .sub-text {
          font-size: 12px;
          padding-top: 3px;
        }
        p {
          font-size: 11px;
          margin-top: unset;
          white-space: nowrap;
          line-height: 0px;
          // height: 1rem;
        }
      }
    }
  }

  .foot {
    .likes {
      flex-basis: 48%;
      gap: 3px;
      height: 29px;
      .count {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        border-right: 1px solid ${colors.grey};
        padding-right: 6px;
        margin-top: 2px;
      }
      #liked {
        color: ${colors.error};
      }
      .nolike {
        margin-top: 8px;
      }
    }
    .right {
      flex-basis: 9%;
    }
  }

  @media only screen and (max-width: 600px) {
    .head {
      padding: 0.5% 2%;
      .time {
        font-size: 12px;
        color: ${colors.textGrey3};
        margin-top: -3%;
        margin-right: 2%;
      }
      .small {
        font-size: 16px;
        margin-right: 3px;
      }
      .sub-text {
        font-size: 14px;
        padding-top: 3px;
      }
      .identity {
        gap: 3%;
        flex-basis: unset;
        #synergy {
          width: 42px;
          height: 37px;
        }
        .name {
          // background-color: red;
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          justify-content: flex-start;
          // height: 2.5rem;
          h4 {
            font-size: 12px;
            line-height: 0px;
            // height: 1px;
            /* margin-bottom: unset; */
            margin-left: unset;
            margin-top: unset;
            display: flex;
            align-items: center;
          }
          p {
            font-size: 11px;

            white-space: nowrap;
            line-height: 0px;
            // height: 1rem;
          }
        }
      }
    }

    .foot {
      .left {
        .likes {
          flex-basis: 63%;
          .count {
            font-size: 12px;
          }
          .nolike {
            margin-top: 5px;
            img {
              width: 18px;
            }
          }
        }
        .comment {
          font-size: 12px;
          img {
            width: 15px;
          }
        }
      }
      .right {
        flex-basis: 17%;
        gap: 23px;
        div:nth-child(1) {
          img {
            width: 15px;
          }
        }
        div:nth-child(2) {
          img {
            width: 16px;
          }
        }
      }
    }
  }
`;
