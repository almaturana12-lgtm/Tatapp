import { describe, expect, it } from 'vitest';
import { findResults } from '@/lib/tatapp-data';

describe('Tatapp search', () => {
  it('finds medical documents in an everyday question', () => {
    expect(findResults('¿Dónde están mis exámenes?').some(item => item.title === 'Resultados de exámenes')).toBe(true);
  });
  it('finds pension information without an external connection', () => {
    expect(findResults('revisar información AFP').some(item => item.title === 'AFP y últimos pagos')).toBe(true);
  });
  it('does not invent results', () => {
    expect(findResults('astronomía')).toEqual([]);
  });
});