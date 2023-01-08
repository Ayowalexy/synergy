import styled from "styled-components/macro";
import { colors } from "../colors";
import Bg from "../../assets/pngs/auth/bg.png";

export const SignupStyles = styled.div`
  font-family: "Montserrat", sans-serif;

  overflow: auto;
  min-height: 100vh;
  background-color: ${colors.deepBlue};
  background-image: url(${Bg});
  background-size: cover;
  background-repeat: no-repeat;

  .option {
    display: none;
  }
  .logo {
    width: 8%;
    padding: 2% 0;
    /* background-color: rebeccapurple; */
    margin: 1% auto;
  }
  .bigS {
    width: 3%;
    /* background-color: rebeccapurple; */
    margin: 1% auto;
    img {
      width: 40px;
    }
  }
  a {
    text-decoration: none;
    color: ${colors.orange};
    font-weight: 600;
  }

  @media only screen and (max-width: 600px) {
    /* padding-bottom: 13%; */

    .smtop {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 4%;
      padding-bottom: 3%;

      margin-top: 3%;
      padding-right: 2%;
      .option {
        display: block;
      }
      p {
        color: ${colors.white};
      }
      .cont {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* background-color: yellow; */

        .bigS {
          text-align: center;
          /* background-color: red; */
          width: 100%;
        }
        .logo {
          width: 100%;
          /* margin-right: 70%; */
          img {
            /* width: 70px; */
          }
        }
      }
    }
    h1 {
      font-size: 1.6rem;
    }
    p {
      font-size: 12px;
    }
    /* .logo {  
      width: 31%;
      margin-top: 13%;
      margin-bottom: 3%;
    } */
  }
`;
