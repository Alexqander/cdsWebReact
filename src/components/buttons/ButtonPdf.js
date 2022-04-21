import React from 'react'

export const ButtonPdf = ({urlfile}) => {
  return (
    <>
    <button className="btnPdf">
    <i class="fi fi-rr-diploma" style={{fontSize:15,marginRight:5}}></i>
        <a href={urlfile} className="linkpdf">Ver pdf</a>
    </button>
    </>
  )
}
