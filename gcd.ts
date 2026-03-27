export function gcdBruteForce(a: number, b: number) {
  let gcd = 1;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}

export function gcdEuclid(a: number, b: number): number {
  if (a === b) {
    return a;
  }
  return gcdEuclid(Math.min(a, b), Math.max(a, b) - Math.min(a, b));
}
