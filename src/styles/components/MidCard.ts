import styled from "styled-components/macro";
import Hug from "../../assets/pngs/home/bg_.png";
import { colors } from "../colors";
export const MidCard = styled.div`
  font-family: "Montserrat", sans-serif;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding-top: 23px;
  flex-direction: column;
  height: 164px;
  background-image: linear-gradient(
      180deg,
      rgba(51, 202, 95, 0.6) 0%,
      rgba(51, 202, 95, 0.09) 100%
    ),
    url(${Hug});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 16px;
  /* margin-top: %; */
  padding-bottom: 1%;

  .cancel {
    position: absolute;
    left: 66%;
    top: 9%;
    cursor: pointer;
  }
  h1 {
    color: ${colors.white};
    font-weight: 700;
    font-size: 28px;
    letter-spacing: 0.07px;
    text-align: center;
    line-height: 19px;
    margin-top: 4%;
  }
  p {
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    width: 92%;
    margin: auto;
    line-height: 24px;
    color: ${colors.white};
  }
  div {
    width: 60%;
    /* background-color: pink; */
    margin: 2% auto;

    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 600px) {
    padding: 2% 0;
    border-radius: 12px;
    margin-top: 5%;
    height: 100%;
    width: 100%;

    .cancel {
      position: absolute;
      left: 84%;
      top: 2%;
      width: 21%;
    }
    h1 {
      font-size: 1rem;
      line-height: 13px;
    }
    /* .btn {
      width: 80%;
      margin: auto;
    } */
    p {
      font-size: 0.8rem;
      /* line-height: normal; */
      width: 96%;
      font-weight: 400;
    }
  }
`;
