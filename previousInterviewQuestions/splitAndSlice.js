// split string into multiple segments , no leading and trailing spaces should be there
// mainString= "The sun rises in the east" 
// Split the mainString into substrings of length "k", while k is user input
// each substring should not have leading and trailing white spaces
// ex: k = 6, then substrings should be = ['The su', 'n rise', 's in t', 'he eas', 't']
// ex: k = 4, then substrings are = [ 'The', 'sun', 'rise', 's in', 'the', 'eas', 't' ]

// function trimStartAndEnd(trimString) {
//     if(trimString[trimString.length - 1] === ' ')
//         trimString = trimString.slice(0, trimString.length - 1);
//     if(trimString[0] === ' ')
//         trimString = trimString.substring(1);
// }
function splitintoSubStrings( string , k) {
    let arr = [];
    for(let i = 0, j = 0; i < string.length; j++)
    {
        // arr[j] = string.splice(i, k);
        arr[j] = string.substr(i, k);
        // trimStartAndEnd(arr[j]);
        if(arr[j][arr[j].length - 1] === ' ')
            arr[j] = arr[j].slice(0, arr[j].length - 1);
        if(arr[j][0] === ' ')
            arr[j] = arr[j].substring(1);
        i = i + k;
    }
    return arr;
}

let mainStr = "The sun rises in the east";

console.log (splitintoSubStrings (mainStr, 4));