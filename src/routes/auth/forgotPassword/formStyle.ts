import styled from "styled-components/macro";
import { colors } from "../../../styles/colors";
import { FormContainer } from "../signup/formStyle";

export const SigninFormContainer = styled(FormContainer)`
  .base {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      justify-content: left;
      align-items: center;
    }
    .right {
      /* background-color: pink; */
      display: flex;
      justify-content: right;
      font-size: 14px;
      color: ${colors.orange};
      padding: 2% 0;
      font-weight: 600;
    }
    .last {
      margin-top: 5%;
    }
    form {
      margin-top: 6%;
    }
  }
  @media only screen and (max-width: 600px) {
    padding-bottom: 15.5rem;
    p {
      font-size: 12px;
    }
    form {
      margin-top: 6%;
    }
  }
`;
