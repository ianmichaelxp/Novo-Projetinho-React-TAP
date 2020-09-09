import React from "react";
import { Button, TextField } from "@material-ui/core";

function FormularioCadastro() {
  return (
    <form>

      <TextField id="nome" label="Nome" variant="outlined" fullWidth="true" />

      <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth="true" />
      <TextField id="cpf" label="CPF" variant="outlined" fullWidth="true"/>
      <label>Promoções</label>
      <input type="checkbox" />

      <label>Novidades</label>
      <input type="checkbox" />

      <Button variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
