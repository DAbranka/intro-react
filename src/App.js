// import logo from './logo.svg';
//
// todo: Séparer les components dans différent fichiers .js (ex pour le button => button.js).
// todo: Ecrire en bas du code "export default <fichier.js>".
// todo: Importer dans App.js les différents components.
//
// Components
// header
// main
// form
// button
// list (ul)
//

import "./App.css";
import Header from "./Header"; // Importer le component
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <Header /> {/* Appeler le component*/}
      <hr></hr>
      <Main />
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
    </div>
  );
}

export default App;
