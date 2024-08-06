import React,{useState,useEffect} from "react";
import { listILIlce } from "../services/ILIlceService";
import { useNavigate } from "react-router-dom";

const ListILIlceComponent = () => {
  const [iLIlceler, setIlIlceler] = useState([])

  const navigator = useNavigate();   //add kısmı router yapılabilmesi icin kullanildi

  useEffect(() => {
     listILIlce().then((response) => {
        setIlIlceler(response.data)
     }).catch(error => {
        console.error(error);
     })
  }, [])

  function addNewILIlce() {
    navigator("/add-il-ilce")

  }
  function anasayfa() {
    navigator("/")
  }

  return (
    <div className="container">
    <h2 className="text-center">IL-Ilce Listesi</h2>
    <button className="btn btn-primary mb-2" onClick={addNewILIlce}>Add Il-Ilce</button>

    <table className="table table-striped table-bordered">
      <thead className="table-dark">
        <tr>
          <th scope="col"> Id</th>
          <th scope="col"> İL</th>
          <th scope="col"> İlce </th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {
        iLIlceler.map(ilIlce =>
          <tr key={ilIlce.id}>
            <td>{ilIlce.id}</td>
            <td>{ilIlce.il}</td>
            <td>{ilIlce.ilce}</td>
          </tr>
        )}
      </tbody>
    </table>
    <button className="btn btn-danger mb-2" onClick={anasayfa}>Anasayfa</button>
  </div>
  );
};

export default ListILIlceComponent;
