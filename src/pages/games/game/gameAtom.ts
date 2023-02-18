import { atom } from 'recoil'
import numberGenerator from './initial/numberGenerator'

export type result = number | 'error'

export const gameAtom = atom({
  key: 'gameState',
  default: {
    numbers: numberGenerator(4) as number[],
    exam: numberGenerator(2) as number[],
    answer: '' as string,
    result: 0 as number,
  },
})
