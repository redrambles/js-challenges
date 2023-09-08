const helloWorld = require("./hello-world");

test("Returning 'Hello, World!' as a string", () => {
  const result = helloWorld();
  expect(result).toBe("Hello World!");
});

test("This is true", () => {
  const yes = true;
  expect(yes).toBe(true);
});
