import React, { Component } from "react";
import { render } from "react-dom";
import FormularioCadastro from "./components/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import 'fontsource-roboto';


class App extends Component 
{
  render() 
  {
    return (
      <Container component="article" maxWidth="sm">
        <Typography align="center" variant="h4" component="h1">Preencha para receber nosso livro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarFormulario} validarCPF={validarCPF}/>
      </Container>
    );
  }

}
function aoEnviarFormulario(dados) {
    console.log(dados);
}

function validarCPF(cpf)
{
  if (cpf.length !== 11)
  {
    return { valido: false, texto: "O CPF deve ter 11 dígitos" }
  }else
  {
    return { valido: true, texto: "" }
  }
}

export default App;
