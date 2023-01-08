import styled from "styled-components/macro";
import Bg from "../../assets/pngs/auth/bg.png";
import { colors } from "../colors";
interface Iwelcome {
  display: string;
}
export const WelcomeStyles = styled.div<Iwelcome>`
  overflow: auto;
  height: 100vh;
  background-color: ${colors.deepBlue};
  background-image: url(${Bg});
  background-size: cover;
  background-repeat: no-repeat;
  font-family: "Montserrat", sans-serif;

  .otp {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    .inputStyle {
    height: 48px;
      width: 44px !important;
      background-color: ${colors.darkGreen};
      border: 1px solid #033945;
      border-radius: 4px;
      font-weight: 700;
      color: #fff;
      font-family: "Montserrat", sans-serif;
      font-size: 16px;
      margin-left: 2rem;
    }
    .focusStyle {
      border: 1px solid #3DD368 !important;
      outline: none;
      
    }
    
  }

  .code_ {
    font-size: 17px;
    font-family: "Montserrat", sans-serif;
    color: ${colors.textGrey2};
    text-align: center;
    padding-top: 40px;
    font-weight: 500;
    span {
      color: ${colors.orange2};
      font-size: 18px;
      font-weight: 600;
    }
  }
  .nav {
    display: flex;
    padding: 2.5% 7%;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .ham {
      display: none;
    }
    .flex {
      display: flex;
      align-items: center;

      width: 20%;
      justify-content: space-between;
    }
  }
  .rest {
    margin-top: 3%;
    margin-top: 3%;
    .ill {
      width: 50%;
      margin: auto;
      display: flex;
      justify-content: center;
      /* background-color: red; */
    }
    .text {
      width: 50%;
      margin: auto;
      color: ${colors.white};
      text-align: center;
      p {
        font-size: 14px;
      }
    }
    .welcome_ {
      font-weight: 500;
      color: #CCD5D7;
     
    }
    span: {
      font-weight: 900;
    }
    
    .btn {
      width: 30%;
      margin: auto;
      margin-top: 3%;
    }
  }
  @media only screen and (max-width: 600px) {
    .img_ {
      width: 130px;
      height: 134px;
    }
    .nav {
      box-shadow: 10px 4px 2px 0px rgba(0, 0, 0, 0.75);
      padding: 4% 2%;
      .ham {
        position: absolute;
        top: 50%;
        right: 25px;
        transform: translateY(-50%);
        display: block;
        background-color: ${colors.white};
        padding: 0.5% 2%;
        border: 2px solid white;
        border-radius: 5px;
        img {
          margin-top: 38%;
        }
      }
      .flex {
        display: flex;
        flex-direction: column-reverse;

        align-items: center;
        display: block;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 0px;
        transition: height 0.5s ease-out;
        background-color: ${colors.white};

        .list {
          display: ${(props) => (props.display ? props.display : "none")};
          width: 100%;
          text-align: center;
          padding: 1.5rem 0;
          button {
            padding: 4% 36px;
            color: ${colors.black};
          }
         
        }
      }
    }
    #trans {
      height: 200px;
      transition: height 0.5s ease-out;
      box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    }
    .rest {
      margin-top: 31%;
      .text {
        width: 91%;
      }
      .btn {
        width: 90%;
        margin: auto;
        margin-top: 8%;
      }
    }
  }
  
`;


