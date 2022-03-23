import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <section className='wrapper'>
        <div className='container'>
          <Header />
          <Navbar />
          <Content/>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/dialogs" element={<Dialogs />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </section>
    </BrowserRouter>
  )
}

export default App;
