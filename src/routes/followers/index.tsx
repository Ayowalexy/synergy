import React, { useState, useEffect } from "react";
import Navbar from "../../component/navbar";
import styled from "styled-components";
import { IoMdClose, IoIosArrowRoundBack } from "react-icons/io";
import Img_ from "../../assets/pngs/others/img1_.png";
// import { Slider } from "../styles/components/Slider";
import { Slider } from "../../../src/styles/components/Slider";
import { AiOutlineStar, AiFillFire } from "react-icons/ai";
import { colors } from "../../../src/styles/colors";
import { useLocation, useParams } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

type cardProps = {
  name: string;
  title: string;
  following: boolean;
  tag: any;
  img: string | undefined;
};

const Followers = () => {
  const Card = styled.div`
    .text___ {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
    }
    background-color: #00212d;
    width: 100%;
    height: 130vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    .container {
      width: 540px;
      background: #012b37;
      opacity: 0.9;
      box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07),
        0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0531481),
        0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0425185),
        0px 20px 13px rgba(0, 0, 0, 0.035),
        0px 8.14815px 6.51852px rgba(0, 0, 0, 0.0274815),
        0px 1.85185px 3.14815px rgba(0, 0, 0, 0.0168519);
      border-radius: 12px;
      padding: 20px;
      margin-top: 200px;
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #033945;
        padding-bottom: 20px;
        color: #fff;
        .text {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 32px;
          color: #ffffff;
        }
      }

      .cards {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .card_ {
        width: 100%;
        height: 70px;
        border-bottom: 1px solid #033945;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        img {
          border: 1.5px solid #fe9730;
          border-radius: 50%;
        }
        .text_ {
          display: flex;
          justify-content: flex-start;
          gap: 15px;
          align-items: center;
          .t_1 {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 18px;
            color: #ffffff;
          }
          .t_2 {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            color: #3dd368;
          }
        }
        .box {
          width: 86px;
          height: 28px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(91.32deg, #fe9730 46.45%, #fb5046 99.37%);
          border-radius: 4px;
          div {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: 15px;
            color: #041f29;
          }
        }
        .box_ {
          width: 86px;
          height: 28px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1.5px solid #fe9730;
          border-radius: 4px;
          fill: none;
          border-width: 1.5px;
          div {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: 15px;
            color: #fff;
          }
        }
      }
    }
    input {
      width: 90%;
      height: 32px;
      left: 20px;
      top: 130px;
      background-color: #00212d;
      border: 2px solid #033945;
      border-radius: 16px;
      padding-left: 30px;
      color: #fff;
    }
    input:focus {
      outine: none;
    }

    @media only screen and (max-width: 600px) {
      .container {
        margin-top: 0px;
      }
    }
  `;

  const [active, setActive] = useState(false);
  const params = useParams();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const matches = useMediaQuery("(max-width:600px)"); //hook to control component to render wrt viewport

  useEffect(() => {
    if (params?.type) {
      if (params?.type?.toString()?.toLowerCase() == "followers") {
        setActive(true);
      } else {
        setActive(false);
      }
    }
  }, [params?.type]);
  const Card_ = ({ name, title, following, tag, img }: cardProps) => (
    <div className="card_">
      <div className="text_">
        <img src={img} alt="img" />
        <div>
          <div className="t_1">{name}</div>
          <div className="t_2">{title}</div>
        </div>
      </div>
      <div className={following ? "box_" : "box"}>
        <div>{following ? "Following" : "Follow back"}</div>
      </div>
    </div>
  );
  return (
    <div>
      {!matches && <Navbar />}
      <Card>
        <div className="container">
          <div className="header">
            <div onClick={() => navigate('/profile')}>
              {matches ? (
                <IoIosArrowRoundBack
                  color="#fff"
                  fill="#fff"
                  stroke="#fff"
                  size={25}
                />
              ) : (
                <IoMdClose color="#fff" fill="#fff" stroke="#fff" size={25} />
              )}
            </div>
            <div className="text">Tosin Jegede</div>
            <div />
          </div>
          <Slider.Container onClick={() => setActive(!active)}>
            <Slider.Star
              active={active ? colors.primaryGreen : colors.primaryGrey}
            >
              <div className="title">
                <div className="text___">Followers</div>
              </div>
            </Slider.Star>
            <Slider.Hot
              className="hot"
              green={active ? colors.primaryGrey : colors.primaryGreen}
            >
              <div className="title">
                <div className="text___">Following</div>
              </div>
            </Slider.Hot>
          </Slider.Container>
          {matches && (
            <div>
              <div
                style={{
                  position: "absolute",
                  margin: "10px",
                }}
              >
                <FiSearch color="#fff" />
              </div>
              <input
                className="search"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                type="text"
                value={search}
                placeholder="Search"
              />
            </div>
          )}
          <div className="cards">
            {[
              {
                name: "Tobi Sanni",
                title: "Educator",
                following: true,
                tag: [],
                img: Img_,
              },
              {
                name: "Ola Joshua",
                title: "Mech. Engineer",
                following: false,
                tag: [],
                img: Img_,
              },
              {
                name: "Shalom Ijeh",
                title: "Youth Corper",
                following: true,
                tag: [],
                img: Img_,
              },
              {
                name: "Samuel Ikeh",
                title: "Brand Influencer",
                following: true,
                tag: [],
                img: Img_,
              },
              {
                name: "Nenye Amaechi",
                title: "Model",
                following: true,
                tag: [],
                img: Img_,
              },
              {
                name: "Destiny Joshua",
                title: "Unemployed",
                following: true,
                tag: [],
                img: Img_,
              },
              {
                name: "Obianuju Charis",
                title: "Aspiring Surgeon",
                following: true,
                tag: [],
                img: Img_,
              },
              {
                name: "Katrina Sanni",
                title: "Aspiring Mechanical Engr.",
                following: true,
                tag: [],
                img: Img_,
              },
              {
                name: "Katrina Sanni",
                title: "Aspiring Mechanical Engr.",
                following: true,
                tag: [],
                img: Img_,
              },
            ]
              .filter((e) =>
                e.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((element, idx) => (
                <Card_
                  key={idx}
                  tag={element.tag}
                  name={element?.name}
                  title={element.title}
                  following={element.following}
                  img={element.img}
                />
              ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Followers;
