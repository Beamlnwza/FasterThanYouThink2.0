import { evaluate } from 'mathjs'

export default function evaluateMath(expression: string) {
  return evaluate(expression)
}
