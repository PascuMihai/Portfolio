import React from 'react';
import Header from './components/Header';
import './App.css';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
      <Form />
    </div>
  );
}

export default App;
