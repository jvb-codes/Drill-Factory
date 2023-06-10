//TODO -
Find out why p tags get a pointer on hover by default.

Error Msg in UserInput comp

- Change the isFetched state name to "isInputOk, setIsInputOk".
- Create a new funct in UserInput, handleInputConfirmation;
- Create a setError state in App, initialize it to false.
- Set Error msg to "Enter a sentence first"

Edit UserInput Btn

-in Highlight comp, add an "Edit Sentence" Btn next to the confirmation btn.
-add onClick isInputOk function on edit btn, set to false when clicked.

Error Msg in HighlightWords comp

- create IsWordSelectionOk state in App
- add handleWordSelection onClick on confirmation button in HighlightWords comp
- check to see if wordSelection is empty or not.

Fetching from GPT's API

- Import FetchExampleSentences to Highlights comp
- add FetchExampleSentences onClick to confirmation button in Highlights comp.
- Pass in userSentence (string), selectedWords (object)
- In fetchExampleSentences, accept userSentnece and selectedWords args
- Map over selectedWords (obj) and return an array of just the words.
- Change dataPrompt's sentence to userSentence and wordsToReplace to the result of mapping over selectedWords obj.

Add Copied msg

- create "isCopiedMsg" state in App
- pass isCopiedMsg to ExampleSentences comp
- add click event to copy icon and text

HighlightWords HTML structure

highlight-words\_\_grid-item
...title
...words

Adding "previous page" functionality without buttons

- in HighlightWords styles, add a gray bg for the "word selection" and "selected words" box headers.
- use the same gray as the bg for unselected words in "word selection".
- add back icon to the "word selection" box header.
- add same back icon to the "copy" container in ExampleSentences comp.

Add loader screen when fetching data

Moving Reducer function to own file

-create a file "reducerFunction"
-copy and paste intial states and reducer function to new file
-import the reducer function into app

/_MEDIA QUERIES_/

/_ Smartphones _/
@media (max-width: 576px) {
}

/_ Tablets _/
@media (min-width: 576px) and (max-width: 991px) {
}

/_ Laptops and Desktops _/
@media (min-width: 992px) and (max-width: 1199px) {
}

/_ Large Desktops _/
@media (min-width: 1200px) {
}
