import { lobeChat, useWatchPluginMessage } from '@lobehub/chat-plugin-sdk/client';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [data, setData] = useState<any>();
  const { data: watchData, loading } = useWatchPluginMessage<any>();

  useEffect(() => {
    // Get the current message of the plugin from LobeChat
    lobeChat
      .getPluginMessage()
      .then((response) => {
        console.log('Plugin received data:', response);
        setData(response);
      })
      .catch((error) => {
        console.error('Error getting plugin message:', error);
      });
  }, []);

  // Also display any data received from watchData
  useEffect(() => {
    if (watchData) {
      console.log('Received watch data:', watchData);
    }
  }, [watchData]);

  if (loading) {
    return (
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
        <p>Loading plugin data...</p>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'white', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h2>MLS Search Plugin</h2>
      {data ? (
        <div>
          <p>Data received from LobeChat:</p>
          <pre
            style={{
              background: '#f0f0f0',
              borderRadius: '4px',
              overflow: 'auto',
              padding: '10px',
            }}
          >
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      ) : (
        <p>
          Waiting for data from LobeChat... If you see this, the plugin is rendering but hasn&apos;t
          received data yet.
        </p>
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
