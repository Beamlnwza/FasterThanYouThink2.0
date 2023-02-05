import React from 'react'
import './css/index.css'
import Solves from './Solves'

import Logo from '../../../assets/Logo.svg'

import { IconBrandGithub, IconMoonStars, IconCode } from '@tabler/icons-react'

const HeaderGames = () => {
  const logoSize = 17
  return (
    <>
      <div className="wrapperH">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="LOGOOOO" className="logoImg" />
          </a>
        </div>
        <div className="menu">
          <a href="" className="menuBtn">
            <IconMoonStars size={logoSize} />
            DARK MODE
          </a>

          <a
            href="https://github.com/Beamlnwza/FasterThanYouThink2.0"
            className="menuBtn"
            target="_blank">
            <IconBrandGithub size={logoSize} />
            GITHUB
          </a>
          <a href="/static" className="menuBtn">
            <IconCode size={logoSize} />
            ABOUT
          </a>
          <div className="awbanner ">SOON!</div>
          <Solves />
        </div>
      </div>
    </>
  )
}

export default HeaderGames
