import React, { Component } from "react";
import { render } from "react-dom";
import FormularioCadastro from "./components/FormularioCadastro";

class App extends Component {
  render() {
    return (
      <>
        <h1>Formulário de Cadastro</h1>
        <FormularioCadastro />
      </>
    );
  }
}

export default App;
