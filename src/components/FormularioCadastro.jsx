import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(nome, sobrenome, cpf, promocoes, novidades);
      }}
    >
      <TextField
        value={nome}
        onChange={(evento) => {
          setNome(evento.target.value);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="dense"
      />

      <TextField
        value={sobrenome}
        onChange={(evento) => setSobrenome(evento.target.value)}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="dense"
      />
      <TextField
        value={cpf}
        onChange={(evento) => setCpf(evento.target.value)}
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="dense"
      />

      <FormControlLabel
        control={
          <Switch
            checked={promocoes}
            onChange={(evento) => {
              setPromocoes(evento.target.checked);
            }}
            name="promocoes"
            color="primary"
          />
        }
        label="Promoções"
      />

      <FormControlLabel
        control={
          <Switch
            checked={novidades}
            onChange={(evento) => {
              setNovidades(evento.target.checked);
            }}
            name="novidades"
            color="primary"
          />
        }
        label="Novidades"
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
