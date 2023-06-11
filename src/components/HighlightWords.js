import { useState } from "react";

import styles from "../styles/highlightwords.module.css"

import WordsToReplace from "./WordsToReplace";
import WordSelection from "./WordSelection";

export default function HighlightWords({ setIsWordSelectionOk }) {
  const [wordSelection, setWordSelection] = useState([]);
  const [selectedWords, setSelectedWords] = useState([]);
  const [selectedWordsErrorMsg, setSelectedWordsErrorMsg] = useState(false);

  return (
    <div className={styles.wrapper}>
      <WordSelection
        wordSelection={wordSelection}
        setWordSelection={setWordSelection}
        selectedWords={selectedWords}
        setSelectedWords={setSelectedWords}
        selectedWordsErrorMsg={selectedWordsErrorMsg}
        setSelectedWordsErrorMsg={setSelectedWordsErrorMsg}
      />
      <WordsToReplace
        selectedWordsErrorMsg={selectedWordsErrorMsg}
        setSelectedWordsErrorMsg={setSelectedWordsErrorMsg}
        selectedWords={selectedWords}
        setIsWordSelectionOk={setIsWordSelectionOk}
      />
    </div>
  );
}
