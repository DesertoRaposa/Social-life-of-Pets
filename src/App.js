import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';


const App = ({ state, addPost, updateNewPostText }) => {
  return (
    <section className='wrapper'>
      <div className='container'>
        <Header />
        <Navbar />
        <Content
          profilePage={state.profilePage}
          dialogsPage={state.dialogsPage}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
        />
        {/* <Footer /> */}
      </div>
    </section>
  )
}

export default App;
