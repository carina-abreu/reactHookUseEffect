import { useState, useEffect } from 'react';

function Exemplo4() {
  const [count, setCount] = useState(300);
  useEffect(() => {
    document.title = `Você clicou ${count} vezes`;
  });

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>

    </div>
  );
}

export default Exemplo4;