import React, { useEffect, lazy } from 'react'
import { useRecoilState } from 'recoil'
import { resultAtom as resultState, gameAtom as gameState } from '../gameAtom'
import evaluateMath from './evaluate'

const Calc = () => {
  const [result, setResult] = useRecoilState(resultState)
  const [State, setState] = useRecoilState(gameState)

  let countIntial = false

  // Join the array of strings into a single string.
  let examstr = State['exam'].join('')
  // Convert the string to a number.
  let examint = parseInt(examstr)

  const prove = async () => {
    // 1. check for fobidden characters
    await setMessage('')
    if ((await result['answer']) === '') return

    let rawResult: string = await convertToRaw(await result['answer'])

    if (await isForbidden(State['numbers'], rawResult)) {
      await setMessage('Forbidden characters')
      return false
    }

    // 2. check if number is overload or not?
    let numbersDict = await createDict(State['numbers'], 'numbers')
    let resultDict = await createDict([...rawResult], 'exam')

    if (await hasOverload(numbersDict, resultDict)) {
      await setMessage('Overload')
      return false
    }

    // 3. check if number is not in numbers or not?
    if (await notInNumbersCheck(numbersDict, resultDict)) {
      await setMessage('Not in numbers')
      return false
    }

    /*     // 4. check if number is not in numbers or not?
    if (await notInNumbersCheck(numbersDict, resultDict)) {
      await setMessage('Please use all number!')
      return false
    } */

    mathCalc(result['answer'])
  }

  const mathCalc = async (answer: string): Promise<void> => {
    try {
      const result = await evaluateMath(answer)
      if (result === examint) {
        await setMessage('Correct')
        await setResult((oldState) => ({
          ...oldState,
          isCorrect: true,
        }))
      } else {
        await setMessage('Incorrect')
        await setResult((oldState) => ({
          ...oldState,
          isCorrect: false,
        }))
      }
    } catch (error) {
      await setMessage('Error something went wrong?')
      await setResult((oldState) => ({
        ...oldState,
        isCorrect: false,
      }))
    }
  }

  const setMessage = (message: string) => {
    setState((oldState) => ({
      ...oldState,
      message: message,
    }))
  }

  const convertToRaw = async (answer: string) => {
    let raw: string = answer
    raw = removeSqrt(raw)
    raw = removeBrackets(raw)
    raw = removeSpaces(raw)
    raw = removeForbiddenCharacters(raw)
    raw = removeFactorial(raw)

    return raw
  }

  const removeSqrt = (raw: string) => {
    return raw.replace(/\^\((1\/2|1\/3)\)/g, '')
  }

  const removeBrackets = (raw: string) => {
    return raw.replace(/\(|\)/g, '')
  }

  const removeSpaces = (raw: string) => {
    return raw.replace(/\s/g, '')
  }

  const removeForbiddenCharacters = (raw: string) => {
    return raw.replace(/[^0-9+\/\-\*\.]/g, '')
  }

  const removeFactorial = (raw: string) => {
    return raw.replace(/!/g, '')
  }

  const isForbidden = (numbersDict: any, resultDict: any): boolean => {
    let isForbidden = false
    //check if result contains forbidden characters
    if (resultDict.match(/[a-zA-Z]/)) {
      isForbidden = true
    }

    return isForbidden
  }

  const notInNumbersCheck = (numbersDict: any, resultDict: any) => {
    if (!numbersDict || !resultDict) {
      throw new Error('Invalid arguments!')
    }
    if (typeof numbersDict !== 'object' || typeof resultDict !== 'object') {
      throw new Error('Invalid arguments!')
    }
    if (
      Object.keys(numbersDict).length === 0 ||
      Object.keys(resultDict).length === 0
    ) {
      throw new Error('Invalid arguments!')
    }
    return Object.keys(resultDict).some((key) => {
      return !numbersDict[key]
    })
  }

  const hasOverload = (numbersDict: any, resultDict: any) => {
    return Object.keys(resultDict).some((key) => {
      if (numbersDict[key] === undefined) {
        return true
      }
      return numbersDict[key] < resultDict[key]
    })
  }

  const createDict = (numbers: any[], provider: string) => {
    if (!numbers) {
      throw new Error('No numbers provided')
    }
    if (!Array.isArray(numbers)) {
      throw new Error('Numbers must be an array')
    }
    if (numbers.length === 0) {
      throw new Error('No numbers provided')
    }
    return generateDict(numbers)
  }

  const generateDict = (numbers: any[]): { [key: number]: number } => {
    const dict: { [key: number]: number } = {}
    numbers.forEach((number: number) => {
      if (dict[number]) {
        dict[number] = dict[number] + 1
      } else {
        dict[number] = 1
      }
    })
    return dict
  }

  const checking = async () => {
    if (!(await result)) return
    if (await !prove()) return
  }

  useEffect(() => {
    checking()
  }, [result['answer']])

  return <div></div>
}

export default Calc
