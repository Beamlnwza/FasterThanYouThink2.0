import React, { useState, useEffect } from 'react'
import './css/index.css'
import HeaderGames from './header'
import Game from './game'

export const Games = () => {
  return (
    <>
      <div className="wrapper">
        <div className="header">
          <HeaderGames />
        </div>
        <div className="main-body">
          <Game />
        </div>
      </div>
      <div className="background"></div>
    </>
  )
}
