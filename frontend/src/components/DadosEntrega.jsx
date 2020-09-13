import React, {useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DadosEntrega({aoEnviar}) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, endereco, numero, cidade, estado });
      }}
    >
      <TextField
        value={cep}
        onChange={(evento) => {
          setCep(evento.target.value);
        }}
        id="cep"
        type="number"
        required
        label="CEP"
        variant="outlined"
        margin="normal"
      />

      <TextField
        value={endereco}
        onChange={(evento) => {
          setEndereco(evento.target.value);
        }}
        id="endereco"
        type="text"
        required
        label="Endereço"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        value={numero}
        onChange={(evento) => {
          setNumero(evento.target.value);
        }}
        id="numero"
        type="number"
        required
        label="Número"
        variant="outlined"
        margin="normal"
      />

      <TextField
        value={cidade}
        onChange={(evento) => {
          setCidade(evento.target.value);
        }}
        id="cidade"
        type="text"
        required
        label="Cidade"
        variant="outlined"
        margin="normal"
      />

      <TextField
        value={estado}
        onChange={(evento) => {
          setEstado(evento.target.value);
        }}
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
