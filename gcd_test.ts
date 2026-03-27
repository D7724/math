import {  assertEquals } from "@std/assert";
import { gcdBruteForce } from "./gcd.ts";

Deno.test('gcdBruteForce of 18 and 27 is 9', () => {
  // Arrange
  const a = 18;
  const b = 27;
  // Act
  const result = gcdBruteForce(a, b);
    // Assert
    assertEquals(result, 9);
});