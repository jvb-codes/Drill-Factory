export const initialState = {
  input: "",
  userSentence: null,
  exampleSentences: [],
  selectedWordsErrorMsg: false,
  isMenuOpen: false,
  isWordSelectionConfirmed: false,
  showInputBox: true,
  showHighlightWords: false,
  showExampleSentences: false,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "USER_INPUT":
      return { ...state, input: action.payload };
    case "USER_SENTENCE":
      return { ...state, userSentence: action.payload };
    case "SHOW_INPUT_BOX":
      return { ...state, showInputBox: true };
    case "HIDE_INPUT_BOX":
      return { ...state, showInputBox: false };
    case "EXAMPLE_SENTENCES":
      return { ...state, exampleSentences: action.payload };
    case "SHOW_HIGHLIGHT_WORDS":
      return { ...state, showHighlightWords: true };
    case "HIDE_HIGHLIGHT_WORDS":
      return { ...state, showHighlightWords: false };
    case "SHOW_EXAMPLE_SENTENCES":
      return { ...state, showExampleSentences: true };
    case "HIDE_EXAMPLE_SENTENCES":
      return { ...state, hideExampleSentences: false };
    case "SHOW_NAV_MENU":
      return { ...state, isMenuOpen: true };
    case "HIDE_NAV_MENU":
      return { ...state, isMenuOpen: false };
    default:
      return state;
  }
};
