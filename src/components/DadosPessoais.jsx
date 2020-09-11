import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function DadosPessoais({ aoEnviar, validarCPF }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [formato, setFormato] = useState(false);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ nome, sobrenome, cpf, formato });
      }}
    >
      <TextField
        value={nome}
        onChange={(evento) => {
          setNome(evento.target.value);
        }}
        id="nome"
        label="Nome"
        required
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        value={sobrenome}
        onChange={(evento) => setSobrenome(evento.target.value)}
        id="sobrenome"
        required
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={cpf}
        onChange={(evento) => setCpf(evento.target.value)}
        onBlur={(evento) => 
          {
            const ehValido = validarCPF(cpf);
            setErros({
              cpf: ehValido
            })
          }
        }
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        control={
          <Switch
            checked={formato}
            onChange={(evento) => {
              setFormato(evento.target.checked);
            }}
            name="formato"
            color="primary"
          />
        }
        label="Desejo receber também em versão PDF"
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;
