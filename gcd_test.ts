import { assertEquals } from "@std/assert";
import { gcdBruteForce, gcdEuclid } from "./gcd.ts";

Deno.test("gcdBruteForce of 18 and 27 is 9", () => {
  // Arrange
  const a = 18;
  const b = 27;
  // Act
  const result = gcdBruteForce(a, b);
  // Assert
  assertEquals(result, 9);
});

Deno.test("gcdEuclid of gcdTests", () => {
  // Arrange
  const gcdTests = [
    { a: 1, b: 1, gcd: 1 },
    { a: 1, b: 2, gcd: 1 },
    { a: 2, b: 2, gcd: 2 },
    { a: 3, b: 4, gcd: 1 },
    { a: 6, b: 9, gcd: 3 },
    { a: 81, b: 36, gcd: 9 },
  ];
  // Act
  for (const { a, b, gcd } of gcdTests) {
    console.log(`gcd of ${a} and ${b} is ${gcd}`);
    const actual = gcdEuclid(a, b);
    // Assert
    assertEquals(actual, gcd);
  }
});
