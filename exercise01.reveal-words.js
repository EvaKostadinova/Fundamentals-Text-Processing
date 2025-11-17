function revealWords(wordsToPlace, text) {
    let wordsArr = wordsToPlace.split(', ');

    for(let word of wordsArr){
        let startTemplate = '*'.repeat(word.length);
        text = text.replace(startTemplate, word);
    }

    console.log(text);
    
}

revealWords('great, learning',

'softuni is ***** place for ******** new programming languages');