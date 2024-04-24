import { createSlice } from "@reduxjs/toolkit";

const storedSize =
  typeof window !== "undefined" ? localStorage.getItem("textClass") : null;
const parsedSize = storedSize ? storedSize : null;

const storedLanguage =
  typeof window !== "undefined" ? localStorage.getItem("language") : null;
const parsedLanguage = storedLanguage ? JSON.parse(storedLanguage) : "uz";

const storedTheme =
  typeof window !== "undefined" ? localStorage.getItem("theme_dark") : false;
const parsedTheme = storedTheme ? JSON.parse(storedTheme) : false;

const initialState = {
  textSize: parsedSize,
  langauge: parsedLanguage,
  theme: parsedTheme,
};

const textClassSlice = createSlice({
  name: "textClass",
  initialState,
  reducers: {
    setTextSize(state, action) {
      state.textSize = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("textClass", JSON.stringify(action.payload));
      }
    },
    setLanguageData(state, action) {
      state.langauge = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("language", JSON.stringify(action.payload));
      }
    },
    setThemeDark(state, action) {
      state.theme = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("theme_dark", JSON.stringify(action.payload));
      }
    },
  },
});

export const { setTextSize, setLanguageData, setThemeDark } =
  textClassSlice.actions;
export default textClassSlice.reducer;
