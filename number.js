console.log(Number("42"));      // -> 42
console.log(Number("11"));      // -> 11
console.log(Number("0x11"));    // -> 17 (Hexadecimal)
console.log(Number("0o11"));    // -> 9  (Octal)
console.log(Number("0b11"));    // -> 3  (Binary)
console.log(Number("12e3"));    // -> 12000 (Notasi eksponensial)
console.log(Number("Infinity"));// -> Infinity
console.log(Number("text"));    // -> NaN (Bukan angka)
