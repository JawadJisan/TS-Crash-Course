import { describe, expect, it } from 'vitest';

import { average } from '../solutions/03-arrays-and-tuples.js';
import { calculateTotal } from '../solutions/05-functions-and-callbacks.js';
import { toFiniteNumber } from '../solutions/06-unknown-never-and-safe-boundaries.js';
import { nextLight } from '../solutions/07-literal-types-and-unions.js';
import { isStringArray } from '../solutions/08-narrowing-and-type-guards.js';
import { stateLabel } from '../solutions/09-discriminated-unions.js';
import { getProperty } from '../solutions/15-keyof-typeof-and-indexed-access.js';
import { groupById } from '../solutions/17-generic-functions-and-constraints.js';
import { parseUser } from '../solutions/21-fetch-and-runtime-validation.js';
import { safeJson } from '../solutions/22-error-handling-and-result.js';
import { uniqueSorted } from '../solutions/23-collections-and-dates.js';
import { parseLimit } from '../solutions/29-node-cli-files-and-paths.js';

describe('course solutions', () => {
  it('calculates collection values', () => {
    expect(average([10, 20, 30])).toBe(20);
    expect(average([])).toBe(0);
    expect(calculateTotal([50, 50], 10)).toBe(90);
  });

  it('narrows unknown values', () => {
    expect(toFiniteNumber('12.5')).toBe(12.5);
    expect(toFiniteNumber('')).toBeUndefined();
    expect(isStringArray(['a', 'b'])).toBe(true);
    expect(isStringArray(['a', 2])).toBe(false);
  });

  it('handles finite state and generic helpers', () => {
    expect(nextLight('red')).toBe('green');
    expect(stateLabel({ status: 'success', count: 3 })).toBe('Loaded 3');
    expect(getProperty({ name: 'TypeScript' }, 'name')).toBe('TypeScript');
    expect(groupById([{ id: 'a', value: 1 }]).get('a')?.value).toBe(1);
  });

  it('validates boundaries and collections', () => {
    expect(parseUser({ id: 1, name: 'Amina' })).toEqual({ id: 1, name: 'Amina' });
    expect(() => parseUser({ id: 'bad' })).toThrow('Invalid user');
    expect(safeJson('{"ok":true}').ok).toBe(true);
    expect(uniqueSorted(['b', 'a', 'b'])).toEqual(['a', 'b']);
    expect(parseLimit('5')).toBe(5);
    expect(parseLimit('-1', 10)).toBe(10);
  });
});
