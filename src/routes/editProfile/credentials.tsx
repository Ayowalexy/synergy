import React, { useState } from "react";
import { EditContainer } from "./Edit.Style";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { Slider } from "../../styles/components/Slider";
import { colors } from "../../styles/colors";
import Add from "../../assets/svgs/others/box__.svg";
import PayStack from "../../assets/svgs/others/paystack.svg";
import Plus from "../../assets/svgs/others/plus_.svg";
import styled from "styled-components/macro";
import Cap_ from "../../assets/svgs/others/cap_.svg";
import Img_ from "../../assets/svgs/others/img_.svg";
import Badge from "../../assets/svgs/others/badge.svg";
import Ultiva from "../../assets/svgs/others/ultiva.svg";
import Link from "../../assets/svgs/others/link.svg";
import { BtnMidContain } from "../../styles/components/Button";

const Credentials = () => {
  const Flex = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #033945;
    padding-bottom: 15px;
    div {
      padding-left: 10px;
      color: #3dd368;
    }
  `;

  const IFlex = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 15px;
    div {
      padding-left: 10px;
      color: #3dd368;
    }
  `;

  return (
    <div className="parent">
      <div className="personal">
        <Flex>
          <img src={Add} />
          <div>Experience</div>
        </Flex>

        {[1, 2, 3].map((_, i) => (
          <div key={i} className="card">
            <div>
              <div className="p_1">Junior Product Analyst</div>
              <div className="p_2">Paystack</div>
              <div className="p_3">May 2021 - January 2022</div>
            </div>
            <div>
              <img src={PayStack} />
            </div>
          </div>
        ))}
        <div style={{ paddingTop: 10 }}>
          <IFlex>
            <img src={Plus} />
            <div style={{ color: "#ED7832" }}>Add experience</div>
          </IFlex>
        </div>
      </div>

      <div className="personal">
        <Flex>
          <img src={Cap_} />
          <div>Education</div>
        </Flex>
        <div className="card">
          <div>
            <div className="p_1">B.Sc Microbiology</div>
            <div className="p_2">Bells University of Technology, Ota, Ogun</div>
            <div className="p_3">2017-2021</div>
          </div>
          <div>
            <img src={Img_} />
          </div>
        </div>
        <div style={{ paddingTop: 10 }}>
          <IFlex>
            <img src={Plus} />
            <div style={{ color: "#ED7832" }}>Add education</div>
          </IFlex>
        </div>
      </div>

      <div className="personal">
        <Flex>
          <img src={Badge} />
          <div>Certification</div>
        </Flex>
        <div className="card">
          <div>
            <div className="p_1">Product Management</div>
            <div className="p_2">Utiva, Lagos</div>
            <div className="p_3">January 2022</div>
          </div>
          <div>
            <img src={Ultiva} />
          </div>
        </div>
        <div style={{ paddingTop: 10 }}>
          <IFlex>
            <img src={Plus} />
            <div style={{ color: "#ED7832" }}>Add certification</div>
          </IFlex>
        </div>
      </div>

      <div className="personal">
        <Flex>
          <img src={Link} />
          <div>My Links</div>
        </Flex>

        <div style={{ paddingTop: 10 }}>
          <IFlex>
            {["Add Resume", "Add Portfolio", "Add Twitter"].map(
              (element, idx) => (
                <div className="add_" key={idx}>
                  {element}
                </div>
              )
            )}
          </IFlex>
        </div>
      </div>
    </div>
  );
};

export default Credentials;
