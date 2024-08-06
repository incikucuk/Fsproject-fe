import React from 'react'
import { useNavigate } from 'react-router-dom';

const AnasayfaComponent = () => {

    const navigator = useNavigate(); 

    function showList() {
      navigator("/il-ilce")
    }

  return (
    <div className='px-4 py-5 my-5 text-center'>
      <div className='px-4 py-5 my-5 text-center'>
        <img className='d-block mx-auto mb-4' src='/src/assets/mavidev.png'></img>
        <h2 className='display-7 fw-bold'>HOSGELDINIZ</h2>
        <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={showList}>
                Listeyi görüntüle
              </button>
      </div>
       
    </div>
  )
}

export default AnasayfaComponent