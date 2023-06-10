//HOOKS
import React, { useReducer, createContext } from "react";
import { RouterProvider } from "react-router-dom";

//COMPONENTS

import MenuOverlay from "./MenuOverlay";

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

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <main className={styles.wrapper}>
        <MenuOverlay />
        <RouterProvider router={router} />
      </main>
    </AppContext.Provider>
  );
}
