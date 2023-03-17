let buffer = Buffer.alloc(4);
let bufferArray = Buffer.from([1, 2, 3]);
let bufferString = Buffer.from('Hola');

// console.log(buffer);
// console.log(bufferArray);
console.log(bufferString);

let abc = Buffer.alloc(26);

for (let i = 0; i < 26; i++) {
  abc[i] = i + 97;
}

console.log(abc.toString());