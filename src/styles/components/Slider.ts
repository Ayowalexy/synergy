import styled from "styled-components/macro";
import { colors } from "../colors";
interface ISlider {
  active?: string;
  green?: string;
}
export const Slider = {
  Container: styled.div`
    display: flex;
    color: ${colors.white};
    margin: 4% 0%;

    cursor: pointer;
  `,
  Star: styled.div<ISlider>`
    text-align: center;
    border-bottom: 2px solid
      ${(props) => (props.active ? props.active : colors.lightGreen)};
    width: 50%;
    .star {
      margin-top: 21%;
    }
    img {
      margin-top: 31%;
      margin-left: -38%;
    }
    .title {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 15%;
      margin: auto;
      color: ${(props) => (props.active ? props.active : colors.white)};
    }
  `,
  Hot: styled.div<ISlider>`
    text-align: center;
    border-bottom: 2px solid
      ${(props) => (props.green ? props.green : colors.fadeGreen)};
    width: 50%;
    .hot {
      margin-top: 21%;
    }
    .title {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 12%;
      margin: auto;
      color: ${(props) => (props.green ? props.green : colors.white)};
    }
  `,
};
