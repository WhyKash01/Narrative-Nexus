"use client";
import { atom, selector } from "recoil";
const textLineNumber = atom({
  key: "textLineNumber",
  default: [1,2],
});
const textSize = atom({
  key: "textSize",
  default: 3,
});
const userdetail = atom({
  key: "userdetail",
  default: {}
})
const userD = atom({
  key: "user",
  default: {}
})
const AllPost =atom({
  key: "all post",
  default:[]
})
const posts = atom({
  key: "posts",
  default:[]
})
const popularAcc= atom({
  key: "popular Account",
  default:[]
})
const findedAcc= atom({
  key: "findedAcc",
  default:[]
})

const exist= atom({
  key: "exist",
  default:{}
})
export {
  textLineNumber,
  textSize,
  userdetail,
  posts,
  userD,
  AllPost,
  exist,
  popularAcc,
  findedAcc,
};