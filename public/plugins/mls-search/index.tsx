import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div style={{ backgroundColor: 'lightblue', height: '100px', padding: '20px' }}>
      <h1>MLS Search Plugin Test</h1>
      <p>If you see this, basic rendering is working.</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
