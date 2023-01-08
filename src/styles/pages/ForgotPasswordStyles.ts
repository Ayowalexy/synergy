import styled from "styled-components/macro";
import { SignupStyles } from "./SignupStyles";

export const ForgotPasswordStyles = styled(SignupStyles)`
  .logo {
    margin-bottom: 2%;
  }
  .bigS {
    margin-top: 2%;
  }

  @media only screen and (max-width: 600px) {
    p {
      font-size: 12px;
    }
    .form-container {
      padding-bottom: 15.5rem;
      height: 100vh;
    }
    .option {
      display: block;
    }
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
`;
