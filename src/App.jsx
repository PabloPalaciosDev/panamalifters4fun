import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./app/pages/landing/page";

//layout  
import NavBar from './components/nav/NavBar'

const routes = [{ path: "/", element: <LandingPage /> }];

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
