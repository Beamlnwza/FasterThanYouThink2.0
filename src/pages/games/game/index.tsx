import React from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'

import { gameAtom as gameState } from './gameAtom'

import './css/index.css'
import Input from './input'
import Calc from './math/calc'

const Game = () => {
  const [state, setState] = useRecoilState(gameState)

  const examNumbers = parseInt(state['exam'].join(''))

  return (
    <>
      <div className="game-wrapper">
        <div className="numbers-wrapper">
          <div className="exam">{state['message']}</div>
          <div className="numbers">
            {state['numbers'].map((number, index) => (
              <div key={index}>{number}</div>
            ))}
          </div>
          <div>{examNumbers}</div>
        </div>
        <Input />
      </div>
      <Calc />
    </>
  )
}

export default Game
