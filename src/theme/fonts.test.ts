import fonts from "./fonts";

describe("Fonts", () => {
  test("Is defined", () => {
    expect(fonts).toBeTruthy();
  });

  test("Defines `body`", () => {
    expect(fonts.body).toBeTruthy();
  });

  test("Defines `heading`", () => {
    expect(fonts.heading).toBeTruthy();
  });
});
