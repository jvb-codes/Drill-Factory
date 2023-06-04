import { useState, useEffect, useContext } from "react";
import { AppContext } from "./App";
import styles from "./styles/exampleSentences.module.css";

//Exported to fetchExampleSentences
export function makeSentenceObj(sentences, dispatch) {
  const sentenceObj = sentences?.map((item, index) => {
    return { id: index + 1, selected: false, sentence: item };
  });
  dispatch({ type: "EXAMPLE_SENTENCES", payload: sentenceObj });
}

export default function ExampleSentences() {
  const { state, dispatch } = useContext(AppContext);
  const [isCopiedMsg, setIsCopiedMsg] = useState(false);
  const [selectedSentences, setSelectedSentences] = useState([]);

  useEffect(() => {
    const filteredExampleSentences = state.exampleSentences?.filter(
      (item) => item.selected
    );
    setSelectedSentences(filteredExampleSentences);
  }, [state.exampleSentences]);

  console.log(state.exampleSentences, selectedSentences);

  //Changes background of sentence if selected
  function handleBackgroundColor(id) {
    const updated = state.exampleSentences.map((item) => {
      if (item.id === id) {
        return { ...item, selected: !item.selected };
      } else return item;
    });
    dispatch({ type: "EXAMPLE_SENTENCES", payload: updated });
  }

  async function handleCopyText() {
    const textToCopy = selectedSentences
      ?.map((item) => item.sentence)
      .join(" ");
    try {
      await navigator.clipboard.writeText(textToCopy);
      handleCopiedTextMsg();
    } catch (error) {
      console.error(error);
    }
  }
  const handleCopiedTextMsg = () => {
    const messageDuration = setTimeout(() => {
      setIsCopiedMsg(false);
    }, 750);
    setIsCopiedMsg(true);
    return () => {
      clearTimeout(messageDuration);
    };
  };
  function handleGoToPreviousScreen() {
    dispatch({ type: "SHOW_HIGHLIGHT_WORDS" });
    dispatch({ type: "HIDE_EXAMPLE_SENTENCES" });

    dispatch({ type: "EXAMPLE_SENTENCES", payload: [] });
  }
  const loader = (
    <div className={styles.loader}>
      <p>Loading...</p>
    </div>
  );
  const displayExamples = state.exampleSentences?.map((item) => (
    <div key={item.id} className={`${item.selected && styles.selected}`}>
      <label className={styles["sentences-container"]} for={item.id}>
        <p>{item.sentence}</p>
        <input
          onClick={() => handleBackgroundColor(item.id)}
          type="checkbox"
          id={item.id}
        />
        <div className={styles.checkbox}></div>
      </label>
    </div>
  ));

  return (
    <>
      <div
        className={`${styles["copied-success"]} ${
          isCopiedMsg ? styles.visible : styles.hidden
        } `}
      >
        Text copied
      </div>
      <section className={styles["grid"]}>
        <div className={styles["icon-container"]}>
          <i
            onClick={handleGoToPreviousScreen}
            className="material-symbols-outlined"
          >
            arrow_back_ios
          </i>
          <div>
            <i
              onClick={() => handleCopyText()}
              className="material-symbols-outlined"
            >
              content_paste
            </i>
            <p onClick={() => handleCopyText()}>Copy</p>
          </div>
        </div>
        {state.exampleSentences.length === 0 ? loader : displayExamples}
      </section>
    </>
  );
}
