import React from "react";
import { Button, TextField } from "@material-ui/core";

function FormularioCadastro() {
  return (
    <form>

      <TextField id="nome" label="Nome" variant="outlined" />

      <TextField id="sobrenome" label="Sobrenome" variant="outlined" />
      <TextField id="cpf" label="CPF" variant="outlined" />
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
