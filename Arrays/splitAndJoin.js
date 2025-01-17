// transform border-left-width to borderLeftWidth

function camelize(str) {
    let array ;
    array = str.split('-').map(word => word[0].toUpperCase() + word.slice(1));

    array = array.join('');
    console.log(array);
}

camelize('border-left-width');