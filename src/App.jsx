import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ILIlceComponent from "./components/ILIlceComponent";
import AnasayfaComponent from "./components/AnasayfaComponent";
import ListILIlceComponent from "./components/ListILIlceComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomepageComponent from "./components/AnasayfaComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={ <HomepageComponent />}></Route>
          <Route path="/il-ilce" element={ <ListILIlceComponent />}></Route>
          <Route path="/add-il-ilce" element={ <ILIlceComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
