import React from "react";
import { Button, Typography } from "@material-ui/core";

function Finalizacao() {
  return (
    <>
      <Typography variant="h5">Cadastro concluído com sucesso!</Typography>
      <Button variant="contained" color="secondary">
        Cancelar inscrição
      </Button>
      <Button onClick="window.location.reload()" variant="contained" color="primary">
        Finalizar
      </Button>
    </>
  );
}

export default Finalizacao;
