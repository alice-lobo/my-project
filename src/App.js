import './App.css';
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {
  const name = 'Maria';
  return (
    <div className="App">
      <h1>Olá React!</h1>
      <p>Meu primeiro App</p>
      <HelloWorld />
      <SayMyName name="Mateus" />
      <SayMyName name="João" />
      <SayMyName name={name} />
      <Pessoa 
        foto="https://via.placeholder.com/150"
        nome="Rodrigo"
        idade="28"
        profissao="Programador"
      
      />
    </div>
  );
}

export default App;
