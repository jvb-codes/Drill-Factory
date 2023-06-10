//CONTEXT
import { useContext } from "react";
import { AppContext } from "../App";

//COMPONENTS
import UserInput from "../UserInput"
import HighlightWords from "../HighlightWords"
import ExampleSentences from "../ExampleSentences"

function DrillMaker() {
  const { state, dispatch } = useContext(AppContext);
  return (
    <> 
    {state.showInputBox && <UserInput />}
    {!state.showInputBox && state.showHighlightWords && <HighlightWords />}
    {!state.showInputbox && !state.showHighlightWords && state.showExampleSentences && <ExampleSentences/>}
    </>
  )
}

export default DrillMaker