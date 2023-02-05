import React from 'react'
import HeaderGames from '../games/header'
import { useState, useEffect } from 'react'
import './css/index.css'

const About = () => {
  const [Solved, setSolved] = useState(0)
  const [posNumber, setPosNumber] = useState<number>(4 ** 8)

  useEffect(() => {
    randomPos()
  }, [])

  const randomPos = async () => {
    let timeout = await setTimeout(() => {
      setPosNumber(Math.floor(Math.random() * 100000) + 1)
    }, 1000)
    await setPosNumber(4 ** 8)
  }

  return (
    <>
      <HeaderGames />
      <div className="HeaderBlanks"></div>
      <div className="s-wrapper">
        <div className="f1">
          <div className="f1-1">
            <div>4 DIGIT</div>
            <div>1 ANSWER</div>
            <div>8 POSSIBLE OPERATORS</div>
            <div>
              <div className="Highlight">{posNumber}</div> POSSIBLE WAY
            </div>
          </div>
          <div className="f1-2">
            <div></div>
            <div>FASTER THAN YOU THINK</div>
            <div>
              A unique mathematics game similar to 24 hover with more response
              possibilities ranging from 0 to 100 and more higher mathematics
              operators up to modulo and square root!
            </div>
          </div>
        </div>
      </div>
      <div className="s-wrapper"></div>
    </>
  )
}

export default About
