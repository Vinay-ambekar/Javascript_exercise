const array = ["vinay", "hello", "world"];
const object = {};

for (let i = 0; i < array.length; i++) {
  object[i] = array[i];
}

console.log(object);
