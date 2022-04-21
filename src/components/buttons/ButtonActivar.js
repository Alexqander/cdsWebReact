import React from 'react'
import '../../assets/css/ButtonStyles.css'

export const ButtonActivar = ({status,funcion}) => {
const {id} = status

  return (
   <>
   {id!== 1?(<>
    <button className="btnActivar" onClick={funcion}>
    <i class="fi fi-rr-check" style={{fontSize:15,marginRight:5}}></i>
        Activar
   </button>
   </>):
   <button className="btnDesactivar" onClick={funcion}>
       <i class="fi fi-rr-power" style={{fontSize:15,marginRight:5}}></i>
       Desactivar
   </button>
    }
    
   </>
  )
}
