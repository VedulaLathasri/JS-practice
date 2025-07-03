//Find all prime numbers in an array

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 , 12, 13];

 const array2 = array1. filter(/*callbackfn*/ (elem, index, array) =>{
    if( elem < 2)
    {
        return false;
    }

    if( elem %2 === 0) {
        return elem === 2 ;
    }

    if( (elem === 3) ||(elem === 5) || (elem === 7)){
        return true;
    }
    if(elem > 2)
    {
        if(elem % 3 == 0)
        {
            return false;
        } else if( elem % 5 === 0)
        {
            return false;
        } else if ( elem % 7 == 0)
        {
            return false
        }
        return true;
    }
});

console.log(array2);