import React, { useState, useEffect } from 'react'
import './css/index.css'
import HeaderGames from './header'
import MainBody from './mainBody'

export const Games = () => {
  return (
    <>
      <div className="wrapper">
        <div className="header">
          <HeaderGames />
        </div>
        <div className="main-body">
          <MainBody />
        </div>
      </div>
      <div className="background"></div>
    </>
  )
}
