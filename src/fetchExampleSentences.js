import { makeSentenceObj } from "./ExampleSentences";

export default async function fetchExampleSentences(
  userSentence,
  selectedWords,
  dispatch
) {
  const wordsString = selectedWords.map((item) => item.word);
  const promptData = {
    sentence_id: 1,
    sentence: userSentence,
    wordsToReplace: wordsString,
    formatWordsToReplace: () => {
      const quotes = promptData.wordsToReplace.map((item) => `"${item}"`);
      const wordsToReplaceStr = quotes.join(", ");
      return { wordsToReplaceStr };
    },
    numOfExamples: 3,
    rules: `1. Replace only the words in the prompt. 2. Only use the same grammar tense and pattern as the sentence in th e prompt sentence. 3. Do not number your examples.`,
  };
  const { wordsToReplaceStr } = promptData.formatWordsToReplace();

  const fetchData = {
    model: "text-davinci-003",
    API_KEY: process.env.REACT_APP_OPENAIAPI_KEY,
    URL: () =>
      `https://api.openai.com/v1/engines/${fetchData.model}/completions`,
    prompt: () =>
      `Change the sentence ${promptData.sentence} by replacing the words ${wordsToReplaceStr} with new words. Make ${promptData.numOfExamples} example sentences. Strictly follow these rules: ${promptData.rules}`,
    POST: () => {
      return {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + fetchData.API_KEY,
        },
        body: JSON.stringify({
          prompt: fetchData.prompt(),
          max_tokens: 50,
          n: 1,
        }),
      };
    },
  };

  const response = await fetch(fetchData.URL(), fetchData.POST());
  const data = await response.json();
  const sentences = data.choices[0]?.text.trim().split("\n");
  makeSentenceObj(sentences, dispatch);
}
