import React, { useState, useEffect } from "react";
import axios from "axios";
import { Stepper, Step, StepLabel,  } from "@material-ui/core";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import Finalizacao from "./Finalizacao";
import Cadastrado from "./Cadastrado";

function FormularioCadastro({ aoEnviar, validarCPF, usuarioTemCadastro }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [step, setStep] = useState(0);
  const [enviaDados, setEnviaDados] = useState(true);
  const [dados, setDados] = useState({});
  const URL = 'http://localhost:5000/cadastros';

  useEffect(() => {
    if (etapaAtual === formularios.length-1 && enviaDados) aoEnviar(dados);
  });

  useEffect(async()=>{
    let res = await axios.get(URL);
    console.log(res.data + "aqui");
  }, []);
  
  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} usuarioTemCadastro={usuarioTemCadastro} />,
    <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Finalizacao />,
  ];

  function coletarDados(temCadastro, dadosColetados) {
    if(temCadastro === true){
      console.log('tem cadastro');
      setDados(dadosColetados);
      setEnviaDados(false);
    }
    else
    {
      setDados({ ...dados, ...dadosColetados });
      proximoForm();
    }
  }

  function proximoForm() {
    setStep(step + 1);
    setEtapaAtual(etapaAtual + 1);
  }

  function formularioAtual(etapa) {
    if(enviaDados)
    {
      return formularios[etapa];
    }else
    {
      return <Cadastrado id={dados} />
    }
  }

  function stepAtual()
  {
    if(enviaDados)
    {
      return step;
    }
    return 3;
  }

  return <>
  <Stepper activeStep={stepAtual()}>
    <Step><StepLabel>Login</StepLabel></Step>
    <Step><StepLabel>Pessoal</StepLabel></Step>
    <Step><StepLabel>Entrega</StepLabel></Step>
    <Step><StepLabel>Confirmação</StepLabel></Step>
  </Stepper>
  {formularioAtual(etapaAtual)}</>;
}

export default FormularioCadastro;
