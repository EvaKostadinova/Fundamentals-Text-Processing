function passwordGenerator(arr) {
    let [str1, str2, word] = arr; 
    let concatStr = str1 + str2;

    let vowels = ['a', 'e', 'i', 'o', 'u'];

    let idx = 0;

    for(let char of concatStr){
        if(vowels.includes(char)){
            concatStr = concatStr.replace(char, word[idx].toUpperCase());
            idx++;

            if(idx === word.length){
                idx = 0;
            }
        }

    }

    let finalPassword = concatStr.split('').reverse().join('');
    console.log(`Your generated password is ${finalPassword}`);

}

passwordGenerator([

'ilovepizza',

'ihatevegetables',

'orange'

]);