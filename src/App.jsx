import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./app/pages/landing/page";

//layout  
import NavBar from './components/nav/NavBar'
import AtletasMasc from "./app/pages/atletas/masc/page";
import AtletasFem from "./app/pages/atletas/fem/page";
import AtletasMascTop10 from "./app/pages/resultados/masc/page";

const routes = [
  { path: "/", element: <LandingPage /> },
  { path: "/atletas-masc", element: <AtletasMasc /> },
  { path: "/atletas-fem", element: <AtletasFem />},
  { path: "atletas-masc/top10", element: <AtletasMascTop10 />},
];

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
