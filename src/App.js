import React from 'react';
import Header from './components/Header';
import './App.css';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Form from './components/Form';
import MyPhotos from './components/MyPhotos';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
      <MyPhotos />
      <Form />
    </div>
  );
}

export default App;
