import { makeSentenceObj } from "./ExampleSentences";

export default async function fetchExampleSentences(
  userSentence,
  selectedWords,
  dispatch
) {
  const quotes = selectedWords.map((item) => `"${item.word}"`);
  const wordsToReplace = quotes.join(", ");
  const response = await fetch("http://localhost:5000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userSentence, wordsToReplace }),
  });
  const data = await response.json();
  const sentences = data.choices[0]?.text.trim().split("\n");
  makeSentenceObj(sentences, dispatch);
}
