import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => {
        setMessage(response.data.hello);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Mobile Detailing</h1>
        <p>Your car deserves the best care.</p>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
