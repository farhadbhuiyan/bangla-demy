import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Footer></Footer>
    </div>
  );
}

export default App;
