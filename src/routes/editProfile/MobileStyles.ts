import styled from "styled-components";
import { colors } from "../../styles/colors";


export const MobileStyles = styled.div`
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        flex-direction: column;
        background: #00212D;
        .header {
            background: #012B37;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 93%;
            padding: 15px;
            color: #fff;
            .edit {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 24px;
                color: #FFFFFF;
            }
        }
        .body_ {
            width: 90%;
            background: #00212D;

        }
        .box_ {
            background: #012B37;
            border-radius: 12px;
            width: 90%;
            margin-top: 10px;
            .header_box {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 90%;
                padding: 15px;
                border-bottom: 1px solid #033945;
                padding-bottom: 15px;
                .box_content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 15px;
                    color: #3DD368;
              
                }
            }

            .box_body {
                display: flex;
                width: 90%;
                justify-content: space-between;
                align-items: center;
                color: #fff;
                padding: 15px;
                border-bottom: 1px solid #033945;
                .pay {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    gap: 15px;
                    .p_1 {
                        font-family: 'Montserrat';
                        font-style: normal;
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 18px;
                        color: #FFFFFF;

                    }
                    .p_2 {
                        font-family: 'Montserrat';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 12px;
                        line-height: 16px;
                        color: #C5CED0;

                    }
                    .p_3 {
                        font-family: 'Montserrat';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 10px;
                        line-height: 12px;
                        color: #878787;

                    }
                }
                .add_ {
                    color: #ED7832;
                    font-size: 12px;
                    border: 1px solid #ED7832;
                    border-radius: 30px;
                    padding: 7px;
                }
            }
        }

        .box__ {
            height: 200px;
            background: #00212D;
            width: 90%
        }
    }

    .m_box {
        width: 90vw;
    //    margin-right: 20px;
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
        height: 105px;
        width: 91%;
        font-family: Montserrat;
        padding: 15px;
    }
    .box_c {
        display: flex;
        gap: 15px;
        margin-bottom: 40px;
        margin-top: 15px;
    }
    .dp_ {
        width: 100%;
        display: flex;
        margin-top: 20px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 18px;
        color: #878787;
    }

    .save_btn {
        background: linear-gradient(91.32deg, #FE9730 46.45%, #FB5046 99.37%);
        border-radius: 4px;
        width: 100%;
        height: 44px;
        border: none;
        outline: none;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #041F29;
        margin-bottom: 50px;
    }
   
`