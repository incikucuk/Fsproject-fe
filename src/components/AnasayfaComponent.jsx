import React from 'react'
import { useNavigate } from 'react-router-dom';

const AnasayfaComponent = () => {

    const navigator = useNavigate(); 

    function showList() {
      navigator("/il-ilce")
    }

  return (
    <div>
        <p>ANASAYFA</p>
        <p>MAVIDEV HOSGELDNIZ</p>
        <button className="btn btn-success" onClick={showList}>
                Listeyi görüntüle
              </button>
    </div>
  )
}

export default AnasayfaComponent