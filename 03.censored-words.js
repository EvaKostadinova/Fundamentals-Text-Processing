function censoredWords(text, word) {
    let replacement = '*'.repeat(word.length);
    let result = text.replaceAll(word, replacement);

    console.log(result);
    

}

censoredWords('Find the hidden word', 'hidden');