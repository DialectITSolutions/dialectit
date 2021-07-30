import React, { useState } from 'react'
import imgURL from '../assets/smalllogo.png';
import bigimgURL from '../assets/dialogo.png';

export function DialectHeader(props : any) {
    return (
        <header>
            <a href="https://dialect.it">
                <img src={bigimgURL}/>
            </a>
        </header>
    )
}
  
export function DialectFooter(props : any) {
    return (
    
        <div className="footerWrapper">
            <footer>
                <div className="footerrow footerlogo">
                    <img src={imgURL}/>
                </div>
                <div className="footerrow">
                    <p>Epost:</p>
                    <a href="mailto:support@dialect.se">support@dialect.se</a>
                    <p>Vardagar 07.00 - 17.00</p>
                </div>
                <div className="footerrow">
                    <p>Telefon:</p>
                    <a href="tel:020-555555">020-55 55 55</a>
                    <p>Vardagar 07.00 - 17.00</p>
                </div>
            </footer>
        </div>

    )
}