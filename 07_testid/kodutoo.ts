import {kasRuut} from "../ruut";

test('ruut', () => {
  expect(kasRuut([4, 4, 4, 4])).toBe(true);
});
