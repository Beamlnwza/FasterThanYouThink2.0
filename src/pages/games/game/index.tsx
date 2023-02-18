import React from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'

import { gameAtom as gameState } from './gameAtom'

import './css/index.css'
import Input from './input'

const Game = () => {
  const [state, setState] = useRecoilState(gameState)

  const examNumbers = parseInt(state['exam'].join(''))

  return (
    <>
      <div className="game-wrapper">
        <div className="numbers-wrapper">
          <div className="numbers">
            {state['numbers'].map((number, index) => (
              <div key={index}>{number}</div>
            ))}
          </div>
          <div>{examNumbers}</div>
        </div>
        <Input />
      </div>
    </>
  )
}

export default Game
