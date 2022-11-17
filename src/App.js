// import logo from './logo.svg';
// todo: Séparer les components dans différent fichiers .js (ex pour le button => button.js).
// todo: Ecrire en bas du code "export default <fichier.js>".
// todo: Importer dans App.js les différents components.
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1> My Todo App</h1>
      </header>
      <main>
      <form>
          <input type="text" id="firstname" name="fname" placeholder="Type a new todo"></input>
          <button>Add Todo</button>
        </form>
        <hr></hr>
        <h2>
          Todos
        </h2>
        <ul>
          <li>Learn React</li>
          <li>Be Awesome!</li>
        </ul>
{/* ------------------------------------------------------------------------- */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React @ BeCode
        </a> */}
{/* ------------------------------------------------------------------------- */}
      </main>
    </div>
  );
}

export default App;
