import React from "react";
import { TextField, Button } from "@material-ui/core";

function DadosUsuario({aoEnviar}) {
  return (
    <form onSubmit={(event)=>{
      event.preventDefault();
      aoEnviar()}}>
      <TextField
        id="email"
        label="email"
        type="email"
        required
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="senha"
        label="senha"
        type="password"
        required
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
