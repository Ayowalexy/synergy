import React from 'react';
import Add from "../../assets/svgs/others/box__.svg";
import Plus from "../../assets/svgs/others/add_white.svg";
import PayStack from "../../assets/svgs/others/paystack.svg";
import Edit from "../../assets/svgs/others/edit_.svg";
import Cap_ from "../../assets/svgs/others/cap_.svg";
import Badge from "../../assets/svgs/others/badge.svg";
import Ultiva from "../../assets/svgs/others/ultiva.svg";
import Link from "../../assets/svgs/others/link.svg";
import Img_ from "../../assets/svgs/others/img_.svg";



const MobileCredentials = () => {
    return (
        <>
         <div className="box_">
          <div className="header_box">
            <div className="box_content">
              <div>
                <img src={Add} />
              </div>
              <div>Experience</div>
            </div>
            <div>
              <img src={Plus} />
            </div>
          </div>
          <div className="box_body">
            <div className="pay">
              <img height="48px" width="44px" src={PayStack} />
              <div>
                <div className="p_1">Junior Product Analyst</div>
                <div className="p_2">Paystack</div>
                <div className="p_3">May 2021 - Jan. 2022</div>
              </div>
            </div>
            <div>
              <img src={Edit} />
            </div>
          </div>
          <div className="box_body">
            <div className="pay">
              <img height="48px" width="44px" src={PayStack} />
              <div>
                <div className="p_1">Junior Product Analyst</div>
                <div className="p_2">Paystack</div>
                <div className="p_3">May 2021 - Jan. 2022</div>
              </div>
            </div>
            <div>
              <img src={Edit} />
            </div>
          </div>
        </div>
        <div className="box_">
          <div className="header_box">
            <div className="box_content">
              <div>
                <img src={Cap_} />
              </div>
              <div>Education</div>
            </div>
            <div>
              <img src={Plus} />
            </div>
          </div>
          <div className="box_body">
            <div className="pay">
              <img height="48px" width="44px" src={Img_} />
              <div>
                <div className="p_1">B.Sc Microbiology</div>
                <div className="p_2">Bells University Of Technology, Ogun</div>
                <div className="p_3">2017-2021</div>
              </div>
            </div>
            <div>
              <img src={Edit} />
            </div>
          </div>
        </div>
        <div className="box_">
          <div className="header_box">
            <div className="box_content">
              <div>
                <img src={Badge} />
              </div>
              <div>Certifications</div>
            </div>
            <div>
              <img src={Plus} />
            </div>
          </div>
          <div className="box_body">
            <div className="pay">
              <img height="48px" width="44px" src={Ultiva} />
              <div>
                <div className="p_1">Product Management</div>
                <div className="p_2">Utiva, Lagos</div>
                <div className="p_3">January 2022</div>
              </div>
            </div>
            <div>
              <img src={Edit} />
            </div>
          </div>
        </div>
        <div className="box_">
          <div className="header_box">
            <div className="box_content">
              <div>
                <img src={Link} />
              </div>
              <div>My Links</div>
            </div>
            <div>
              <img src={Plus} />
            </div>
          </div>
          <div className="box_body">
            {["Add Resume", "Add Portfolio", "Add Twitter"].map(
              (element, idx) => (
                <div className="add_" key={idx}>
                  {element}
                </div>
              )
            )}
          </div>
        </div>
        <div className="box__" />
        </>
    )
}

export default MobileCredentials