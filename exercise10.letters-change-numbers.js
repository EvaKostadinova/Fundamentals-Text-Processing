function lettersChangeNumbers(input) {
    let strings = input.split(/\s+/);
    let total = 0;

    for(let str of strings){
        let firstLetter = str[0];
        let lastLetter = str[str.length - 1];
        let number = Number(str.slice(1, -1));

        let firstPos = firstLetter.toLowerCase().charCodeAt(0) - 96;
        let lastPos = lastLetter.toLowerCase().charCodeAt(0) - 96;

        if(firstLetter === firstLetter.toUpperCase()){
            number /= firstPos;
        } else {
            number *= firstPos;
        }

        if(lastLetter === lastLetter.toUpperCase()){
            number -= lastPos;
        } else {
            number += lastPos;
        }

        total += number;

    }

    console.log(total.toFixed(2));
    

}

lettersChangeNumbers('A12b s17G');