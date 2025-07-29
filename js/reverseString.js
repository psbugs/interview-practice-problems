function reverseSentence() {
    let sentence = 'My core experties lies in technologies like React,Redux HTML5 and CSS3';

    let length = sentence.length;
    let reversedSentence = '';
    for (let i = length - 1; i >= 0; i--) {
        reversedSentence += sentence[i];
    }
    return reversedSentence
};

let result = reverseSentence();
console.log('result', result);