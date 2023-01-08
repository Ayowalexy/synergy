import styled from "styled-components/macro";
import { colors, formColors } from "../colors";
interface Iinput {
  border?: string;
  filled?: boolean;
}
export const Input = styled.input<Iinput>`
  border: ${(props) =>
    props.border ? props.border : `1px solid ${formColors.lightPink}`};
  /* width: 186px; */
  width: ${(props) => (props.width ? props.width : "186px")};
  height: 44px;
  border-radius: 4px;
  background: ${(props) =>
    props.filled ? formColors.lightPink : colors.white};
  padding: 0 2%;
  color: ${colors.shadeTeal};
  &:focus {
    outline: 1px solid ${colors.lightOrange};
    background-color: ${formColors.lightPink2};
  }
`;

export const InputContainer = styled.div<Iinput>`
  position: relative;
  width: 100%;
  border-radius: 4px;
  /* border: 1px solid ${formColors.lightPink}; */
  display: flex;
  height: 44px;
  border: ${(props) => (props.border ? props.border : "none")};
`;

export const InputIcon = styled.div`
  position: absolute;
  right: 3%;
  bottom: 3%;
  cursor: pointer;
`;
