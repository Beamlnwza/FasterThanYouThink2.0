import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './css/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { RecoilRoot, useRecoilValue } from 'recoil'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/home" element={<App />}></Route>
          <Route path="/play" element={<App />}></Route>
        </Routes>
        {/* <App /> */}
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
)
