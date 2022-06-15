import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  React.useEffect(() => {
    console.log(`cookieEnabled`, navigator.cookieEnabled);
    console.log(`hardwareConcurrency`, navigator.hardwareConcurrency);
    console.log(`language`, navigator.language);
    console.log(`languages`, navigator.languages);
    console.log(`maxTouchPoints`, navigator.maxTouchPoints);
    console.log(`serviceWorker`, navigator.serviceWorker);
    console.log(`storage`, navigator.storage);
    console.log(`userAgent`, navigator.userAgent);
    console.log(`userAgent`, navigator.userAgent);

    console.log(`webdriver`, navigator.webdriver);
  }, []);
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
