import { atom } from "recoil";

export const themeState = atom({
	key: "theme",
	default: "black", // blue | black
});
