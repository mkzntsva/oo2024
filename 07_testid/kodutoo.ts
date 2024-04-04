import {kasRuut} from "../kodutoo";

test('ruut', () => {
  expect(kasRuut([4, 4, 4, 4])).toBe(true);
});
