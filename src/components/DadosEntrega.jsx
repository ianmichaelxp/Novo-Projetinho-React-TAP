import React from "react";
import { TextField, Button } from "@material-ui/core";

function DadosEntrega() {
  return (
    <form>
      <TextField
        id="cep"
        type="number"
        required
        label="CEP"
        variant="outlined"
        margin="normal"
      />

      <TextField
        id="endereco"
        type="text"
        required
        label="Endereço"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        id="numero"
        type="number"
        required
        label="Número"
        variant="outlined"
        margin="normal"
      />

      <TextField
        id="cidade"
        type="text"
        required
        label="Cidade"
        variant="outlined"
        margin="normal"
      />

      <TextField
        id="estado"
        type="text"
        required
        label="Estado"
        variant="outlined"
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
