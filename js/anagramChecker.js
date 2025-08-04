function isAnagram(str1, str2) {
    str1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    str2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    let sortedFirstStr = str1.split('').sort().join('');
    const sortedSecondStr = str2.split('').sort().join('');
    return sortedFirstStr === sortedSecondStr
}

//For the purpose of user debugging.
isAnagram("listen", "silent");