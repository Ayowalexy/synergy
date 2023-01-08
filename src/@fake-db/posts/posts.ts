import { ICardDetails } from "../../types/card";
import Girl from "../../assets/jpgs/home/girl.png";
import Ebuka from "../../assets/pngs/home/ebukaa.png";
import Ebu from "../../assets/pngs/home/ebu.png";
import Eghosa from "../../assets/pngs/home/eghosa.png";
import Amaka from "../../assets/pngs/home/amaka.png";
import Folake from "../../assets/pngs/home/folake.png";
import BigS from "../../assets/svgs/others/bigS.svg";

import Ruu from "../../assets/pngs/home/ruu.png";

import Boy from "../../assets/jpgs/home/boy.jpg";
import Debo from "../../assets/pngs/home/debo.png";
// import BigS from "../../assets/svgs/others/bigS.svg";

import Black_girl from "../../assets/pngs/others/black_girl.png";
import Ruth from "../../assets/pngs/others/ruth.png";

import Girls from "../../assets/pngs/others/girls.png";
import { v4 } from "uuid";

export const posts: ICardDetails[] = [
  {
    role: "",
    comment:
      "So nervous about NYSC. I have never been to Gombe before, but I feel better with Synergy.",
    img: [Girl, Boy, Girl],
    open: false,
    id: v4(),
    like: "nil",
    comments: [],
    save: false,
    flag: false,
  },
  {
    role: "Why UI/UX will win",
    comment:
      "UI/UX is undoubtedly a good career. This is a great time to become one if you are passionate about it. There are tons of free resources to get you started. The goal of a UI/UX Designer is to increase the time a user spends on... (more)",

    open: false,
    id: v4(),
    like: "nil",
    comments: [],
    save: false,
    flag: false,
  },
  {
    role: "",
    comment:
      "So nervous about NYSC. I have never been to Gombe before, but I feel better with Synergy.",
    open: false,
    id: v4(),

    like: "nil",
    comments: [],
    save: false,
    flag: false,
  },
];

export const dummyPosts = [
  {
    pfp: Ruu,
    role: "Digital Creator",
    comment:
      "See, I like the soft life. The benefits of having a super supportive community is priceless. Synergy",
    img: Black_girl,
    likeCount: "3.6k",
    commentCount: 186,
    like: true,
    verified: 2,
    hash: false,
    save: false,
    id: v4(),
    name: "Ruth Waziri",
    time: "",
  },
  {
    pfp: Eghosa,
    role: "Youth Corper",
    comment:
      "NYSC can be stressful and difficult. With Synergy, it is easy, fun and exciting. Everyday becomes a new adventure!",
    likeCount: "68",
    title: false,
    verified: 1,
    like: false,
    hash: true,
    save: true,
    id: v4(),
    commentCount: "38",

    name: "Eghosa Obaseki",
    time: "",
  },
  {
    pfp: Amaka,
    role: "Recent Graduate",
    comment:
      "Like most students coming out of school, I was really anxious & scared about what the future holds. Synergy gave me a welcoming community, access to oppportunities and lots of fun.",
    likeCount: "648",
    save: false,
    verified: 0,
    commentCount: 64,
    hash: false,
    like: true,
    id: v4(),
    name: "Amaka Agwu",
    time: "",
  },
  {
    pfp: Folake,
    role: "Youth Corper",
    comment:
      "Don’t face the future alone. Life is better when we unite and we collaborate with each other.",

    likeCount: "144",
    save: false,
    verified: 3,
    commentCount: 12,
    hash: false,
    like: false,
    id: v4(),
    name: "Folake Adebanjo",
    time: "",
  },
];
