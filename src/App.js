//Hooks
import React, { useState, useReducer, createContext } from "react";

//Components
import UserInput from "./UserInput";
import ExampleSentences from "./ExampleSentences";
import MenuOverlay from "./MenuOverlay";
import Navbar from "./Navbar";
import HighlightWords from "./HighlightWords";

//Styles
import "./styles.css";
import styles from "./styles/app.module.css";

//Functions
import { reducer, initialState } from "./reducerFunction";

export const AppContext = createContext();

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Navbar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <main className={styles.wrapper}>
        <MenuOverlay isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {state.showInputBox && <UserInput />}
        {!state.showInputBox && state.showHighlightWords && <HighlightWords />}
        {!state.showInputbox &&
          !state.showHighlightWords &&
          state.showExampleSentences && <ExampleSentences />}
      </main>
    </AppContext.Provider>
  );
}
