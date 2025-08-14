function capitalizeWords(str) {
    if (!str) return "";
    let splittedStrArr = str.trim().split(' ');
    let count = 0;
    if (splittedStrArr.length > 0) {
        for (let item of splittedStrArr) {

            let firstCharOfItem = item[0];
            let remainingChars = item.slice(1);
            let capitalizedWord = firstCharOfItem?.toUpperCase() + remainingChars.toLowerCase();
            splittedStrArr[count] = capitalizedWord
            count++;
        }
        return splittedStrArr.join(' ')
    }

}

capitalizeWords("hello world");