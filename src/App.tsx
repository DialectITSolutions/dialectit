import React, { useState } from 'react'
import './App.css'
import { DialectHeader, DialectFooter } from './DialectProps'
import tv_logo from '../assets/tv_logo.png'
import tv_req from '../assets/tv_req.png'
import bruksanvisning from '../assets/Bruksansvisning.png'


function App() {

  function DownloadSection() {

    return (
    <div className="row">
      <div className="col">
        <a href="https://get.teamviewer.com/dialectquick"><img src={tv_logo}/></a>
        <p>Teamviewer snabbhjälp</p>
        <p>Windows / Mac</p>
      </div>

      <div className="col">
        <a href="https://dialect.it/TV15/DialectTV.exe"><img src={tv_req}/></a>
        <p>Teamviewer supportavtal</p>
        <p>Windows</p>
      </div>

      <div className="col">
        <a href="https://www.dialect.it/Bruksanvisningar"><img src={bruksanvisning}/></a>
        <p>Manualer och guider</p>
        <p>Ladda ned hjälpmaterial</p>
      </div>

    </div>
    )
    
  }

  return (
    <div className="App">
      <DialectHeader/>

      <main>
        <div className="Content">
          <h2>DIALECT SUPPORT</h2>
          <h3>Klicka på ikonerna för att ladda hem våra supportverktyg</h3>
          
          <br/>
          <div className="horizontalLine"/>
          <br/>
          
          <DownloadSection/>

        </div>
      </main>

      <DialectFooter/>
    </div>
  )
}

export default App
