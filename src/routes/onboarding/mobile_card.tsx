import React from "react";
import Profile from "../../assets/pngs/others/profile.png";

type cardProps = {
    name: string;
    title: string;
    img: any,
    followed: boolean,
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const MobileCard = ({name, title, img, followed, onClick}: cardProps) => (
    <div
    onClick={onClick}
    style={{
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20
    }}
    >
      <div
        style={{
          display: "flex",
          width: "87%",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#012B37",
          borderRadius: 12,
          padding: 10
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundImage:"linear-gradient(91.32deg, #FE9730 46.45%, #FB5046 99.37%)",
              width: '49px',
              height: '49px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%'
            }}
          >
            <img src={img} alt="Img" width="95%" height="95%" />
          </div>
          <div
            style={{
              marginLeft: 10
            }}
          >
            <div
              style={{
                fontWeight: 600,
                fontSize: 16,
                color: '#fff',
                fontFamily: 'Montserrat'
              }}
            >{name}</div>
            <div
             style={{
              fontWeight: 300,
              fontSize: 13,
              color: '#33CA5F',
              fontFamily: 'Montserrat'
            }}
            >{title}</div>
          </div>
        </div>
        <div
          style={{
            background: !followed ? "linear-gradient(91.32deg, #FE9730 46.45%, #FB5046 99.37%)" : 'transparent',
            border: followed ? `1px solid #FE9730` : '',
            borderRadius: 10,
            color: followed ? '#fff' : '#041F29',
            height: "40px",
            width: "100px",
            fontWeight: 'bold',
            fontSize: 12,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {followed ? 'Followed' : 'Follow'}
        </div>
      </div>
    </div>
)

export default MobileCard