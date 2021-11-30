import './App.css';
import Condicional from './components/Condicional';
import Evento from './components/Evento';
import Button from './components/evento/Button';
import Form from './components/Form';
import FormTest from './components/FormTest';
import Frase from './components/Frase';

import List from './components/List';
import OutraLista from './components/OutraLista';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {
  
  const meusItens = ['1', '2', '3']

  return (
    <div className="App">
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]} />
    </div>
  );
}

export default App;
