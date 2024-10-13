export function add(x: number, y: number): number {
  return x + y;
}

export function sample<T>(arr: T[]): T {
  const index = Math.random() * arr.length;
  return arr[index];
}

export const PI = 3.142;
