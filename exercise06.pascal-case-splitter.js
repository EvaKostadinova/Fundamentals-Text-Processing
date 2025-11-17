function pascalCaseSplitter(strPascalCase) {
    return strPascalCase.match(/[A-Z][a-z]*/g).join(', ');

}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');