import React, { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { MobileSearchList } from "./style";
import * as lodash from "lodash";

interface Props {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}
export default function SmSearchList({ onClick }: Props) {
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState(false);

  const handleSearchListDisplay = () => {
    if (!lodash.isEmpty(search)) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
    // console.log(lodash.isEmpty(search));
  };

  useEffect(() => {
    handleSearchListDisplay();
  }, [search]);

  return (
    <MobileSearchList>
      <div className="top">
        <div className="search-container">
          <div className="icon">
            <RiSearchLine fontSize={14} />
          </div>
          <div>
            <input
              type={"text"}
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div onClick={onClick}>
          <h4>Cancel</h4>
        </div>
      </div>
      {display ? (
        <div className="rest">
          <div className="popular">
            <h4>Popular today</h4>
            <div className="p-flex">
              <div>
                <RiSearchLine fontSize={20} />
              </div>
              <div>
                <p>Synergy</p>
              </div>
            </div>
            <div className="p-flex">
              <div>
                <RiSearchLine fontSize={20} />
              </div>
              <div>
                <p>Synergy</p>
              </div>
            </div>{" "}
            <div className="p-flex">
              <div>
                <RiSearchLine fontSize={20} />
              </div>
              <div>
                <p>Synergy</p>
              </div>
            </div>{" "}
            <div className="p-flex">
              <div>
                <RiSearchLine fontSize={20} />
              </div>
              <div>
                <p>Synergy</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </MobileSearchList>
  );
}
