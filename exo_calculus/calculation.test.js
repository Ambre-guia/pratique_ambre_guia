const { add, sub, mul, div } = require("./calculation");

test("addition de 5 et 3 devrait donner 8", () => {
  expect(add(5, 3)).toBe(8);
});

test("soustraction de 5 par 3 devrait donner 2", () => {
  expect(sub(5, 3)).toBe(2);
});

test("multiplication de 5 par 3 devrait donner 15", () => {
  expect(mul(5, 3)).toBe(15);
});

test("division de 6 par 3 devrait donner 2", () => {
  expect(div(6, 3)).toBe(2);
});

test("division par zéro devrait lancer une erreur", () => {
  expect(() => div(6, 0)).toThrow("Division par zéro est impossible");
});
