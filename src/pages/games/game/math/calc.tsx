import React, { useEffect, lazy } from 'react'
import { useRecoilState } from 'recoil'
import { resultAtom as resultState, gameAtom as gameState } from '../gameAtom'
import evaluateMath from './evaluate'

const Calc = () => {
  const [result, setResult] = useRecoilState(resultState)
  const [State, setState] = useRecoilState(gameState)

  let countIntial = false

  const prove = async () => {
    await setMessage('')
    if ((await result['answer']) === '') return

    let rawResult: string = await convertToRaw(await result['answer'])

    // 1. check if number is overload or not?

    let numbersDict = await createDict(State['numbers'], 'numbers')
    let resultDict = await createDict([...rawResult], 'exam')

    if (await overloadCheck(numbersDict, resultDict)) {
      await setMessage('Overload')
      return false
    }

    mathCalc(result['answer'])
  }

  const mathCalc = async (answer: string): Promise<void> => {
    try {
      const result = await evaluateMath(answer)
      setMessage(result.toString())
      setResult((oldState) => ({
        ...oldState,
        result: result,
      }))
    } catch (error) {}
  }

  const setMessage = (message: string) => {
    setState((oldState) => ({
      ...oldState,
      message: message,
    }))
  }

  const convertToRaw = async (answer: string) => {
    let raw: string = answer
    //1. remove sqrt
    raw = raw.replace(/\^\((1\/2|1\/3)\)/g, '')

    //2. remove brackets
    raw = raw.replace(/\(|\)/g, '')

    //3. remove spaces
    raw = raw.replace(/\s/g, '')

    //4. remove forbidden characters
    raw = raw.replace(/[+\-*/%]/g, '')

    console.log(raw)

    return raw
  }

  const forbidenCheck = (numbersDict: any, resultDict: any) => {}

  const notInNumbersCheck = (numbersDict: any, resultDict: any) => {}

  const overloadCheck = (numbersDict: any, resultDict: any) => {
    let isOverload = false
    Object.keys(resultDict).forEach((key) => {
      if (numbersDict[key] < resultDict[key]) {
        isOverload = true
      }
    })
    return isOverload
  }

  const createDict = (numbers: any[], provider: string) => {
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
    if ((await result['answer']) === '') return
    if (await !prove()) return
  }

  useEffect(() => {
    checking()
  }, [result['answer']])

  return <div></div>
}

export default Calc
