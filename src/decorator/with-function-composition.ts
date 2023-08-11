function split(str: string) {
  return str.split("");
}

function reverse(arr: any[]) {
  return arr.reverse();
}

function join(arr: any[]) {
  return arr.join("");
}

const compose = (...functions: Function[]) => (str: string) => {
  return functions.reduceRight((acc, fn) => fn(acc), str);
}

export const composedFunction = compose(join, reverse, split);


// Another example -----------------------------------------------------

const addCustomer = fn => (...args) => {
  console.log('saving customer info...');
  return fn(...args);
}

const processOrder = fn => (...args) => {
  console.log(`processing order #${args[0]}`);
  return fn(...args);
}

let completeOrder = (...args) => {
  console.log(`Order #${[...args].toString()} completed.`);
}

export const orderProcess = addCustomer(processOrder(completeOrder));
