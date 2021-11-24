import './App.css';
import Evento from './components/Evento';
import Button from './components/evento/Button';
import Form from './components/Form';
import FormTest from './components/FormTest';
import Frase from './components/Frase';

import List from './components/List';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {
  const name = 'Maria';
  return (
    <div className="App">
      <Evento />
      <Form />
      <FormTest />

    </div>
  );
}

export default App;
