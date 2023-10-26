import { useState, useEffect } from 'react';

function TopRight() {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      };
      const newFormattedDate = now.toLocaleString('pt-BR', options);
      setFormattedDate(newFormattedDate);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="top-right">
      {formattedDate.split(', ').map((line) => (
        <h1 key={line}>{line}</h1>
      ))}
    </div>
  );
}

export default TopRight;
