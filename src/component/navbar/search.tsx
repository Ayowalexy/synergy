import React, { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { SearchList } from "./style";
import * as lodash from "lodash";
import { FiSearch } from "react-icons/fi";
import Search_icon from "../../assets/svgs/home/search.svg";
import { colors } from "../../styles/colors";
interface Props {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  searchListDisplay?: boolean;
}
export default function Search({ searchListDisplay, onChange }: Props) {
  // const [searchListDisplay, setSearchListDisplay] = useState(false);

  return (
    <>
      <div className="icon">
        <FiSearch fontSize={15} color={colors.textGrey3} />
        {/* <img src={Search_icon} alt="search" width={15.83} /> */}
      </div>
      <div>
        <input type={"text"} placeholder="Search Synergy" onChange={onChange} />
      </div>
      {searchListDisplay ? (
        <SearchList>
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
            <div className="p-flex">
              <div>
                <RiSearchLine fontSize={20} />
              </div>
              <div>
                <p>Synergy</p>
              </div>
            </div>
          </div>
        </SearchList>
      ) : (
        ""
      )}
    </>
  );
}
