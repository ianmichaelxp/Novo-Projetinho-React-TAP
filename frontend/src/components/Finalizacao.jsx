import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Typography } from "@material-ui/core";

function Finalizacao() {
  const [array, setArray] = useState([]);

  useEffect(async() => {
    let res = await axios
    .get('http://localhost:5000/cadastros');
    setArray(res.data);
  }, []);

  // onClick={ () => {
  //   array.map(obj => console.log(obj.email));
  // }}

  return (
    <>
      <Typography variant="h5">Cadastro concluído com sucesso!</Typography>
      <Button variant="contained" color="secondary">
        Cancelar inscrição
      </Button>
      <Button
        variant="contained"
        color="primary"
      >
        Finalizar
      </Button>
    </>
  );
}

export default Finalizacao;
