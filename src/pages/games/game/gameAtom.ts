import { atom } from 'recoil'
import numberGenerator from './initial/numberGenerator'
import { string } from 'mathjs'

export type result = number | 'error'

export type message = string

export interface gameAtomInterface {
  numbers: number[]
  exam: number[]
  message: string
}

export const gameAtom = atom({
  key: 'gameState',
  default: {
    numbers: numberGenerator(4),
    exam: numberGenerator(2),
    message: '',
  } as gameAtomInterface,
})

export interface resultAtomInterface {
  result: result
  answer: string
  isCorrect: boolean
}

export const resultAtom = atom({
  key: 'resultState',
  default: {
    result: 0,
    answer: '',
    isCorrect: false,
  } as resultAtomInterface,
})
