//HOOKS
import React, { useState, useReducer, createContext } from "react";
import { RouterProvider } from "react-router-dom";

//COMPONENTS
import Homepage from "./pages/Homepage";
import UserInput from "./UserInput";
import ExampleSentences from "./ExampleSentences";
import MenuOverlay from "./MenuOverlay";
import Layout from "./Layout";
import HighlightWords from "./HighlightWords";
import ErrorPage from "./ErrorPage";

//ROUTES
import { router } from "./routes/router";

//STYLES
import "./styles.css";
import styles from "./styles/app.module.css";

//FUNCTIONS
import { reducer, initialState } from "./reducerFunction";

//USE_CONTEXT

export const AppContext = createContext();

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <main className={styles.wrapper}>
        <MenuOverlay />
        <RouterProvider router={router} />
        {/* {state.showInputBox && <UserInput />}
        {!state.showInputBox && state.showHighlightWords && <HighlightWords />}
        {!state.showInputbox &&
          !state.showHighlightWords &&
          state.showExampleSentences && <ExampleSentences />} */}
      </main>
    </AppContext.Provider>
  );
}
