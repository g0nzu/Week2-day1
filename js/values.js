// Tipos de valores primitivos

console.log(6, typeof 6);
console.log('Pepe', typeof 'pepe');
console.log(true, typeof true);
console.log(undefined, typeof undefined);
console.log(null, typeof null);
console.log(5n, typeof 5n);
console.log(Symbol(), typeof Symbol());

// Valores Referenciados / Objetos

console.log({}, typeof {});
console.log([], typeof []);
console.log(new Date(), typeof new Date());
console.log(/a/i, typeof /a/i);
console.log(() => {}, typeof (() => {}));

[].map();
'pepe'.toUpperCase();
