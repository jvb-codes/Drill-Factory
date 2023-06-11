//CONTEXT
import { useContext } from "react";
import { AppContext } from "../components/App";

//COMPONENTS
import UserInput from "../components/UserInput"
import HighlightWords from "../components/HighlightWords"
import ExampleSentences from "../components/ExampleSentences"

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