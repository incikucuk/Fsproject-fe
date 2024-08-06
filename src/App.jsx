import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ILIlceComponent from "./components/ILIlceComponent";
import AnasayfaComponent from "./components/AnasayfaComponent";
import ListILIlceComponent from "./components/ListILIlceComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={ <AnasayfaComponent />}></Route>
          <Route path="/il-ilce" element={ <ListILIlceComponent />}></Route>
          <Route path="/add-il-ilce" element={ <ILIlceComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
