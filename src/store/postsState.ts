import { Post } from "@/types/Post";
import { atom } from "recoil";

export const postsState = atom<Post[]>({
  key: "postsState",
  default: [],
});