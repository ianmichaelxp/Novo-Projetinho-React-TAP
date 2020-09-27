import React from "react";
import { Button, Typography } from "@material-ui/core";

function Cadastrado(id) {

  return (
    <>
      <Typography variant="h5">Olá {id.nome}, você já fez seu cadastro!</Typography>
      <Button variant="contained" color="secondary">
        Cancelar inscrição
      </Button>
    </>
  );
}

export default Cadastrado;