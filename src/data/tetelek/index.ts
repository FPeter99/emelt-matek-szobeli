import { TETELEK_01_05 } from './tetel01_05';
import { TETELEK_06_10 } from './tetel06_10';
import { TETELEK_11_15 } from './tetel11_15';
import { TETELEK_16_20 } from './tetel16_20';
import { TETELEK_21_25 } from './tetel21_25';
import { Tetel } from '../../types/math';
import { enrichTetelekWithOralContent } from '../oralContent/enrich';

export const TETELEK: Tetel[] = enrichTetelekWithOralContent([
  ...TETELEK_01_05,
  ...TETELEK_06_10,
  ...TETELEK_11_15,
  ...TETELEK_16_20,
  ...TETELEK_21_25,
]);

const expectedNumbers = Array.from({ length: 25 }, (_, index) => index + 1);
if (TETELEK.length !== expectedNumbers.length || TETELEK.some((tetel, index) => tetel.number !== expectedNumbers[index])) {
  throw new Error('The oral exam dataset must contain exactly the official 25 topics, in order.');
}
