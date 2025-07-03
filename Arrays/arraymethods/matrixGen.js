// genarate a matrix with arrays.

// a normal 2d matirx

const matrix=[  [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]];

for(let row in matrix)
{
    let rowstring = matrix[row].join(' ');
    console.log(rowstring);
}

// fill all elems with different values
matrix[0][0] = 'x';
matrix[0][1] = 'b';
for(let row in matrix)
{
    let rowstring = matrix[row].join(' ');
    console.log(rowstring);
}
// matrix of all 1's

// matrix.every(fill(1));

for(let row in matrix)
{
    matrix[row].fill(1);
    console.log(matrix[row]);
}
