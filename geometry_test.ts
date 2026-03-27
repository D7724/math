import { assertAlmostEquals, assertEquals } from "@std/assert";
import { Circle, Point2D, Rectangle } from "./geometry.ts";

Deno.test("circumference of a circle with radius 5 is roughtly 31.416", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);

  // When
  const actual = circle.circumference();

  // Then
  assertAlmostEquals(actual, 31.416, 0.01);
});

/* Deno.test("circle encompasses rectangle", () => {
  // Arrange
  const circle = new Circle(new Point2D(0, 0), 5);
  const rectangle = new Rectangle(new Point2D(-1, -1), new Point2D(1, 1));

  // Act
  const actual = circle.encompasses(rectangle);

  // Assert
  assertEquals(actual, true);
}); */

Deno.test("rectangle encompasses circle", () => {
  // Arrange
  const rectangle = new Rectangle(new Point2D(-5, -5), new Point2D(5, 5));
  const circle = new Circle(new Point2D(0, 0), 2);

  // Act
  const actual = rectangle.encompasses(circle);

  // Assert
  assertEquals(actual, true);
});

Deno.test("center is between west and east", () => {
  // Arrange
  const circle = new Circle(new Point2D(0, 0), 5);

  // Act
  const actual = circle.isBetweenX(circle.west(), circle.east());

  // Assert
  assertEquals(actual, true);
});

Deno.test("center is between south and north", () => {
  // Arrange
  const circle = new Circle(new Point2D(0, 0), 5);

  // Act
  const actual = circle.isBetweenY(circle.south(), circle.north());

  // Assert
  assertEquals(actual, true);
});

Deno.test("center is not between north and south", () => {
  // Arrange
  const circle = new Circle(new Point2D(0, 0), 5);

  // Act
  const actual = circle.isBetweenY(circle.north(), circle.south());

  // Assert
  assertEquals(actual, false);
});
