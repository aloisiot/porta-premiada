import Porta from "../components/Porta";
import { useState } from "react";
import { atualizarPortas, criarPortas } from "../functions/portas.";

export default function Home() {
  const [portas, setPortas] = useState(criarPortas(3,2));

  function RenderPortas(){
    return (
      <ul style={{display: 'flex', listStyle: 'none'}}>
        {portas.map(porta => {
          return <Porta key={porta.numero} porta={porta}
            onChange={portaCorrente => setPortas(atualizarPortas(portas, portaCorrente))}/>
        })}
      </ul>
    )
  }

  return (
    <div>
      <RenderPortas/>
    </div>
  )
}
