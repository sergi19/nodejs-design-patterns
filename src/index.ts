import { StringManager } from "./decorator/with-annotations";
import { composedFunction, orderProcess } from "./decorator/with-function-composition";
import { currying } from "./decorator/with-currying";

// console.log(reverse('hello'));

// const stringManager = new StringManager();
// stringManager.print('hello');

// console.log(composedFunction('hello'));

// console.log(currying);
orderProcess('1000');

