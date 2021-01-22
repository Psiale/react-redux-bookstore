import { booksReducer } from "./reducers/books";
import { createStore } from "redux";

const store = createStore({ booksReducer });

export default store;
