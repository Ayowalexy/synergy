import styled from "styled-components/macro";
import { colors } from "../../../styles/colors";
import { MidCardRegular } from "../../../styles/components/MidCardRegular";
import { HeaderContainer } from "../../header/style";

export const PostCardContainer = styled.div`
  font-family: "Montserrat", sans-serif;
  width: 100%;

  .name {
    margin-left: 0px;
  }
  .time {
    color: #878787;
    font-size: 14px
  }
  background-color: ${colors.darkGreen};
  border-radius: 16px;
  margin-top: 3%;

  padding-bottom: 1.1%;
  h4 {
    color: ${colors.white};
    margin-left: 3%;
  }
  h5 {
    color: ${colors.orange};
    /* margin-left: 3%; */
    text-align: center;
  }
  a {
    text-decoration: none;
    color: ${colors.orange};
    margin-left: 3%;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    /* margin-bottom: 10%; */
  }
`;

export const InputContainer = styled(HeaderContainer)`
  background-color: ${colors.shadeTeal};
  height: 54px;
  width: 92.5%;
  margin: auto;
  margin-top: 2%;
  margin-bottom: 2%;
  .input-container {
    align-items: center;
    gap: 2%;
    input {
      margin-top: 0%;
      background-color: ${colors.shadeTeal};
      font-size: 16px;
    }
    div:nth-child(2) {
      -webkit-flex-basis: 85%;
      -ms-flex-preferred-size: 85%;
      flex-basis: 90%;
    }
  }
  @media only screen and (max-width: 600px) {
    display: block;
    .input-container {
      /* background-color: yellow; */
      align-items: center;
      justify-content: baseline;
      input,
      .avi {
        margin-top: 4%;
      }

      img {
        margin-top: 5%;

        width: 20px;
      }
    }
    .action-icons {
      display: none;
    }
  }
`;

export const SmInputContainer = styled(InputContainer)`
  background-color: ${colors.shadeTeal};
  width: 92.5%;
  height: 100%;
  border-radius: 12px;
  margin: auto;
  margin-top: 3%;
  .input-container {
    /* background-color: yellow; */
    align-items: center;
    justify-content: baseline;
    padding-bottom: 3%;
    input,
    .avi {
      margin-top: 4%;
      font-size: smaller;
    }

    img {
      margin-top: 5%;

      width: 25px;
    }
  }
  .icons {
    border-top: 2px solid #033945;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3% 2%;
    .left {
      display: flex;
      justify-content: left;
      align-items: center;
      gap: 5%;
      width: 100%;
    }
    .post {
      color: ${colors.orange};
      font-size: smaller;
      font-weight: 600;
    }
  }
`;

export const CommentContainer = styled(MidCardRegular)`
  width: 94%;
  margin: auto;
  border: 1px solid ${colors.textGreen};
  border-radius: 12px;
  margin-bottom: 4%;
  .sub_text {
    padding-top: 2px;
  }
  .text {
    width: 95%
  }
`;
