import './App.css';
import Condicional from './components/Condicional';
import Evento from './components/Evento';
import Button from './components/evento/Button';
import Form from './components/Form';
import FormTest from './components/FormTest';
import Frase from './components/Frase';

import List from './components/List';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {
  
  return (
    <div className="App">
      <Evento />
      <Form />
      <FormTest />

      <h1>Renderização Condicional</h1>
      <Condicional />
    </div>
  );
}

export default App;
