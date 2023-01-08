import styled from "styled-components/macro";
import { colors } from "../colors";
interface IButtonHighlight {
  padding?: string;
  url?: string;
  border?: boolean
}
export const ButtonHighlight = styled.button<IButtonHighlight>`
  background: linear-gradient(91.32deg, #fe9730 46.45%, #fb5046 99.37%);
  border-radius: 8px;
  color: ${colors.black};
  border: none;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  padding: ${(props) => (props.padding ? props.padding : "8% 36px")};
  a {
    text-decoration: none;
    color: ${colors.black};
  }

  @media only screen and (max-width: 600px) {
    padding: 3% 14%;
    width: fit-content;
    font-size: 0.8rem;
    border-radius: 4px;
  }
`;

export const ButtonContain = styled.button`
  background: linear-gradient(
    91.32deg,
    rgba(254, 151, 48, 0.3) 29.95%,
    rgba(251, 80, 70, 0.3) 99.37%
  );
  border-radius: 4px;
  width: 100%;
  height: 44px;
  border: none;
  cursor: pointer;
`;
export const ButtonOrange = styled.button<IButtonHighlight>`
  background: linear-gradient(91.32deg, #fe9730 46.45%, #fb5046 99.37%);
  border-radius: 4px;
  width: 100%;
  height: 44px;
  border: none;
  cursor: pointer;
  span {
    margin-left: 10%;
    margin-bottom: -5%;
  }
  /* background-image: url(${(props) => (props.url ? props.url : "")});
  background-position: 10% 10%;
  background-repeat: no-repeat;
  background-size: cover; */
`;
export const ButtonOutline = styled.button`
  background: ${colors.white};
  border-radius: 4px;
  width: 100%;
  height: 44px;
  border: 1px solid ${colors.orange};
  cursor: pointer;
`;

export const BtnMidOutline = styled.button<IButtonHighlight>`
  background: transparent;
  border-radius: 4px;
  width: 100%;
  outline: none;
  padding: ${(props) => (props.padding ? props.padding : "7% 30px")};
  border: ${(props) => props.border ? '2px solid #fe9730' : 0};
  color: ${colors.white};
  a {
    text-decoration: none;
    color: ${colors.white};
  }
  cursor: pointer;
`;
export const BtnMidContain = styled.button<IButtonHighlight>`
  padding: ${(props) => (props.padding ? props.padding : "7% 30px")};
  border: none;
  width: 100%;
  background: linear-gradient(91.32deg, #fe9730 46.45%, #fb5046 99.37%);
  border-radius: 4px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: ${colors.black};
  }
`;
