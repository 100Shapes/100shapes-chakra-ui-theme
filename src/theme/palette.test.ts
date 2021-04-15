import palette from "./palette";

describe("Palette", () => {
  test("Defines `blue`", () => {
    expect(palette.blue).toBeTruthy();
  });
  test("Defines `pink`", () => {
    expect(palette.pink).toBeTruthy();
  });
  test("Defines `grey`", () => {
    expect(palette.grey).toBeTruthy();
  });
});
