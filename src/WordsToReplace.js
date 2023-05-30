import { useContext } from "react";
import { AppContext } from "./App";
import styles from "./styles/wordToReplace.module.css";
import React from "react";
import fetchExampleSentences from "./fetchExampleSentences";

export default function WordsToReplace({
  selectedWords,
  selectedWordsErrorMsg,
  setSelectedWordsErrorMsg
}) {
  const { state, dispatch } = useContext(AppContext);
  const selectedWordElements = selectedWords.map((item) => (
    <p key={item.id}>{item.word}</p>
  ));

  function handleSelectedWords() {
    const selectedWordsLength = selectedWords.length;
    if (!selectedWordsLength > 0) {
      setSelectedWordsErrorMsg(true);
    } else {
      fetchExampleSentences(state.userSentence, selectedWords, dispatch);
      setSelectedWordsErrorMsg(false);
      dispatch({ type: "HIDE_HIGHLIGHT_WORDS" });
      dispatch({ type: "SHOW_EXAMPLE_SENTENCES" });
    }
  }

  return (
    <>
      <section className={styles.grid}>
        <div className={styles.header}>
          <p>Selected words</p>
        </div>
        <div className={styles.word}>
          {selectedWordsErrorMsg ? (
            <p className={styles["error-message"]}>
              Must select words to replace.
            </p>
          ) : (
            ""
          )}
          {selectedWords.length < 1 && !selectedWordsErrorMsg ? (
            <p className={styles["empty-notification"]}>Empty</p>
          ) : (
            selectedWordElements
          )}
        </div>
      </section>

      <button
        className={styles["confirm-button"]}
        onClick={handleSelectedWords}
      >
        Confirm
      </button>
    </>
  );
}
