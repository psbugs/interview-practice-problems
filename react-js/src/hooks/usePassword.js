// hooks/usePassword.js
export default function usePassword(range, checkboxes) {
    let characterPool = "";
    const specialChars = "#@&!*%^(){}";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";

    checkboxes.forEach((item) => {
        if (item.label === "uppercase" && item.isChecked) {
            characterPool += upperCase;
        }
        if (item.label === "lowercase" && item.isChecked) {
            characterPool += lowerCase;
        }
        if (item.label === "numbers" && item.isChecked) {
            characterPool += numbers;
        }
        if (item.label === "symbols" && item.isChecked) {
            characterPool += specialChars;
        }
    });

    if (!characterPool) return "";

    let password = "";
    for (let i = 0; i < range; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    return password;
}
