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
import Form from "./Form";
import Header from "./Header"; // Importer le component
import List from "./List";


function App() {
  return (
    <div className="App">
      <Header /> {/* Appeler le component*/}
      <hr></hr>
      <main>
        <Form />
        <List />
      </main>
      
    </div>
  );
}

export default App;
