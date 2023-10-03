import React from "react";
import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import { validarEmail, validarPassword } from "./validaciones";

const  DatosUsuario = ({updateStep}) =>{
  // constructor(props){
  //   super(props);
  //   this.state ={
  //     email: {
  //       value: '',
  //       valid: true,

  //     },
  //     password: {
  //       value: '',
  //       valid: true,
  //     },

  //   }
  // }

  // render() {
  const [email, setEmail]=useState({value:"",valid:null});
  const [password, setPassword]=useState({value:'', valid:null});  
  return (
      <Box
        component="form"
        autocomplete="off"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
        onSubmit={(e)=>{
          e.preventDefault();
          if (email.valid && password.valid){
            console.log({email,password});
            updateStep(0);
          }
          else{
            console.log("no hCERNADA");
          }
          
        
        }}

      
      >
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          margin="dense"
          type="email"
          
          error={email.valid === false}
          helperText={email.valid === false && "Ingresa un correo electrónico válido"}
          value={email.value}
          onChange={(e)=>{
            const valid = validarEmail(email)
            setEmail({value:  e.target.value, valid: !valid})}
          }
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          fullWidth
          margin="dense"
          type="password"
          error={password.valid === false}
          helperText={password.valid ===false && "Ingresa una contraseña correcta, al menos 8 caracteres"}
          value={password.value}
          onChange={(e)=>{
            const valid1= validarPassword(e.target.value);
            setPassword ({value : e.target.value, valid: valid1})}
          }
        />
        <Button variant="contained" 
                type="submit" 
                >
          Siguiente
        </Button>
      </Box>
    );
  }
//}

export default DatosUsuario;
