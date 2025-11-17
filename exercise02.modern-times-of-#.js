function modernTimes(str) {
    let hashWords = str.split(' ').filter(w => w.startsWith('#') && w.length > 1);

    for(let word of hashWords){
        word = word.substring(1);

        let pattern = /^[A-Za-z]+$/;

        if(pattern.test(word)){
            console.log(word); 
        }
    }

}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');