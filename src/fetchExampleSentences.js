import { makeSentenceObj } from "./ExampleSentences";
import axios from "axios";

export default async function fetchExampleSentences(
  userSentence,
  selectedWords,
  dispatch
) {
  const wordsToReplace = selectedWords
    .map((item) => `"${item.word.trim()}"`)
    .join(", ");

  const prompt = `Generate three example sentences that follow the grammar structure of "${userSentence}" and replace the words ${wordsToReplace} with different ones. Do not number the examples.`;

  const response = await axios.post("http://localhost:5000/", {
    prompt,
  });
  const data = response.data;
  const sentences = data.choices[0]?.text.trim().split("\n");
  makeSentenceObj(sentences, dispatch);
}
