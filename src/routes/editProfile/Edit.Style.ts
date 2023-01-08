import styled from "styled-components/macro";
import { colors } from "../../styles/colors";

export const EditContainer = styled.div`
    background-color: ${colors.shadeTeal};
    width: 100%;
    .edit {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: #FFFFFF;
    }
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%        
    }
    .box {
        width: 45%;
        background-color: ${colors.darkGreen};
        border-radius: 12px;
        padding: 30px;
        margin: 100px 0px 150px 0px;

       
    }
    .header {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        padding-bottom: 25px;
        border-bottom: 1px solid ${colors.darkGreen2};
    }

    .personal {
        width: 536px;
        // height: 360px;
        left: 0px;
        top: 0px;
        background: #00212D;
        border-radius: 16px;
        margin-top: 10px;
    }

    .flex {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: #3DD368;
        font-size: 14px;
        padding-bottom: 10px;
        border-bottom: 1px solid #033945;
    }
    .parent {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .personal {
            padding: 20px;
            .flex {
                padding-left: 10px;
            }
        }
    }

    .add_ {
        padding: 6px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        margin-right: 10px;
        line-height: 17px;
        color: #ED7832;
        border: 1px solid #ED7832;
        border-radius: 40px;

    }
    .card {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        font-weight: 500;
        font-family: 'Montserrat';
        font-style: normal;
        padding: 20px 0px 20px 0px;

        border-bottom: 1px solid #033945;
        .p_1 {
            font-size: 18px;
            line-height: 20px;
            color: #FFFFFF;

        }
        .p_2 {
           
            font-size: 16px;
            line-height: 20px;
            color: #C5CED0;
        }
        .p_3 {
            font-weight: 400;
            font-size: 14px;
            line-height: 15px;
            color: #878787;
        }
    }

   
  @media only screen and (max-width: 600px) {
    
  }
`;
