import React from "react";
import { Container } from "./style";
import Pfp from "../../../../assets/pngs/home/pfp_xs.png";
import Pfp_xs from "../../../../assets/svgs/others/pfp_xs.svg";
import Add from "../../../../assets/svgs/others/add_.svg";
import Save_xs from "../../../../assets/svgs/others/save-xs.svg";
import Settings_xs from "../../../../assets/svgs/others/settings_xs.svg";
import Sos_xs from "../../../../assets/svgs/others/sos_xs.svg";
import Flight_xs from "../../../../assets/svgs/others/flight_xs.svg";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

interface Props {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}
export default function ProfilePopup({ onClick }: Props) {
  return (
    <Container>
      <div className="close" onClick={onClick}>
        <IoMdClose color="white" fontSize={20} />
      </div>
      <div className="top">
        <div className="pfp">
          <Link to="/profile">
            <img src={Pfp} alt="profile" width={64} />
          </Link>
        </div>
        <div className="title">
          <h4>Tosin Jegede</h4>
          <p>Product Manager</p>
        </div>
        <div className="fol">
          <div>
            <h4>2K</h4>
            <p>Followers</p>
          </div>
          <div className="border"></div>
          <div>
            <h4>1.5k</h4>
            <p>Following</p>
          </div>
        </div>
      </div>
      <div className="rest">
        <div className="list">
          <div>
            <img src={Pfp_xs} alt="profile" width={15} />
          </div>
          <Link to="/profile">
            <div>My Profile</div>
          </Link>
        </div>
        <div className="list">
          <div>
            <img src={Save_xs} alt="profile" width={15} />
          </div>
          <div>Bookmarks</div>
        </div>
        <div className="list" id="border">
          <div>
            <img src={Settings_xs} alt="profile" width={15} />
          </div>
          <div>Settings</div>
        </div>
        <div className="list" id="border">
          <div>
            <img src={Sos_xs} alt="profile" width={15} />
          </div>
          <div>SOS!</div>
        </div>
        <div className="list" >
          <div>
            <img src={Flight_xs} alt="profile" width={15} />
          </div>
          <div>About Synergy</div>
        </div>
      </div>
    </Container>
  );
}
