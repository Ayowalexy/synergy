import styled from "styled-components/macro";
import { colors } from "../colors";

export const CommentThreadStyle = styled.div`
  .main-section {
    margin-top: -2%;
    .back {
      margin-top: 4%;
    }
  }
  .right-section {
    margin-top: 15%;
  }
  .hook {
    width: 1px;
    height: 15px;
    background: #3dd368;
    position: absolute;
    left: 15%;
    top: 0%;
    /* Synergy Colors/Green */

    background: #3dd368;
  }
  #hook2 {
    left: 20%;
  }
  .reply {
    margin-top: -4%;

    position: relative;
    /* background-color: black; */
    padding-top: 3%;
  }
  #reply {
    width: 91.5%;
    margin-left: 5%;
  }
  @media only screen and (max-width: 600px) {
    .hook {
      width: 1px;
      height: 12px;
    }
  }
`;

export const SmInput = styled.div`
  /* width: 428px; */
  z-index: 10;
  /* background-color: #fefefe; */
  /* background: ${colors.darkGreen}; */
  border: 1px solid ${colors.darkGreen2};
  border-radius: 24px 24px 0px 0px;
  position: fixed;
  bottom: 0%;
  left: 0%;
  right: 0%;
  .top {
    height: 79px;
    background: ${colors.darkGreen};
    border-radius: 24px 24px 0px 0px;

    display: flex;
    align-items: center;
    padding: 0 2%;
    justify-content: center;
    gap: 2%;
    .inp_cont {
      background: ${colors.shadeTeal};
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 95%;
      padding-left: 2%;
      padding-top: 2%;
      padding-bottom: 2%;
      border-radius: 12px;
    }

    div:nth-child(1) {
      /* width: 30%; */
    }
    div:nth-child(2) {
      background-color: yellow;
      display: flex;
      width: 88%;
      align-items: center;
      padding: 0 2%;
      justify-content: space-between;
      background: ${colors.shadeTeal};
      border-radius: 8px;
      padding: 1% 0;
      div:nth-child(1) {
        flex-grow: 1;

        /* background-color: red; */
        textarea {
          width: 95%;
          resize: none;
          align-self: center;
          padding: 0 1%;
          height: 1rem;
          outline: none;
          background: ${colors.shadeTeal};
          border: none;
          margin-top: 5px;
          color: ${colors.white};
        }
      }
      div:nth-child(2) {
        width: 16%;
        color: ${colors.orange};
      }
    }
    .avi {
      width: 26px;
      height: 26px;
      border-radius: 50%;
      border: 1px solid ${colors.orange};
      background-color: ${colors.orange};
    }
  }
  .btm {
    /* margin-top: 0.1%; */
    height: 37px;
    background: ${colors.darkGreen};
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 0 4%;
    gap: 4%;
    border-top: 1px solid grey;
    /* display: none; */
  }
`;

export const InputContainer = styled.div`
  background: ${colors.shadeTeal};
  border-radius: 12px;
  height: 188px;
  width: 97%;
  margin: auto;
  margin-top: 2%;
  margin-bottom: 2%;
  .top {
    padding: 1% 2%;
    display: flex;
    align-items: flex-start;
    height: 60%;
    width: 100%;
    gap: 2%;
    textarea {
      overflow: auto;
      /* background-color: yellow; */
      background: ${colors.shadeTeal};
      outline: none;
      // width: 45vw;
      color: ${colors.white};
      border: none;
      height: 9em;
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
  hr {
    opacity: 0.2;
    width: 95%;
    color: gray;
  }
  .action-icons {
    padding: 0 2%;
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 2%;
    /* width: 40%; */
    /* background-color: yellow; */
    /* margin-top: .5%; */
  }
`;
