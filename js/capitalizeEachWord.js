function capitalizeWords(str) {
    if (!str) return "";
    let splittedStrArr = str.trim().split(' ');
    let count = 0;
    if (splittedStrArr.length > 0) {
        for (let item of splittedStrArr) {

            let firstCharOfItem = item[0];
            console.log('firstCharOfItem', firstCharOfItem)
            let remainingChars = item.slice(1);
            let capitalizedWord = firstCharOfItem?.toUpperCase() + remainingChars.toLowerCase();
            splittedStrArr[count] = capitalizedWord
            count++;
        }
        console.log(splittedStrArr.join(' '))
        return splittedStrArr.join(' ')
    }

}

capitalizeWords("hello world");