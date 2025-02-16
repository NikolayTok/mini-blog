import { atom } from "recoil";

export const registerModalState = atom<boolean>({
  key: "registerModalState",
  default: false,
});

export const loginModalState = atom<boolean>({
  key: "loginModalState",
  default: false,
});
