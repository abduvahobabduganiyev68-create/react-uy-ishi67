import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  const isDark = theme === 'dark';

  return (
    <div
      style={{
        backgroundColor: isDark ? '#000000' : '#ffffff',
        color: isDark ? '#ffffff' : '#000000',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: '20px',
        gap: '10px',
        transition: 'all 0.3s ease',
      }}
    >
      <button
        onClick={() => setTheme('light')}
        style={{ padding: '8px 16px', cursor: 'pointer' }}
      >
        Light
      </button>

      <button
        onClick={() => setTheme('dark')}
        style={{ padding: '8px 16px', cursor: 'pointer' }}
      >
        Dark
      </button>
    </div>
  );
}

export default App;