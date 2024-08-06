import React, { useState } from 'react'
import { createILIlce } from '../services/ILIlceService'
import { useNavigate } from 'react-router-dom'

const ILIlceComponent = () => {
    const [il, setIl] = useState('')
    const [ilce, setIlce] = useState('')

    const navigator = useNavigate();

    const handleNameIl = (e) => setIl(e.target.value)
    const handleNameIlce = (e) => setIlce(e.target.value)

    const saveILIlce = (e) => {
        e.preventDefault();

        const ilIlce = {il,ilce}
        console.log(ilIlce)  
        
        createILIlce(ilIlce).then((response)=> {
            console.log(response.data);
            navigator('/il-ilce')
        })
    }


  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Add Il-Ilce</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Il:</label>
                <input
                  type="text"
                  placeholder="Lütfen il ismi yazin"
                  name="il"
                  value={il}
                  className='form-control'
                  onChange={handleNameIl}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Ilce:</label>
                <input
                  type="text"
                  placeholder="Lütfen ilce ismi girin"
                  name="ilce"
                  value={ilce}
                  className="form-control"
                  onChange={handleNameIlce}
                />
              </div>
              <button className="btn btn-success" onClick={saveILIlce}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ILIlceComponent