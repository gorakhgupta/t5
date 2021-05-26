import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
const App15 = () => {
    return (
        <>
          <Header/>
          <CreateNote/>
          <Note/>
          <Footer/>

        </>
    )

}
export default App15;