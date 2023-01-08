import styled from "styled-components/macro";
import { colors } from "../../styles/colors";

export const CarouselStyle = styled.div`
  width: 100%;
  margin: auto;
  .container {
    border-radius: 24px;
  }
  .text h1 {
    font-weight: 700;
    font-size: 38px;

    color: ${colors.white};
    padding: 1%;
  }
  .text_change {
    display: flex;
    /* background-color: yellow; */
    justify-content: center;
    font-weight: 700;
    font-size: 38px;
    gap: 2%;
    color: ${colors.textGreen};
    margin-top: -1%;
    div:nth-child(2) {
      /* background-color: yellow; */
      /* width: 14rem; */
    }
    .slide {
      /* background: rgba(74, 167, 122, 0.24); */
      border-radius: 10.6616px;
      padding: 0 0.5%;
      width: fit-content;
      animation: moveToRighttt 1.9s ease-in-out;
      animation-delay: 10ms;

      animation-iteration-count: infinite;
    }

    @keyframes moveToRight {
      0% {
        transform: translateY(0px);
        opacity: 1;
      }
      100% {
        transform: translateY(-10px);
        opacity: 0;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .text h1 {
      margin-bottom: 3%;
      font-size: 29px;
    }
    .text_change {
      font-size: 31px;
      margin-top: 8%;
      /* flex-direction: column; */
      div:nth-child(2) {
        /* width: 14rem; */
        /* width: 100%; */
        display: flex;
        justify-content: center;
      }
    }
    div:nth-child(2) {
      /* background-color: yellow; */
      /* width: 18rem; */
      display: flex;
      justify-content: center;
      /* margin-left: 6%; */
    }
  }
`;
