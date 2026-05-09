function transpose(matrix) {
  let x = matrix.length;
  let y = matrix[0].length;
  let matrix2 = [];
  for (let i = 0; i < y; i++){
    matrix2[i] = [];
    for (let j = 0; j < x; j++){
      matrix2[i][j] = matrix[j][i];
    }
  }
  return matrix2;
}
