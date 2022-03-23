function helloWorld(arr) {
  let mapa = arr;
  let container = new Set();
  let array = [];

  for (let item of mapa) {
    if (item in container) {
      array.push(item);
      console.log(array);
    } else {
      container.add(item);
      console.log(container);
    }
  }
  return array;
}

helloWorld([1, 3, 3, 4, 4, 4]);
