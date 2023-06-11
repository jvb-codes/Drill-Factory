import { useContext, useEffect } from "react";
import { AppContext } from "./App";
import styles from "../styles/wordSelection.module.css";

export default function WordSelection({
  wordSelection,
  setWordSelection,
  selectedWords,
  setSelectedWords,
  selectedWordsErrorMsg,
  setSelectedWordsErrorMsg
}) {
  const { state, dispatch } = useContext(AppContext);

  const splitSentence = state.userSentence.split(/\b(?=\W)|\s+(?!\s*$)/);

  useEffect(() => {
    createWordSelectionObject();
  }, []);

  function createWordSelectionObject() {
    const object = splitSentence.map((word, index) => ({
      id: index + 1,
      word: word,
      selected: false
    }));
    setWordSelection(object);
  }

  function handleClickedWord(word, id) {
    const newItem = {
      id: id,
      word: word
    };
    const isDuplicate = selectedWords.find((item) => item.id === id);
    if (isDuplicate) {
      const removeWord = selectedWords.filter((item) => item.id !== id);
      setSelectedWords(removeWord);
      changeBackgroundColor(id);
    } else {
      setSelectedWords((prevSelectedWords) => [...prevSelectedWords, newItem]);
      changeBackgroundColor(id);
      if (selectedWordsErrorMsg) {
        setSelectedWordsErrorMsg(false);
      }
      return;
    }
  }

  function changeBackgroundColor(id) {
    const updatedWords = wordSelection.map((item) => {
      if (item.id === id) {
        return { ...item, selected: !item.selected };
      }
      return item;
    });
    setWordSelection(updatedWords);
  }

  const wordElements = wordSelection?.map((item) => {
    if (!/\w/.test(item.word)) {
      return (
        <p key={item.id} className={`${styles.word} ${styles["non-word"]}`}>
          {item.word}
        </p>
      );
    } else {
      return (
        <p
          className={`${styles.word} ${
            item.selected ? styles["selected-word"] : styles["unselected-word"]
          }  `}
          key={item.id}
          onClick={() => handleClickedWord(item.word, item.id)}
        >
          {item.word}
        </p>
      );
    }
  });

  return (
    <>
      <section className={styles.grid}>
        <div className={styles.header}>
          <i
            onClick={() => dispatch({ type: "SHOW_INPUT_BOX" })}
            className="material-symbols-outlined"
          >
            arrow_back_ios
          </i>
          <p>Choose words to replace</p>
        </div>
        <div className={styles["word-selection"]}>{wordElements}</div>
      </section>
    </>
  );
}
