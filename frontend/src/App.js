import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import FormularioCadastro from "./components/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import 'fontsource-roboto';


function App ()
{
  const urlBackend = `http://${process.env.REACT_APP_HOST_BACKEND}:${process.env.REACT_APP_URL_BACKEND}`
  const [listaDeCadastros, setListaDeCadastros] = useState([]);

  useEffect(async() => {
    let res = await axios
    .get(urlBackend);
    setListaDeCadastros(res.data);
  }, []);

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

  function usuarioTemCadastro(email)
  {
    var objeto = undefined;
    listaDeCadastros.map(obj => 
    {
      if (obj.email === email)
      {
        objeto = obj;        
      }
    });
    return objeto;
    // console.log(estaCadastrado);
    // return estaCadastrado;
  } 

  function aoEnviarFormulario(dados) 
  {    
    axios.post(urlBackend, dados)
    .then(res => {
      //console.log(dados);
    });
  }

  return <>
      <Container component="article" maxWidth="sm">
        <Typography align="center" variant="h4" component="h1">Preencha para receber nosso livro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarFormulario} validarCPF={validarCPF} usuarioTemCadastro={usuarioTemCadastro}/>
      </Container>
    </>;
}

export default App;
