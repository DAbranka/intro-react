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
      <Main />
</div>
  );
}


export default App;
