import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import thumbsUp from "../img/katya-austin-4Vg6ez9jaec-unsplash.jpg";
import { AppThunk } from "./store";

const blankQuote = {
  id: "",
  title: "You can do this.",
  author: "Katya Austin", // credits for the thumbsUp pic
  media: thumbsUp,
  url: "",
  cat: "",
};

const initialState: Inspire = {
  quote: blankQuote,
};

export const inspireSlice = createSlice({
  name: "spring",
  initialState,
  reducers: {
    updateQuote: (state, action: PayloadAction<Quote>) => {
      state.quote = action.payload;
    },
  },
});

export const { updateQuote } = inspireSlice.actions;

export default inspireSlice.reducer;

// async grab quote from api
export const fetchQuote = (): AppThunk => async (dispatch) => {
  const response: Quote = await fetch(
    "https://healthruwords.p.rapidapi.com/v1/quotes/?t=Mindfulness&maxR=1&size=large",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_QUOTE_KEY!,
        "x-rapidapi-host": "healthruwords.p.rapidapi.com",
      },
    }
  )
    .then((response) => response.json())
    .then((quote) => {
      return quote[0];
    })
    .catch((err) => {
      console.error(err);
    });
  dispatch(updateQuote(response));
};

interface Inspire {
  quote: Quote;
}

export interface Quote {
  //   id: string;
  title: string;
  author: string;
  url: string;
  media: string;
  cat: string;
}
