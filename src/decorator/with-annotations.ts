// export function reverse(str: string): string {
//   return str.split("").reverse().join("");
// }

function split(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    let [arg] = args;
    const argSplitted = arg.split("");
    originalMethod.call(this, argSplitted);
  };
}

function reverse(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    let [arg] = args;
    const argReversed = arg.reverse();
    originalMethod.call(this, argReversed);
  };
}

function join(char: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      let [arg] = args;
      const argJoined = arg.join(char);
      originalMethod.call(this, argJoined);
    };
  };
}

export class StringManager {
  @split // simple decorator
  @reverse // simple decorator
  @join("_") // factory decorator
  print(str: string) {
    console.log(str);
  }
}
