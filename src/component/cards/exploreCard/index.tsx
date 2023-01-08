import React from "react";
import { ExploreCardContainer } from "./style";

interface Props {
  profile?: string;
  name?: string;
  status?: string;
}
export default function ExploreCard({ profile, name, status }: Props) {
  return (
    <ExploreCardContainer>
      <div className="left">
        <div className="circle">
          <img src={profile} alt="profile" />
        </div>
        <div className="text">
          <div>
            <h4>{name}</h4>
            <p>{status}</p>
          </div>
        </div>
      </div>
    </ExploreCardContainer>
  );
}
