const numLines = 10;

function setup() {
  console.log(getString(pascal(numLines)));
}

function pascal(n) {
  const seq = [[1], [1, 1]];

  for (let i = 2; i < n; i++) {
    let l = [1];
    for (let j = 1; j < i; j++) {
      l.push(seq[i - 1][j] + seq[i - 1][j - 1]);
    }
    l.push(1);
    seq.push(l);
  }

  return seq;
}

function getString(arr) {
  let output = '';
  for (let i = 0; i < arr.length; i++) {
    let lineOutput = '';
    for (let j = 0; j < arr[i].length; j++) {
      lineOutput += (j == arr[i].length - 1) ? arr[i][j] : `${arr[i][j]} `;
    }
    output += (i == arr.length - 1) ? lineOutput : `${lineOutput}\n`;
  }
  return output;
}  