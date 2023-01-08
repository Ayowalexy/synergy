import styled from "styled-components/macro";
import { colors } from "../../styles/colors";

interface Props {
  display: string;
}

export const SearchList = styled.div`
  width: 307px;
  max-height: 519px;
  font-family: "Montserrat", sans-serif;
  color: ${colors.white};
  padding: 0% 3%;
  /* Shade Teal 1 */
  z-index: 1;
  background: ${colors.darkGreen};
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  position: absolute;
  top: 102%;
  .p-flex {
    display: flex;
    width: 33%;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;
    p {
      color: ${colors.otherGrey};
    }
  }
`;

export const MobileSearchList = styled.div`
  height: 100vh;
  max-height: 100vh;
  font-family: "Montserrat", sans-serif;
  color: ${colors.white};
  background-color: ${colors.shadeTeal};
  .top {
    background: ${colors.darkGreen};
    height: 46px;
    display: flex;
    padding: 1% 4%;
    align-items: center;
    justify-content: space-between;
    gap: 5%;
    .search-container {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 1% 2%;
      flex-grow: 1;
      border: 2px solid ${colors.darkGreen2};
      border-radius: 24px;
      gap: 5%;
      color: ${colors.shadeGreen};
      /* background-color: yellow; */
      div:nth-child(2) {
        flex-grow: 1;
      }
      input {
        background-color: ${colors.darkGreen};
        /* width: 99%; */
        width: 90%;
        padding: 1% 3%;
        outline: none;
        border: none;
        margin-bottom: 1%;
        color: ${colors.white};
        font-size: 12px;
        &::placeholder {
          color: ${colors.shadeGreen};
        }
      }
    }
    div:nth-child(2) {
      color: ${colors.orange};
      cursor: pointer;
    }
  }
  .rest {
    .popular {
      padding: 1% 6%;
      /* background-color: yellow; */
      .p-flex {
        display: flex;
        width: 33%;
        justify-content: space-around;
        align-items: center;
        font-size: 14px;
        p {
          color: ${colors.otherGrey};
        }
      }
    }
  }
`;

export const SmNav = styled.div`
  background-color: ${colors.darkGreen};

  display: flex;
  justify-content: space-between;
  padding: 0% 3%;
  align-items: center;
  gap: 2%;
  /* position: fixed;
  left: 0;
  right: 0; */
  height: 67px;
  z-index: 2;
  .logo {
    flex-basis: 18%;
    margin-top: 0.4rem;
    img {
      width: 28px;
    }
  }
  .avi {
    cursor: pointer;
    width: 28px;
    margin-left: 20px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid ${colors.orange};
  }
  .search-container {
    display: flex;
    align-items: center;
    width: 90%;
    border: 2px solid ${colors.darkGreen2};
    border-radius: 16px;
    gap: 3%;
    padding-left: 3%;
    /* background-color: yellow; */
    .icon {
      /* background-color: red; */
    }
    input {
      /* display: none; */
      background-color: ${colors.darkGreen};
      width: 90%;
      outline: none;
      border: none;
      border-radius: 16px;
      margin-bottom: 1%;
      color: ${colors.white};
      font-size: 14px;
      padding: 4% 0;
      &::placeholder {
        visibility: visible;
      }
    }
  }
`;

export const Nav = styled.div`
  display: grid;
  grid-template-columns: 16% 33% 43% auto;
  background-color: ${colors.darkGreen};
  height: 77px;
  align-items: center;
  padding: 0 8%;
  font-family: "Montserrat", sans-serif;
  position: fixed;
  z-index: 2;
  left: 0;
  right: 0;

  .search-container {
    display: grid;
    grid-template-columns: 10% auto;
    align-items: center;
    font-size: 16px;
    width: 305px;
    height: 2.5rem;
    position: relative;
    border: 3px solid ${colors.darkGreen2};
    border-radius: 24px;
    background-color: ${colors.darkGreen};
    padding: 0% 2%;

    &:focus-within {
      border: 3px solid ${colors.primaryGreen};
    }
    div:nth-child(1) {
      /* background-color: blue; */
      margin-left: 8px;
      margin-top: 0px;
    }
    div:nth-child(2) {
      /* background-color: pink; */
    }
    input {
      background-color: ${colors.darkGreen};
      width: 99%;
      outline: none;
      border: none;
      border-radius: 24px;
      margin-bottom: 1%;
      color: ${colors.white};
      font-size: 16px;
      line-height: 24px;
      &::placeholder {
        color: ${colors.textGrey3};
      }
    }
  }
  .icons-container {
    display: flex;
    width: 77%;
    /* background-color: yellow; */
    justify-content: space-evenly;
    .active-link {
      color: ${colors.orange};
    }
    .inactive-link {
      color: ${colors.inactive};
    }

    div {
      cursor: pointer;
      /* background-color: pink; */
      margin-top: 4.5%;
      padding-bottom: 3%;
      &:hover {
        border-bottom: 2px solid #fe9730;
      }
    }
  }
  .line {
    width: 2px;
    height: 28px;
    background-color: ${colors.darkGreen2};
    &:hover {
      border-bottom: none;
    }
  }
  .avi {
    justify-content: right;
    /* background-color: yellow; */
    justify-self: flex-start;
    cursor: pointer;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 2px solid ${colors.orange};
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    padding: 0 3%;
    justify-content: space-between;
    align-items: center;
    height: 67px;

    .logo {
      img {
        width: 110px;
      }
    }
    .avi {
      order: 2;
      img {
        width: 44px;
      }
    }
    .search-container {
      order: -1;
      flex-basis: 12%;
      /* width: 37px; */
      border: none;
      /* width: 12%; */
      /* grid-template-columns: 24% auto; */
      display: flex;
      justify-content: space-around;
      align-items: center;
      input::placeholder {
        visibility: hidden;
      }
    }
    .icons-container {
      display: none;
    }
  }
`;

export const LandingPageNav = styled.div<Props>`
  /* overflow: hidden; */

  background-color: ${colors.darkGreen};

  font-family: "Montserrat", sans-serif;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1;
  /* padding: 5%; */
  .nav {
    display: flex;
    padding: 0% 8.5%;
    justify-content: space-between;
    align-items: center;
    position: relative;
    border-bottom: 2px solid ${colors.borderGreen};
    .ham {
      display: none;
    }
    .sm {
      display: none;
    }

    .home {
      /* background-color: yellow; */
      height: 77px;
      position: relative;

      .hicon {
        /* background-color: red; */
        position: absolute;
        top: 22%;
        img {
          align-items: center;
        }
      }

      .dash {
        /* margin-top: 105%; */
        position: absolute;
        bottom: 0;
        left: 2%;
        width: 33px;
        transition: all ease 500ms;
        border-bottom: 0px solid #fb5046;
      }
      &:hover {
        .dash {
          border-bottom: 2px solid #fb5046;
        }
      }
    }
    .flex {
      display: flex;
      align-items: center;

      width: 19%;
      justify-content: space-between;
    }
  }

  @media only screen and (max-width: 600px) {
    .nav {
      /* box-shadow: 10px 2px 2px 0px rgba(0, 0, 0, 0.75); */
      padding: 7% 2%;
      .logo {
        position: absolute;
        top: 45%;
        img {
          width: 80%;
        }
      }
      .sm {
        display: none;
      }
      .home {
        position: absolute;
        right: 52%;
        .hicon {
          top: 42%;
          left: 7px;
          img {
            width: 20px;
          }
        }
        .dash {
          bottom: 11px;
        }
      }
      .ham {
        position: absolute;
        top: 66%;
        right: 10px;
        transform: translateY(-50%);
        display: block;

        padding: 0.5% 2%;
        /* border: 2px solid white; */
        border-radius: 5px;
        img {
          margin-top: 38%;
        }
      }
      .flex {
        display: flex;
        flex-direction: column-reverse;

        align-items: center;
        display: block;
        position: absolute;
        top: 101%;
        left: 0;
        width: 100%;
        height: 0px;
        transition: height 0.5s ease-out;
        background-color: ${colors.darkGreen};

        z-index: 10;
        .list {
          display: ${(props) => (props.display ? props.display : "none")};
          width: 38%;
          margin: auto;
          text-align: center;
          padding: 0.5rem 0;
          button {
            padding: 6% 36px;
            color: ${colors.black};
          }
        }
      }
    }
    #trans {
      height: 175px;
      transition: height 0.5s ease-out;
      box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.75);
    }
  }
`;

export const Dash = styled.div`
  .dash {
    /* margin-top: 105%; */
    position: absolute;
    bottom: 0;
    left: 2%;
    width: 33px;
    :hover {
      border-bottom: 2px solid #fb5046;
    }
  }
`;
