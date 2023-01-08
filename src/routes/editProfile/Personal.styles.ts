import styled from "styled-components";
import { colors } from "../../styles/colors";


export const PersonalStyles = styled.div`
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        .form {
            flex-basis: 60%;
        }
        .profile {
            flex-basis: 30%;
            display: flex;
            color: #fff;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            align-self: flex-start;

        }
        .text {
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            display: flex;
            align-items: center;
            margin-top: 20px;
            text-transform: capitalize;
            color: ${colors.textGrey2};
        }

        textarea {
            background: #033945;
            border: 1px solid #033945;
            border-radius: 4px;
            height: 155px;
            width: 96%;
            font-family: Montserrat;
            padding: 15px;
        }

        .card_ {
            display: flex;
            justify-content: space-between;
            align-items: center;
            div {
                flex-basis: 27%
            }
        }
        .box_ {
            display: flex;
            gap: 9px;
            margin-bottom: 10px;
        }
    }
`