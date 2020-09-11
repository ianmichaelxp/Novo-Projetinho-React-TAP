import React, { useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const formularios = [
    <DadosUsuario aoEnviar={proximoForm} />,
    <DadosPessoais aoEnviar={proximoForm} validarCPF={validarCPF} />,
    <DadosEntrega aoEnviar={aoEnviar} />,
  ];

  function proximoForm(dados) {
    setEtapaAtual(etapaAtual + 1);
    aoEnviar(dados);
  }

  function formularioAtual(etapa) {
    return formularios[etapa];
  }

  return <>{formularioAtual(etapaAtual)}</>;
}

export default FormularioCadastro;
