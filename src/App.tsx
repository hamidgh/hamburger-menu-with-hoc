import React from 'react';
import './App.scss';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import {Routes, Route} from "react-router-dom";
import withMenu from "./sharedComponent/menu/withMenu";

const HomePageComponent = withMenu(HomePage, {});
const AboutPageComponent = withMenu(AboutPage, {});

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePageComponent />} />
        <Route path="about" element={<AboutPageComponent />} />
      </Routes>
    </div>
  );
}

export default App;
