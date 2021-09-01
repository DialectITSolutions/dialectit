import React, { useState } from 'react'
import './App.css'
import { DialectHeader, DialectFooter } from './DialectProps'
//import tv_logo from './assets/tv_logo.png'
import teamviewer from '/assets/teamviewerbl.png'
import teamviewersnabb from '/assets/teamviewersnabb.png'
//import tv_req from './assets/tv_req.png'
import bruksanvisning from '/assets/bruksanvisningar.png'
import bylinelogo from '/assets/byline.png'

function App() {

  function DownloadSection() {

    return (
    <div className="row">
      <a href="https://get.teamviewer.com/dialectquick"><div className="col">
        <img className="thumbnail" src={teamviewersnabb}/>
        <h3>Teamviewer snabbhjälp</h3>
        <p className="fadedText">Windows / Mac</p>
      </div></a>

      <a href="https://dialect.it/TV15/DialectTV.exe"><div className="col">
        <img className="thumbnail" src={teamviewer}/>
        <h3>Teamviewer supportavtal</h3>
        <p className="fadedText">Windows</p>
      </div></a>

      <a href="https://www.dialect.it/Bruksanvisningar"><div className="col">
        <img className="thumbnail" src={bruksanvisning}/>
        <h3>Manualer och guider</h3>
        <p className="fadedText">Ladda ned hjälpmaterial</p>
      </div></a>

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

          <img id="byline" src={bylinelogo}/>

        </div>
      </main>

      <DialectFooter/>
    </div>
  )
}

export default App
