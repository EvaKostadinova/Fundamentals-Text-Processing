function countStringOccurrences(text, wordToSearch) {
    text = text.replaceAll(',', ' ');
    text = text.replaceAll('.', ' ');
    text = text.replaceAll('!', ' ');
    text = text.replaceAll('?', ' ');
    text = text.replaceAll(':', ' ');
    text = text.replaceAll(';', ' ');
    text = text.replaceAll('-', ' ');

    let allWords = text.split(' ');

    let count = 0;

    for(let word of allWords){
        if(word === wordToSearch){
            count++;
        }
    }

    console.log(count);
    
}

countStringOccurrences('This is a word and it also is a sentence',

'is');