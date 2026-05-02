import { frequencyCounter } from "./frequency-counter";

const greet = (name: string): string => {
  return `Hello, ${name}! TypeScript is working.`;
};

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
const sum = numbers.reduce((acc, n) => acc + n, 0);

console.log(greet("World"));
console.log(`Sum of [${numbers.join(", ")}] = ${sum}`);
console.log(frequencyCounter("hello"));
