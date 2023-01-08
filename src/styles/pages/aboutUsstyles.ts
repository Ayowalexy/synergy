import styled from "styled-components/macro";
import { colors } from "../colors";
import { AddFriendStyles } from "./AddFriendStyles";
import Img from "../../assets/pngs/home/hug.png";
import Img_ from "../../assets/pngs/home/HUG_2.png";

import BgImage from "../../assets/pngs/others/BG_Image.png";
import MBgImage from "../../assets/pngs/others/Mobile.png";
import M_2 from "../../assets/pngs/others/im.png";
import Un from "../../assets/pngs/others/un.png";

export const AboutStyles = styled.div`
  ._social_media {
    display: flex;
    margin-top: 30px;
    img {
      width: 24px;
      height: 24px;
    }
  }

  ._year {
    color: rgba(135, 135, 135, 1);
    font-size: 14px;
    font-weight: 400;
    background-color: #012b37;
    padding: 20px 0px;
  }

  .about_footer {
    display: flex;
    justify-content: space-between;
    color: #fff;
    width: 80%;
    margin-top: 20px;
  }

  ._about_section {
    background: #012b37;
    height: 400px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom: 1px solid #033945;
  }

  ._number {
    font-weight: 400;
    font-size: 16px;
  }
  ._socials {
    height: 400px;
    background-color: #00212d;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20%;
    ._socials_icons {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      img {
        width: 55px;
        height: 47px;
      }
      ._flex {
        color: #fff;
        text-align: center;
        ._number {
          font-weight: 600;
          font-size: 16px;
        }
        ._title {
          font-weight: 400;
          font-size: 12px;
          color: rgba(204, 213, 215, 1);
        }
      }

      ._flex_ {
        display: flex;
        margin-bottom: 30px;
        width: 100px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }

  ._our_team {
    display: flex;
    margin-top: 30px;
    width: 100%;
    jusitify-content: center;
  }

  ._sponsor {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #012b37;

    color: #fff;
    height: 178px;
    ._our_sponsor {
      font-weight: 600;
      font-size: 16px;
    }
    img {
      width: 47px;
      height: 47px;
      border-radius: 100%;
      margin-left: 10px;
    }
    ._sponsor_container {
      display: flex;
      margin-top: 20px;
    }
  }

  ._element {
    display: flex;
    width: 130px;
    text-align: center;
    margin-bottom: 50px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ._name {
      color: rgba(239, 239, 239, 1);
      font-size: 14px;
      font-weight: 600;
      padding-top: 10px;
    }
    ._title {
      color: rgba(51, 202, 95, 1);
      font-size: 12px;
      font-weight: 200;
    }
  }

  ._box {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    margin-top: 40px;
    img {
      width: 118px;
      height: 118px;
    }
  }
  ._container {
    width: 100%;
    height: 153px;
    background-color: #00212d;
    background-image: linear-gradient(
        180deg,
        rgba(51, 202, 95, 0.6) 0%,
        rgba(51, 202, 95, 0.09) 100%
      ),
      url(${Un});
    background-size: cover;
    padding-top: 30px;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    tex-align: center;
    color: #fff;

    ._sub_text {
      font-size: 16px;
      font-weight: 300;
      text-align: center;
    }
  }

  ._team {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #00212d;
  }

  ._our_mission {
    font-size: 25px;
    font-weight: 700;
    padding-top: 10px;
    color: #fff;
  }

  ._our_story {
    background-color: #00212d;
    width: 100%;
    height: 480px;
    background-image: url(${M_2});
    justify-content: center;
    align-items: center;
    padding-top: 70px;
    background-size: cover;
    color: #fff;
    text-align: center;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }

  ._span {
    width: 80%;
    font-size: 16px;
    line-height: 20px;
    font-weight: 200;
    text-align: center;
    padding-top: 30px;
    color: rgba(239, 239, 239, 1);
  }

  ._inspiration {
    width: 100%;
    height: 172px;
    background-image: url(${M_2});
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-size: contain;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    div:nth-of-type(1) {
      width: 80%;
      text-align: center;
      font-weight: 500;
      font-size: 17px;
      color: rgba(51, 202, 95, 1);
    }
    div:nth-of-type(2) {
      color: rgba(135, 135, 135, 1);
      font-weight: 300;
      font-size: 17px;
    }
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 503px;
    color: #fff;
    object-fit: fill;
    background-color: #00212d;

    background-image: linear-gradient(
        180deg,
        rgba(51, 202, 95, 0.6) 0%,
        rgba(51, 202, 95, 0.09) 100%
      ),
      url(${Img_});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    width: 100%;
    flex-direction: column;

    .sub_text {
      font-size: 24px;
      width: 500px;
      text-align: center;
    }

    span {
      font-size: 30px;
      font-weight: 300;
    }
  }
  .our_story {
    background-color: #00212d;
    height: 700px;
    width: 100%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url(${BgImage});
    justify-content: center;
    align-items: center;
    // background-repeat: no-repeat;
  }
  .our_mission {
    font-size: 48px;
    font-weight: 700;
    padding-bottom: 30px;
  }

  .span {
    width: 600px;
    padding-bottom: 40px;
    font-weight: 300;
    font-size: 24px;
    text-align: center;
    span {
      color: rgba(51, 202, 95, 1);
    }
  }
  .inspiration {
    width: 100%;
    height: 428px;
    display: flex;
    background-image: url(${BgImage});
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    flex-direction: column;
    text-align: center;
    div:nth-of-type(1) {
      width: 750px;
      text-align: center;
      font-weight: 700;
      font-size: 25px;
      color: rgba(51, 202, 95, 1);
    }
    div:nth-of-type(2) {
      color: rgba(135, 135, 135, 1);
      font-weight: 300;
      font-size: 25px;
    }
  }

  .team {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #00212d;
  }

  .box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .img {
      width: 200px;
      height: 200px;
      border: 2px solid #fb5046;
      border-radius: 100%;
    }
    .element {
      display: flex;
      width: 250px;
      margin-bottom: 50px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .name {
        color: rgba(239, 239, 239, 1);
        font-size: 18px;
        font-weight: 600;
        padding-top: 10px;
      }
      .title {
        color: rgba(51, 202, 95, 1);
        font-size: 16px;
        font-weight: 200;
      }
    }
  }

  .team_box {
    width: 80%;
  }

  .sponsor {
    width: 100%;
    background-color: #012b37;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    color: #fff;
    height: 528px;
    .our_sponsor {
      font-weight: 600;
      font-size: 48px;
    }
  }
  .sponsor_box {
    width: 106px;
    height: 106px;
    border-radius: 100%;
  }

  .sponsor_container {
    display: flex;
    justify-content: space-between;
    width: 60%;
    .self {
      margin-top: -70px;
    }
  }

  .socials {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 528px;
  }

  .socials {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00212d;
    .socials_icons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 80%;
      .flex {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        margin-left: 10px;
        flex-direction: column;
        .number {
          font-weight: 700;
          font-size: 40px;
          color: #fff;
        }
        .title {
          color: rgba(204, 213, 215, 1);
          font-size: 16px;
          font-weigt: 300;
        }
      }
    }
    .flex_ {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  input {
    width: 200px;
    height: 33px;
    padding-left: 15px;
    background-color: #d9d9d9;
    font-weight: 300;
    margin-top: 15px;
    border: none;
    outline: none;
  }
  button {
    background: linear-gradient(91.32deg, #fe9730 46.45%, #fb5046 99.37%);
    height: 35px;
    width: 100px;
    border: none;
    outline: none;
    &:focus {
      outline: none;
    }
  }

  ._links {
    color: rgba(135, 135, 135, 1);
    font-size: 12px;
    margin-top: 10px;
  }
  ._header {
    color: rgba(239, 239, 239, 1);
    font-size: 14px;
    font-weight: 500;
  }

  .footer {
    width: 100%;
    background-color: #012b37;
    display: flex;
    height: 528px;
    justify-content: center;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .footer_ {
      height: 528px;
      width: 80%;
      background-color: #012b37;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .links {
      color: rgba(135, 135, 135, 1);
      font-size: 15px;
      margin-top: 20px;
    }
    .header {
      color: rgba(239, 239, 239, 1);
      font-size: 20px;
      font-weight: 500;
    }
    .social_media {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 200px;
      margin: 6px 0px;
    }

    .year {
      color: rgba(135, 135, 135, 1);
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 100px;
      background-color: #012b37;
    }
  }

  .our_team {
    font-size: 48px;
    font-weight: 700;
    color: #fff;
    text-align: center;
    padding: 60px 0px;
    display: flex;
    width: 100%;
  }
`;
