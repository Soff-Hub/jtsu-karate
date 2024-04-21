import { createSlice } from "@reduxjs/toolkit";

const storedSize =
  typeof window !== "undefined" ? localStorage.getItem("textClass") : null;
const parsedSize = storedSize ? storedSize : "16px";

const storedLanguage =
  typeof window !== "undefined" ? localStorage.getItem("language") : null;
const parsedLanguage = storedLanguage ? JSON.parse(storedLanguage) : "uz";

const initialState = {
  textSize: parsedSize,
  langauge: parsedLanguage,
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
  },
});

export const { setTextSize, setLanguageData  } = textClassSlice.actions;
export default textClassSlice.reducer;
