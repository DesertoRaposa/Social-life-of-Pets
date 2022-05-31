import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';


const App = ({ state, store }) => {
  return (
    <div className='mainbg'>
      <section className='wrapper'>
        <div className='container'>
          <Header />
          <Navbar />
          <Content store={store} />
          {/* <Footer /> */}
        </div>
      </section>
    </div>
  );
};

export default App;
