import { useState, useContext, useEffect } from "react";
import { AppContext } from "./App";
import styles from "./styles/userInput.module.css";

export default function UserInput() {
  const { state, dispatch } = useContext(AppContext);
  const [inputErrorMsg, setInputErrorMsg] = useState(false);
  const [winWidth, setWinWidth] = useState(window.innerWidth);

  function handleInput(input) {
    dispatch({ type: "USER_INPUT", payload: input });
  }

  function handleInputConfirmation() {
    const sentenceLength = state.input.length;
    if (sentenceLength > 0) {
      dispatch({ type: "HIDE_INPUT_BOX" });
      dispatch({ type: "SHOW_HIGHLIGHT_WORDS" });
      dispatch({ type: "USER_SENTENCE", payload: state.input });
      setInputErrorMsg(false);
    } else {
      setInputErrorMsg(true);
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setWinWidth(window.innerWidth);
    };

    // Add event listener to listen for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* <div className="winWidth">{winWidth}</div> */}
      <section className={styles.grid}>
        <p
          className={`${styles["error-message"]} ${
            inputErrorMsg
              ? styles["error-message-visible"]
              : styles["error-message-hidden"]
          }`}
        >
          Sentence required
        </p>
        <input
          type="text"
          autoFocus
          placeholder="Enter a sentence"
          value={state.input}
          onChange={(e) => handleInput(e.target.value)}
        />
        <button onClick={handleInputConfirmation}>Confirm</button>
      </section>
    </>
  );
}
