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
const posts = atom({
  key: "posts",
  default:[]
})
export {
  textLineNumber,
  textSize,
  userdetail,
  posts,
};