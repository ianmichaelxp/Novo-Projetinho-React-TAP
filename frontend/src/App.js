import React, { Component } from "react";
import axios from "axios";
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
  
  axios.post('http://localhost:5000/cadastros', dados)
  .then(res => {
    console.log(dados);
  });
    //console.log(dados);

    // [{cep: "58400000"
    // cidade: "Campina Grande"
    // cpf: "12345678909"
    // email: "ianmichael.xp@gmail.com"
    // endereco: "Joao Wallig"
    // estado: "PB"
    // formato: true
    // nome: "Ian"
    // numero: "123"
    // senha: "123"
    // sobrenome: "Silva"},]
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
