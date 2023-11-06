// Exercise Longest Common Prefix. Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Example
// Input: ["flower","flow","flight"]
// Output: "fl"

var longestCommonPrefix = function(strs) {
    if (strs.length == 0) return "";
    let prefix = strs[2];
    console.log(prefix);
    for (let i = 1; i < strs.length; i++) {
        // indexOf() retorna o index da primeira ocorrência do valor especificado. Se não for encontrado, retorna -1.
        while (strs[i].indexOf(prefix) != 0) {
        console.log(prefix);
        console.log(strs[i].indexOf(prefix));
        // substr() retorna os caracteres em uma string começando no local especificado através do número de caracteres especificados.
        prefix = prefix.substr(0, prefix.length - 1);
        console.log(prefix);
        if (prefix.length == 0) return "";
        }
    }
    return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
// console.log(longestCommonPrefix(["flower","children","car"]));

// Estudar o método substr() e o método indexOf().

// substr() retorna os caracteres em uma string começando no local especificado através do número de caracteres especificados.
const str = 'Mozilla';
// console.log(str.substr(1, 2)); // 'oz'
// console.log(str.substr(0, 30)); 
// str.substr(INICIO, QUANTIDADE DE CARACTERES)

// indexOf() retorna o index da primeira ocorrência do valor especificado. Se não for encontrado, retorna -1.
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);
// console.log('The index of the first "' + searchTerm + '" from the beginning is ' + indexOfFirst);

const paragraph2 = 'The book is on the table.';
const searchTerm2 = 'car';
const indexOfFirst2 = paragraph2.indexOf(searchTerm2);
// console.log(searchTerm2 + ' index: ' + indexOfFirst2);
// expected output: "The index of the first "dog" from the beginning is 40"
// paragraph.indexOf()

const nums = [1, 2, 3, 4, 5];
// console.log(nums.indexOf(2));