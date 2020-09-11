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
        <Typography variant="h3" component="h1">Formulário de Cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarFormulario} validarCPF={validarCPF}/>
      </Container>
    );
  }

}
function aoEnviarFormulario(dados) {
    const bd = [];
    bd.push(dados);
    bd.forEach(element => {
    console.log(element);
   }); 
   console.log(bd);
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
