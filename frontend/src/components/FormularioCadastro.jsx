import React, { useState, useEffect } from "react";
import axios from "axios";
import { Stepper, Step, StepLabel,  } from "@material-ui/core";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import Finalizacao from "./Finalizacao";

//

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dados, setDados] = useState({});
  const URL = 'http://localhost:5000/cadastros';

  useEffect(() => {
    if (etapaAtual === formularios.length-1) aoEnviar(dados);
  });

  useEffect(async()=>{
    let res = await axios.get(URL);
    console.log(res.data);
  }, []);
  

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Finalizacao />,
  ];

  function coletarDados(dadosColetados) {
    setDados({ ...dados, ...dadosColetados });
    proximoForm();
  }

  function proximoForm() {
    setEtapaAtual(etapaAtual + 1);
  }

  function formularioAtual(etapa) {
    return formularios[etapa];
  }

  return <>
  <Stepper activeStep={etapaAtual}>
    <Step><StepLabel>Login</StepLabel></Step>
    <Step><StepLabel>Pessoal</StepLabel></Step>
    <Step><StepLabel>Entrega</StepLabel></Step>
    <Step><StepLabel>Confirmação</StepLabel></Step>
  </Stepper>
  {formularioAtual(etapaAtual)}</>;
}

export default FormularioCadastro;
