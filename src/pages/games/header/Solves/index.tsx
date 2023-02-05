import React from 'react'
import { useState } from 'react'

import './css/index.css'

const Solves = () => {
  const [Solve, setSolve] = useState<number>(0)

  return (
    <div className="SolvesWrapper">
      <div>{Solve}</div>
      <div>TOTAL PROBLEM SOLVED</div>
    </div>
  )
}

export default Solves
