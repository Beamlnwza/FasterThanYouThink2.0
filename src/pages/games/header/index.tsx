import React from 'react'
import './css/index.css'
import Solves from './Solves'

const HeaderGames = () => {
  return (
    <>
      <div className="wrapperH">
        <div className="logo">
          <a className="logoText">
            <div>FASTER</div> <div>THAN YOU THINK</div>
          </a>
        </div>
        <div className="menu">
          <div className="menuBtn">DARK MODE</div>
          <div className="menuBtn">GITHUB</div>
          <div className="menuBtn">CREDIT</div>
          <div className="awbanner ">SOON!</div>
          <Solves />
        </div>
      </div>
    </>
  )
}

export default HeaderGames
