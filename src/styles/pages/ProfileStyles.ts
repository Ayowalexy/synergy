import styled from "styled-components/macro";
import { colors } from "../colors";

interface Props {
  display?: boolean;
}

export const ProfileCard = styled.div`
  background-color: ${colors.darkGreen};
  /* width: 753px; */
  width: 30.5%;
  /* width: 536px; */
  padding: 0 0.8%;
  min-height: 7.563rem;
  margin: auto;
  /* height: 392px; */

  margin-bottom: 0.65%;
  border-radius: 16px;

  .title {
    border-bottom: 1px solid ${colors.darkGreen2};
    /* background-color: ${colors.darkGreen2}; */
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 1%;
    font-weight: 600;
    color: ${colors.textGreen};
    font-size: 16px;
    white-space: nowrap;
    .add {
      display: flex;
      justify-content: flex-end;
      /* background: yellow; */
      flex-basis: 81%;
    }
    #nil {
      img {
        margin-bottom: 0;
      }
    }
    div:nth-child(1) {
      /* background-color: red; */
      img {
        margin-bottom: -5px;
      }
      margin-top: 5px;
    }
    div:nth-child(2) {
      margin-bottom: -5px;
    }
  }
  #soc_link {
    cursor: pointer;
    color: ${colors.orange};
    /* background-color: grey; */
    padding-bottom: 2%;
    /* margi */
  }
  .card_btm {
    display: flex;

    align-items: center;
    justify-content: space-between;
    padding: 1.5% 0;
    small {
      font-size: 14px;
      color: ${colors.textGrey3};
    }
    .start {
      /* height: 2rem; */
      /* white-space: nowrap; */
      display: flex;
      align-items: center;
      gap: 7px;
      /* height: 1rem; */

      small {
        font-size: 14px;
        color: ${colors.textGrey3};
      }

      h3 {
        font-weight: 500;
        font-size: 16px;
        color: ${colors.white};
        padding: 0;
        margin: 0;
        /* line-height: 0px; */
      }
      h4 {
        font-weight: 500;
        font-size: 14px;
        /* line-height: 0px; */
        padding: 0;
        margin: 0;
        color: ${colors.white};
      }
      p {
        padding: 0;
        margin: 0;
        font-size: 12px;
        color: ${colors.textGrey3};
        /* line-height: 0px; */
      }
    }
    .end {
      img {
        width: 15px;
        height: 15px;
      }
    }
  }
  .links_cont {
    display: flex;
    justify-content: left;
    gap: 4%;
    align-items: center;
    margin-top: 3%;
    #link_ {
      background: ${colors.darkGreen2};
    }
    .link_ {
      display: flex;
      align-items: center;
      padding: 0.5% 2%;
      gap: 5px;
      height: 21px;
      border: 1px solid ${colors.darkGreen2};
      background-color: transparent;
      justify-content: center;
      color: ${colors.white};
      border-radius: 24px;
      font-size: 13px;
    }
  }

  .extra_ {
    border-top: 1px solid ${colors.darkGreen2};

    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.5rem;
    font-size: 12px;
    color: ${colors.textGrey3};
    cursor: pointer;
    p:nth-child(2) {
      margin-bottom: 8px;
    }
  }
  @media only screen and (max-width: 600px) {
    width: 84%;
    padding: 0 3%;
    margin-bottom: 2%;
    .card_btm {
      .start {
        img {
          width: 44px;
          height: 48px;
        }
        .textt {
          h3 {
            font-size: 14px;
          }
          h4 {
            font-size: 12px;

            /* line-height: 10px; */
          }
          p {
            font-size: 10px;
          }
        }

        small {
          font-size: 12px;
        }
      }
      .end {
        img {
          width: 15px;
          height: 15px;
        }
      }
    }

    .title {
      font-size: 12px;
    }
    .inp {
      input {
        border: none;
        outline: none;
      }
    }
  }
`;

export const ProfileStyle = styled.div<Props>`
  font-family: "Montserrat", sans-serif;
  /* overflow: auto; */
  background-color: ${colors.deepBlue};
  padding: 5% 0;

  .top {
    /* background-color: hotpink; */
    width: 75%;
    padding-top: 2%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 7%;
    align-items: center;
    .left {
      display: flex;
      /* background-color: yellow; */
      gap: 2%;
      align-items: center;
      width: 20rem;
      margin-left: 2%;

      .avi {
        /* background-color: red; */

        display: flex;
        justify-content: center;
        position: relative;
        div:nth-child(1) {
          width: 136px;
          height: 136px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #fe9730;
          background-color: transparent;

          /* img {
            width: 73px;
            height: 66px;
            margin: auto;
          } */
        }
        div:nth-child(2) {
          position: absolute;
          bottom: 5%;
          right: 10%;
          display: ${(props) => (props.display ? "block" : "none")};
        }
      }
      .title {
        text-align: left;
        align-self: center;
        line-height: 0px;
        white-space: nowrap;

        h4 {
          color: ${colors.white};
          font-weight: 700;
          font-size: 1.25rem;
        }
        p {
          color: ${colors.textGreen};
          font-size: 1rem;
        }
        .base {
          display: flex;
          /* justify-content: center; */
          align-items: center;
          gap: 4%;
          p {
            color: ${colors.textGrey4};
          }
        }
      }
      .dots {
        width: 60%;
        display: flex;
        justify-content: right;
        height: 2rem;
        align-items: flex-start;
        text-align: right;
        margin-left: 4rem;
      }
    }
    .right {
      display: flex;
      flex-direction: column-reverse;

      /* empty state >> mt */
      #mt_cont {
        /* background-color: pink; */
        margin-top: 5%;
        .quote1 {
          left: 6%;
          top: 0.3rem;
        }
        .quote2 {
          right: 6%;
        }
        .speech {
          width: 25.01rem;
          textarea {
            text-align: center;
            margin-top: 10%;
            color: ${colors.textGrey5};
          }
        }
      }
      .cont {
        position: relative;
        .quote1 {
          position: absolute;
          top: 1.1rem;
          z-index: 1;
          left: 32%;
          background-color: ${colors.deepBlue};
        }
        .quote2 {
          position: absolute;
          bottom: -0.7rem;
          z-index: 1;
          right: 32%;
          background-color: ${colors.deepBlue};
        }
        .speech {
          width: 40%;
          /* width: 401px; */
          margin: auto;
          margin-top: 3%;
          /* max-width: 432px; */

          min-height: 104px;
          position: relative;
          background: linear-gradient(#00212d, #00212d) padding-box,
            linear-gradient(to right, #fe9730, #fb5046);
          border: 1.1px solid transparent;
          border-radius: 20px;
          p {
            width: 93%;
            margin: auto;
            margin-top: 2%;
            color: ${colors.white};
            font-size: 14px;
            line-height: 26px;
            span {
              color: ${colors.lightOrange};
              cursor: pointer;
            }
          }
          textarea {
            resize: none;
            width: 90%;
            // height: 7.5rem;
            outline: none;
            border: none;
            margin-left: 5%;
            margin-top: 5%;
            background-color: ${colors.deepBlue};
            color: ${colors.textGrey3};
            &::-webkit-scrollbar {
              width: 1em;
            }
            &::-webkit-scrollbar-track {
              box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.3);
            }
            &::-webkit-scrollbar-thumb {
              background-color: ${colors.darkGreen};
              border-radius: 5px;
              border: 1px solid ${colors.darkGreen};
            }
          }
        }
      }
      .base-flex {
        /* background-color: gray; */
        width: 100%;
        margin-top: 2%;
        /* margin-left: -3%; */
        display: flex;
        gap: 2%;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: ${colors.white};

        .line {
          width: 1px;
          align-self: flex-start;
          height: 40px;
          background: ${colors.darkGreen2};
        }
        h4 {
          color: ${colors.white};
          font-weight: 700;
          font-size: 20px;
          line-height: 0px;
        }
        p {
          color: ${colors.textGrey2};
          line-height: 0px;
        }
        .more {
          align-self: flex-end;
        }
      }
    }
  }
  .inp {
    width: 31.3%;
    /* width: 520px; */
    overflow-x: scroll;
    margin: auto;
    margin-top: 2%;
    border-radius: 12px;
    padding: 1% 0.5%;
    background-color: ${colors.darkGreen};
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${colors.white};

    .bord {
      width: 1.5px;
      height: 26px;

      background: ${colors.darkGreen2};
    }
    .skill-cont {
      display: flex;
      gap: 2%;
      .skill {
        padding: 2%;
        border: 1px solid ${colors.darkGreen2};
        background: transparent;
        color: ${colors.white};
        width: fit-content;
        white-space: nowrap;
        font-size: 14px;
        border: 1px solid #285e6a;
        border-radius: 24px;
      }
    }
    input {
      width: 96%;

      outline: none;
      border: none;
      padding: 3% 2%;
      border-radius: 16px;
      background-color: ${colors.darkGreen};
      &::placeholder {
        padding: 2%;
        color: ${colors.textGrey3};
      }
      color: ${colors.white};
    }
  }
  .line {
    background-color: ${colors.darkGreen};
    margin: 2% 0;
    width: 100%;
    height: 2px;
  }
  #soc_card {
    min-height: 7rem;
  }
  #hed {
    text-align: center;
    font-weight: 600;
    font-size: 24px;
    color: ${colors.textGrey4};
  }
  #first {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }

  .rest {
    width: 32%;
    margin: auto;
    /* overflow-x: hidden; */
    #sliderT {
      font-weight: 700;
      font-size: 18px;
    }
    .extra {
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${colors.white};
      p:nth-child(2) {
        /* background-color: red; */
        margin-top: 1.3rem;
      }
    }
    h3 {
      font-weight: 700;
      color: ${colors.white};
      text-align: center;
      font-size: 24px;
    }
    #name {
      margin-top: 12%;
    }
    #namep {
      margin-top: -0.4rem;
    }
    #textp {
      margin-top: -0.1rem;
    }
    .gallery {
      /* background-color: pink; */
      .add_ {
        color: #fff;
      }
      .grid-3 {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 1%;
        justify-content: center;
        .img_card {
          margin-bottom: 2%;
          /* width: 173px; */
          /* width: 40%; */
          /* height: 138px; */
          // border: 1px solid ${colors.lightGreen};
          border-radius: 4px;
          img {
            width: 100%;
            height: 100%;
            /* width: 173px;
            height: 138px; */
            border-radius: 4px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 600px) {
    padding: 5% 0;
    /* margin-bottom: 20%; */
    #hed {
      font-size: 16px;
    }
    .top {
      display: flex;
      flex-direction: column;
      width: 91%;
      /* background-color: red; */
      .left {
        display: flex;
        margin-left: 0;
        width: 81%;
        align-self: center;
        /* background-color: yellow; */
        flex-direction: column;
        justify-content: space-between;
        .avi {
          width: 83%;
          div:nth-child(1) {
            width: 112;
            height: 112;
            img {
              width: 51;
              height: 46;
            }
          }
          div:nth-child(2) {
            right: 33%;
            display: ${(props) => (props.display ? "block" : "none")};
          }
        }
        .dots {
          display: none;
        }
        .title {
          width: 100%;
          text-align: center;

          h4 {
            font-size: 18px;
            line-height: 8px;
          }
          .base {
            justify-content: center;
            gap: 1%;
          }
        }
      }
      .right {
        width: 100%;

        .base-flex {
          /* background-color: gray; */
          width: 85%;
          margin: auto;
          margin-top: 5%;
          .lft,
          .rht {
            width: 38%;
          }
          .more {
            display: none;
          }
          h4 {
            font-size: 16px;
          }
          p {
            font-size: 12px;
          }
          #btnn {
            padding: 4% 8px;
          }
          button {
            padding: 5% 15px;
          }
        }
        #mt_cont {
          /* background-color: pink; */
          margin-top: 5%;

          .speech {
            /* width: 22.2rem; */
            width: 96%;
          }
        }
        .cont {
          margin-top: 6%;
          .quote1 {
            top: -0.6rem;
            left: 12%;
          }
          .quote2 {
            right: 10%;
          }
          .speech {
            width: 100%;
            border: 1.1px solid transparent;
          }
        }
      }
    }
    .inp {
      /* width: 328px; */
      /* width: 20.5rem; */
      width: 80%;
      height: 44px;
      overflow-x: scroll;
      margin-top: 5%;
      margin-bottom: 5%;
      margin-left: 5%;
      margin-right: 0;

      border-radius: 12px;
      padding: 0 4%;
      input {
        border-radius: 12px;
      }
      font-size: 12px;
    }
    #soc_card {
      min-height: 6rem;
    }
    .rest {
      width: 89%;
      #sliderT {
        font-weight: 600;
        font-size: 14px;
      }
      h3 {
        font-size: 16px;
      }
      .gallery {
        .add_ {
        color: #fff;
        }
        /* background-color: pink; */
        .grid-3 {
          display: grid;
          grid-template-columns: auto auto;
          grid-gap: 1%;

          .img_card {
            /* width: 171px;
            height: 136px; */
            // border: 1px solid ${colors.lightGreen};
            border-radius: 4px;
            img {
              width: 100%;
              height: 100%;
              border-radius: 4px;
            }
          }
        }
      }
    }
    .line {
      height: 2px;
    }
  }
`;
