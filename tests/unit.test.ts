// Reference documentation for AVA's built-in assertions:
// https://github.com/avajs/ava/blob/main/docs/03-assertions.md#built-in-assertions
import test from 'ava';

test('1 + 1 should equal 2', (t) => {
  t.is(1 + 1, 2);
});
