import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch('/api/refute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: input })
    });
    const data = await res.json();
    setResponse(data.result);
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Fight Antisemitism</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter antisemitic claim here..."
          style={{ width: '300px', marginRight: '10px' }}
        />
        <button type="submit">Refute</button>
      </form>
      <div style={{ marginTop: '2rem' }}>
        <h2>Response:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
}

