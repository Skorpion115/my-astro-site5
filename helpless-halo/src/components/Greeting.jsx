import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h2>{greeting}! Vielen Dank für Ihren Besuch!</h2>
      <button onClick={() => setGreeting(randomMessage())}>
        Neue Begrüßung
      </button>
    </div>
  );
}