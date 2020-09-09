import React, { Component } from "react";
import { render } from "react-dom";
import FormularioCadastro from "./components/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import 'fontsource-roboto';


class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1">Formulário de Cadastro</Typography>
        <FormularioCadastro />
      </Container>
    );
  }
}

export default App;
