import React, { useEffect, useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DadosUsuario({ aoEnviar, usuarioTemCadastro }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
//  const [cadastro, setCadastro] = useState();
  // const [temCadastro, setTemCadastro] = useState(false);

  // useEffect(() => {
  //   if( typeof(usuarioTemCadastro(email)) === 'object' )
  //   {
  //     setTemCadastro(true);
  //   }
  // });

  return (
    <form
      onSubmit={(event) => 
      {
        event.preventDefault();
       
        const cadastro = usuarioTemCadastro(email);
        //console.log(cadastro);
        if(typeof(cadastro) === 'object')
        {
          console.log(cadastro + 'cad');
          aoEnviar(true, cadastro);
        }
      
      
       // console.log(cadastro + "nao entrou if");
        // console.log(typeof(usuarioTemCadastro(email)));
        // console.log(typeof(usuarioTemCadastro(email)));
        aoEnviar(false, {email, senha});
      
      }}
    >
      <TextField
        value={email}
        onChange={(evento) => {
          setEmail(evento.target.value);
        }}
        id="email"
        label="email"
        type="email"
        required
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={senha}
        onChange={(evento) => {
          setSenha(evento.target.value);
        }}
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
